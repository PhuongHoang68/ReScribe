const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
const Output = require("../models/Output");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  const { content, outputs } = req.body;
  console.log("Route file hit, here's content and outputs:", content, outputs);

  if (!content || !outputs?.length) {
    return res.status(400).json({ error: "Content and outputs are required." });
  }

  try {
    const prompt = `Take the following content and generate the following formats: ${outputs.join(
      ", "
    )}. Content:\n${content}`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
    });

    
    const result = completion.choices[0]?.message?.content;
    console.log("call completed", result)
    const tokenUsage = completion.usage;

    const saved = await Output.create({
      content,
      outputs,
      result,
      tokenUsage,
    });

    res.json({ result, tokenUsage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

module.exports = router;
