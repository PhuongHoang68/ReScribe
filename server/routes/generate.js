// routes/generate.js
const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
const Output = require("../models/Output");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Max input tokens (approx)
const MAX_INPUT_TOKENS = 5000 * 1.5;

// Helper: estimate tokens roughly from characters
const countTokens = (text) => Math.ceil(text.length / 4);

router.post("/", async (req, res) => {
  const { content, outputs, title } = req.body;
  console.log("name", title);
  if (!content || !outputs?.length || !title)
    return res.status(400).json({ error: "Content & outputs & title required." });

  try {
    console.log("title", title);
    const originalTokens = countTokens(content);
    let summary = content;
    if (originalTokens > MAX_INPUT_TOKENS) {
        console.log("MAX TOKEN SURPASSED", originalTokens)
      // Phase 1: Summarize using cheaper GPT-3.5
      const sumRes = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a fast summary assistant." },
          {
            role: "user",
            content: `Summarize this text concisely, preserving tone & key points:\n\n${content}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 1000,
      });
      summary = sumRes.choices[0].message.content;
      console.log("summary", summary)
    }

    // Phase 2: Generate outputs with GPT-4
    const prompt = `Here is the summary:\n${summary}\n\n Always generate this *exact following format*:\n` +
      outputs.map((o) => {
        if (o === "twitter") {
          return `### Twitter Thread
          [Write a short, viral Twitter thread with 3-6 tweets. Use hooks, emojis, and short lines. Avoid robotic phrases—make it sound like something a real expert content creator would post]
          `;
        } else if (o === "instagram") {
          return `### Instagram Caption
          [Short-form engaging text with emotion. Use line breaks. End with 5-10 SEO-relevant hashtags. Avoid robotic phrases—make it sound like something a real expert content creator would post]`;
        } else if (o === "linkedin") {
          return `### LinkedIn Post
          [Professional tone. 3–5 paragraphs. Add a CTA at the end. Avoid robotic phrases—make it sound like something a real expert content creator would post]`;
        } else {
          return `- ${o}`;
        }
      }).join("\n");

    const genRes = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert content creator with 10+ years of experience, over Instagram, Twitter, and LinkedIn. You know exactly what to say over specific platforms to craft viral social media content." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const generated = genRes.choices[0].message.content;
    const saved = await Output.create({
      title, 
      outputs,
      result: generated,
      tokenUsage: genRes.usage,
    });
    console.log("saved", saved);

    res.json({ title, result: generated, outputs,  tokenUsage: genRes.usage, id: saved._id }); //what data is sent back
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Generation failed." });
  }
});

module.exports = router;
