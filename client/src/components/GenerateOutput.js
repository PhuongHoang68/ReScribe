import React, { useState } from "react";
import { CheckboxGroup } from "@radix-ui/themes";
import { Checkbox } from "@radix-ui/react-checkbox";          // or from another package if you're using a custom UI
import { CheckIcon } from "@radix-ui/react-icons";
import { TextArea } from "@radix-ui/themes";
import "./styles.css";

const outputOptions = [
  { label: "Twitter Thread", value: "twitter" },
  { label: "Instagram Caption", value: "instagram" },
  { label: "LinkedIn Post", value: "linkedin" },
  { label: "TikTok Script", value: "tiktok" },
];

export default function GenerateOutput() {
  const [content, setContent] = useState("");
  const [selectedOutputs, setSelectedOutputs] = useState([]);
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    if (selectedOutputs.length === 0 || content.trim() === "") return;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, outputTypes: selectedOutputs }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="text-xl font-bold mb-4">Generate Output</h2>

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

      {/* Result */}
      {result && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Generated Output:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
