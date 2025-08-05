import React, { useEffect, useState } from "react";
import { TextField, Box, Text, Badge, Card, Button, Heading, Separator, Flex, ScrollArea } from "@radix-ui/themes";
import { MagnifyingGlassIcon, CopyIcon } from "@radix-ui/react-icons";
import { Collapsible } from "radix-ui";

export default function ViewHistory() {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleHistory = searchTerm
    ? history.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : history;

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/history", {
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
            visibleHistory.map((item) => (
              <Card key={item._id} style={{ marginTop: "1rem" }}>
                <Collapsible.Root>
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
                      <Flex justify="between" align="center">
  {/* Left group: Title + Badge */}
  <Flex align="center" gap="2">
    <Text weight="bold" style={{marginRight: "35px"}}>
      {item.title?.charAt(0).toUpperCase() + item.title?.slice(1) || "(No Title)"}
    </Text>
    <Flex gap="2" align="center">
      {item.outputs.map(platform => (
        <Badge key={platform} variant="gray" radius="12px">
          {platform}
        </Badge>
      ))}
    </Flex>
  </Flex>

  {/* Date aligned to the right */}
  <Text size="2" color="gray">
    {new Date(item.createdAt).toLocaleString()}
  </Text>
</Flex>


                      <Text
                        size="2"
                        style={{
                          fontFamily: "inherit",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                          lineHeight: "1.4",
                          color: "#666",
                        }}
                      >
                        {item.result}
                      </Text>
                    </Box>
                  </Collapsible.Trigger>

                  <Collapsible.Content>
                    <Box style={{ padding: "1rem", backgroundColor: "#f3f4f6", position: "relative" }}>
                      <Button
                        variant="soft"
                        size="1"
                        style={{
                          position: "absolute",
                          top: "0.5rem",
                          right: "0.5rem",
                          zIndex: 1,
                          background: '#e5e7eb',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.3rem 0.6rem',
            cursor: 'pointer',
            color: '#374151',
            marginTop: '0.6rem'
                        }}
                        onClick={() => navigator.clipboard.writeText(item.result)}
                      >
                        <CopyIcon style={{ width: 14, height: 14, marginRight: '0.3rem', verticalAlign: 'middle' }} />
                        Copy
                      </Button>

                      <pre
                        style={{
                          whiteSpace: "pre-wrap",
                          margin: 0,
                          fontSize: "0.875rem",
                          lineHeight: "1.4",
                          color: "#666",
                        }}
                      >
                        {item.result}
                      </pre>
                    </Box>
                  </Collapsible.Content>
                </Collapsible.Root>
              </Card>
            ))
          )}
        </ScrollArea>
      </Box>
    </Flex>
  );
}
