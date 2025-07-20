import React, { useState } from "react";
import { CheckboxGroup } from "@radix-ui/themes";
import { TextArea } from "@radix-ui/themes";
import "./styles.css";
import { Box, Progress } from "@radix-ui/themes";


const outputOptions = [
  { label: "Twitter Thread", value: "twitter" },
  { label: "Instagram Caption", value: "instagram" },
  { label: "LinkedIn Post", value: "linkedin" },
  { label: "TikTok Script", value: "tiktok" },
];

export default function GenerateOutput() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [selectedOutputs, setSelectedOutputs] = useState([]);
  const [result, setResult] = useState({});
  //progress bar raidx
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  //



  const handleGenerate = async () => {
    //trim title necessary?
    if (selectedOutputs.length === 0 || content.trim() === "" || title.length === 0) return;
    console.log("CONTENT", content);
    console.log("SELECTEDOUTPUTS", selectedOutputs);
    console.log("title", title)

    //progress bar
    setIsGenerating(true);
    setProgress(25);

    const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 1.5;
          return prev;
        });
      }, 500);
      //

    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, outputs: selectedOutputs, title }), // now an array
      });
      const data = await response.json();
      console.log("fetch completed, data.result")
      const sections = data.result.split("### ");
const formatted = sections.reduce((acc, section) => {
  const [title, ...body] = section.split("\n");
  if (title && body.length) {
    acc[title.trim()] = body.join("\n").trim();
  }
  return acc;
}, {});
setResult(formatted);

    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
        //progress bar
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsGenerating(false);
          setProgress(0); // reset for next use
        }, 1050); // hold at 100% briefly before reset
        //
      }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="text-xl font-bold mb-4">Generate Output</h2>
      <TextArea
        placeholder="Your content title, to be saved to history"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        size="2"
        variant="surface"
        radius="medium"
        resize="vertical"
        style={{ width: "100%", minHeight: 150, margin: "1rem 0" }}
      />
      {/* Checkbox Group for selecting output types */}
      <CheckboxGroup.Root
      variant="classic"
        value={selectedOutputs}
        onValueChange={setSelectedOutputs}
      >
        {outputOptions.map((opt) => (
          <label key={opt.value} className="checkbox-item">
            <CheckboxGroup.Item value={opt.value} className="checkbox-trigger">
              {/* <Checkbox className="checkbox">
                <CheckIcon />
              </Checkbox> */}
              {opt.label}
            </CheckboxGroup.Item>
          </label>
        ))}
      </CheckboxGroup.Root>

      {/* Textarea */}
      <TextArea
        placeholder="Paste your content here..."
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        size="2"
        variant="surface"
        radius="medium"
        resize="vertical"
        style={{ width: "100%", minHeight: 150, margin: "1rem 0" }}
      />
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        {content.length} / 5000
      </div>

      {/* Button */}
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate
      </button>

      {/* progress bar */}
      {isGenerating && (
  <Box maxWidth="300px" style={{ marginTop: "1rem" }}>
    <Progress value={progress} />
  </Box>
)}


      {/* Result */}
      {Object.keys(result).length > 0 && (
  <div className="mt-6 p-4 bg-white rounded shadow space-y-4">
    <h3 className="font-semibold text-lg">Generated Outputs:</h3>
    {Object.entries(result).map(([platform, text]) => (
      <div key={platform}>
        <h4 className="font-bold text-blue-700 mb-1">{platform}</h4>
        <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded text-sm">{text}</pre>
      </div>
    ))}
  </div>
)}

    </div>
  );
}
