import React, { useEffect, useState } from "react";
import { TextField, Box, Text, Badge, Card, Button, Heading, Separator, Flex, ScrollArea } from "@radix-ui/themes";
import { MagnifyingGlassIcon, CopyIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Checkbox, Collapsible } from "radix-ui";

export default function ViewHistory() {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openItemId, setOpenItemId] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  // const [copied, setCopied] = useState(false);

  // const handleCopy = (result) => {
  //   const formattedText = Object.entries(result)
  //   .map(([heading, content]) => `${heading}\n${content.trim()}`)
  //   .join('\n\n');
  //   const allText = JSON.stringify(formattedText, null, 2);
  //   navigator.clipboard.writeText(allText);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 4000); // Reset after 2 seconds
  // };

  const visibleHistory = searchTerm
    ? history.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : history;

    function formatResultToJSX(result) {
      if (!result) return null;
    
      const lines = result.split('\n');
    
      return lines.map((line, idx) => {
        // Match section headers like: ### Twitter Thread
        const sectionHeader = line.match(/^###\s*(.+)$/);
        if (sectionHeader) {
          return (
            <div
              key={idx}
              style={{
                color: '#2563eb',       // Tailwind's text-blue-600
                fontWeight: 600,
                marginBottom: '0.5rem',
                fontSize: '1rem'
              }}
            >
              {sectionHeader[1]}
            </div>
          );
        }
    
        return (
          <div key={idx} style={{ marginBottom: '0.4rem' }}>
            {line}
          </div>
        );
      });
    }
    
    
    
    
    
    

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/history`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("error pulling", error);
      }
    };
    fetchedData();
  }, []);

  useEffect(() => {
    console.log("history", history)
  }, [history])

  return (
    <Flex justify="center" direction={{ initial: "column", lg: "row" }} gap="6" pr="6" pl="6" pb="6">
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
        <Box>
          <Heading size="5" weight="550" mb="2">
            View History
          </Heading>
          <Text size="2" color="gray">
            Browse your previously generated outputs
          </Text>

          <TextField.Root
            mt="3"
            placeholder="Search recent results..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              minHeight: 40,
              borderRadius: '.3rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 0 1px rgba(59, 77, 219, 0.7)',
              borderColor: '#666666',
             }}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Separator size="4" color="gray" />

        <ScrollArea type="always" scrollbars="vertical" style={{ maxHeight: "70vh" }}>
          {visibleHistory.length === 0 ? (
            <Text align="center" size="2" color="gray" mt="4">
              No history yet.
            </Text>
          ) : (
            visibleHistory.map((item) => {
              const isOpen = openItemId === item._id;
            
              return (
                <Card key={item._id} style={{ marginTop: "1rem" }}>
                  <Collapsible.Root
                    open={isOpen}
                    onOpenChange={(open) => {
                      setOpenItemId(open ? item._id : null);
                    }}
                  >
                    <Collapsible.Trigger asChild>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          padding: "1rem",
                          cursor: "pointer",
                          gap: "0.5rem",
                        }}
                      >
                        {/* Title and Platform row */}
                        <Flex justify="between" align="center">
                          <Flex align="center" gap="2">
                            <Text weight="bold" style={{ marginRight: "35px" }}>
                              {item.title?.charAt(0).toUpperCase() + item.title?.slice(1) || "(No Title)"}
                            </Text>
                            <Flex gap="2" align="center">
                              {item.outputs.map((platform) => (
                                <Badge key={platform} variant="gray" radius="12px">
                                  {platform}
                                </Badge>
                              ))}
                            </Flex>
                          </Flex>
            
                          <Text size="2" color="gray">
                            {new Date(item.createdAt).toLocaleString()}
                          </Text>
                        </Flex>
            
                        {/* Conditional Preview */}
                        {!isOpen && (
                          <Text
                            size="2"
                            style={{
                              fontFamily: "inherit",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              textOverflow: "ellipsis",
                              lineHeight: "1.4",
                              backgroundColor: "#F9FAFB", // light neutral background for contrast
                              border: "1px solid #E5E7EB", // subtle border
                              borderRadius: "8px", // smooth corners
                              padding: "20px",
                              marginBottom: "20px",
                              minHeight: "40px",
                              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)", // soft lift
                            }}
                          >
                            {formatResultToJSX(item.result)}

                          </Text>
                        )}
                      </Box>
                    </Collapsible.Trigger>
            
                    {/* Expanded Content */}
                    <Collapsible.Content>
                      {/* <Box style={{ borderRadius: "8px", padding: ".5rem", backgroundColor: "#f3f4f6", position: "relative" }}> */}
                        {/* <Button
                          variant="soft"
                          size="1"
                          style={{
                            position: "absolute",
                            right: "0.5rem",
                            zIndex: 1,
                            background: "#e5e7eb",
                            borderRadius: "0.5rem",
                            padding: "0.5rem 0.8rem",
                            cursor: "pointer",
                            color: "#374151",
                            marginTop: "1.2rem",
                            marginRight: "2.5rem"
                          }}
                          // onClick={()=> handleCopy(item.result)}
                          onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))}
                          onClick=navigator.clipboard.writeText(allText)
                        >
                          
                          {/* <CopyIcon style={{ width: 14, height: 14, marginRight: "0.3rem", verticalAlign: "middle" }} />
                          Copy */}
                          {/* {copied ? (
        <>
          <CheckCircledIcon style={{ width: 14, height: 14, marginRight: "0.3rem", verticalAlign: "middle" }} />
          Copied
        </>
      ) : (
        <>
          <CopyIcon style={{ width: 14, height: 14, marginRight: "0.3rem", verticalAlign: "middle" }} />
          Copy
        </>
      )}
                        </Button> */} 
            
                        <pre
                          style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "inherit",
                            lineHeight: "1.4",
                            backgroundColor: "#F9FAFB", // light neutral background for contrast
                            border: "1px solid #E5E7EB", // subtle border
                            borderRadius: "8px", // smooth corners
                            padding: "20px",
                            margin: "17px",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)", // soft lift
                          }}
                        >
                          {formatResultToJSX(item.result)}

                        </pre>
                      {/* </Box> */}
                    </Collapsible.Content>
                  </Collapsible.Root>
                </Card>
              );
            })

          )}
        </ScrollArea>
      </Box>
    </Flex>
  );
}
