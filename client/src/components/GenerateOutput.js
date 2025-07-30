import React, { useState } from "react";
import { CheckboxGroup } from "@radix-ui/themes";
import "./styles.css";
import { Box, Progress, Flex, Separator, Text, TextArea, Button, ScrollArea } from "@radix-ui/themes";



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
      // console.log("fetch completed, data.result")
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
//     <div style={{ padding: "2rem" }}>
//       {/* Generate section */}
//       <h2 className="text-xl font-bold mb-4">Generate Output</h2>


//       {/* Title section */}
//       <TextArea
//         placeholder="Your content title, to be saved to history"
//         value={title}
//         onChange={(e) => setTitle(e.currentTarget.value)}
//         size="2"
//         variant="surface"
//         radius="medium"
//         resize="vertical"
//         style={{ width: "100%", minHeight: 150, margin: "1rem 0" }}
//       />


//       {/* Checkbox section */}
//       <CheckboxGroup.Root
//       variant="classic"
//         value={selectedOutputs}
//         onValueChange={setSelectedOutputs}
//       >
//         {outputOptions.map((opt) => (
//           <label key={opt.value} className="checkbox-item">
//             <CheckboxGroup.Item value={opt.value} className="checkbox-trigger">
//               {/* <Checkbox className="checkbox">
//                 <CheckIcon />
//               </Checkbox> */}
//               {opt.label}
//             </CheckboxGroup.Item>
//           </label>
//         ))}
//       </CheckboxGroup.Root>


//       {/* Text section */}
//       <TextArea
//         placeholder="Paste your content here..."
//         value={content}
//         onChange={(e) => setContent(e.currentTarget.value)}
//         size="2"
//         variant="surface"
//         radius="medium"
//         resize="vertical"
//         style={{ width: "100%", minHeight: 150, margin: "1rem 0" }}
//       />
//       <div style={{ textAlign: "right", marginBottom: "1rem" }}>
//         {/* {content.length} / 5000 */}
//         Word count: {content.length} 
//       </div>

//       {/* Button */}
//       <button
//         onClick={handleGenerate}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Generate
//       </button>

//       {/* progress bar */}
//       {isGenerating && (
//   <Box maxWidth="300px" style={{ marginTop: "1rem" }}>
//     <Progress value={progress} />
//   </Box>
// )}


//       {/* Result section */}
//       {Object.keys(result).length > 0 && (
//   <div className="mt-6 p-4 bg-white rounded shadow space-y-4">
//     <h3 className="font-semibold text-lg">Generated Outputs:</h3>
//     {Object.entries(result).map(([platform, text]) => (
//       <div key={platform}>
//         <h4 className="font-bold text-blue-700 mb-1">{platform}</h4>
//         <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded text-sm">{text}</pre>
//       </div>
//     ))}
//   </div>
// )}

//     </div>
<Flex direction={{ initial: "column", lg: "row" }} gap="6" p="6">
  {/* Left side – Form */}
  <Box
    width={{ lg: "50%" }}
    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
  >
    {/* Generate section */}
    <Box
      p="4"
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}
    >
      <Text size="5" weight="bold">
        Generate Output
      </Text>
    </Box>

    {/* Title section */}
    <Box
      p="4"
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}
    >
      <TextArea
        placeholder="Your content title, to be saved to history"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        size="1"
        variant="surface"
        radius="medium"
        resize="none"
        style={{ minHeight: 40 }}
      />
    </Box>

    {/* Content section */}
    <Box
      p="4"
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}
    >
      <TextArea
        placeholder="Paste your content here..."
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        size="2"
        variant="surface"
        radius="medium"
        resize="vertical"
        style={{ minHeight: 150 }}
      />
      <Text size="1" align="right" color="gray" mt="2">
        Word count: {content.length}
      </Text>
    </Box>

    {/* Checkbox section */}
    <Box
      p="4"
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}
    >
      <CheckboxGroup.Root value={selectedOutputs} onValueChange={setSelectedOutputs}>
        {outputOptions.map((opt) => (
          <label key={opt.value} style={{ display: "block", marginBottom: "0.5rem" }}>
            <CheckboxGroup.Item value={opt.value}>{opt.label}</CheckboxGroup.Item>
          </label>
        ))}
      </CheckboxGroup.Root>
    </Box>

    {/* Button + Progress */}
    <Box
      p="4"
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, background: "white" }}
    >
      <Button
        size="3"
        color="blue"
        disabled={isGenerating}
        onClick={handleGenerate}
        highContrast
        style={{ width: "100%" }}
      >
        {isGenerating ? (
          <Flex align="center" gap="2">
            <svg
              className="animate-spin"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Generating...
          </Flex>
        ) : (
          "Generate"
        )}
      </Button>

      {isGenerating && (
  <Box mt="4">
    <Progress value={progress} />
  </Box>
)}

    </Box>
  </Box>

  {/* Right side – Result */}
  {Object.keys(result).length > 0 && (
    <Box
      width={{ lg: "50%" }}
      p="4"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        background: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <Text size="4" weight="bold" mb="4">
        Generated Outputs:
      </Text>
      <Box display="flex" flexDirection="column" gap="4">
        {Object.entries(result).map(([platform, text]) => (
          <Box key={platform}>
            <Text weight="bold" color="blue">
              {platform}
            </Text>
            <Box
              mt="1"
              p="3"
              style={{
                background: "#f3f4f6",
                borderRadius: 6,
                fontSize: "0.875rem",
                whiteSpace: "pre-wrap",
                overflowX: "auto",
              }}
            >
              {text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )}
</Flex>

  );
}
