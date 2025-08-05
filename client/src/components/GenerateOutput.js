import React, { useEffect, useState } from "react";
import { CheckboxGroup } from "@radix-ui/themes";
import "./styles.css";
import { Box, Progress, Heading, Flex, Separator, Text, TextArea, Button, ScrollArea } from "@radix-ui/themes";



const outputOptions = [
  { label: "Twitter Thread", value: "twitter" },
  { label: "Instagram Caption", value: "instagram" },
  { label: "LinkedIn Post", value: "linkedin" },
  // { label: "TikTok Script", value: "tiktok" },
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
    console.log("handle function hit")
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

  useEffect(() => {
    console.log("content", content);
    console.log("title", title)
  }, [content, title])

  return (
<Flex justify="center" direction={{ initial: "column", lg: "row",  }} gap="6" pr="6" pl="6" pb="6" >
<Box
  width={{ lg: "95%" }}
  p="4"
  style={{
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "3rem 1rem",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#d0e5ff55"
  }}
>
 {/* Title Input */}
  <Box>
  <Heading size="5" weight="550" mb="2">
      Title
    </Heading>
    <Text size="2" color="gray">
      Input Your Content Title
    </Text>
    <TextArea
    mt="2"
      placeholder="What is your content called?"
      // value={title}
      onChange={(e) => setTitle(e.currentTarget.value)}
      size="1"
      variant="surface"
      radius="medium"
      resize="none"
      style={{ 
        minHeight: 40,
        borderRadius: '.3rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 0 1px rgba(59, 77, 219, 0.7)',
        borderColor: '#666666',
       }}
    />
  </Box>

  <Separator size="4" color="gray" />

  {/* Content Input */}
  <Box>
  <Heading size="5" weight="550" mb="2">
      Long-form content
    </Heading>
    <Text size="2" color="gray">
      Paste your long-form content
    </Text>

    <TextArea mt="2"
      placeholder="Paste your content here..."
      // value={content}
      onChange={(e) => setContent(e.currentTarget.value)}
      size="2"
      variant="surface"
      radius="medium"
      resize="vertical"
      style={{ 
        minHeight: 400,
          borderRadius: '.3rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 0 1px rgba(59, 77, 219, 0.7)',
          borderColor: '#666666',
       }}
    />
    <Text size="1" align="right" color="gray" mt="2">
      Word count: {content.length}
    </Text>
  </Box>

  <Separator size="4" color="gray" />

  {/* Checkbox Group */}
  <Box>
  <Heading size="5" weight="550" mb="2">
      Short-form content type
    </Heading>
    <Text size="2" color="gray">
      Select your output type
    </Text>
    <CheckboxGroup.Root mt="2" value={selectedOutputs} onValueChange={setSelectedOutputs}>
      {outputOptions.map((opt) => (
        <label key={opt.value} style={{ display: "block", marginBottom: "0.5rem" }}>
          <CheckboxGroup.Item value={opt.value}>{opt.label}</CheckboxGroup.Item>
        </label>
      ))}
    </CheckboxGroup.Root>
  </Box>

  <Separator size="4" color="gray" />

  {/* Button + Progress */}
  <Box>
    <Button
      size="3"
      color="blue"
      disabled={isGenerating}
      onClick={handleGenerate}
      highContrast
      style={{ width: "100%", borderRadius: '12px', boxShadow: '0 8px 22px rgba(59, 77, 219, 0.25)' }}
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
      <Text size="4" weight="bold" mb="4" color="blue">
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
