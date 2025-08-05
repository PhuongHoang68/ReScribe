// import { TextField } from "@radix-ui/themes";
// import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
// import React, {useEffect, useState} from "react";
// import { Box, Text, Badge, Card, Button } from "@radix-ui/themes";
// import { Collapsible } from "radix-ui";

// export default function ViewHistory() {
//     const [history, setHistory] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const visibleHistory = searchTerm ? history.filter((item) =>
//       item.title?.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   : history;

//     console.log("view history")
//     useEffect(() => {
//         const fetchedData = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/history", {
//                     method: "GET",
//                     headers: {"Content-Type": "application/json"}
//                 })
//                 const data = await response.json()
//                 setHistory(data)
                
//             } catch (error) {
//                 console.error("error pulling", error);
//             }
//         }
//         fetchedData();
//     }, [])

//     useEffect(() => {
//         console.log("history pulled", history);
//     }, [history])
//     return (
//         <div className= "App">
//             <div className= "History">
//             <TextField.Root 
//             placeholder="Search recent results..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             >
// 	<TextField.Slot>
// 		<MagnifyingGlassIcon height="16" width="16" />
// 	</TextField.Slot>
// </TextField.Root>
// <Box style={{ padding: '2rem' }}>
//       <Text size="4" weight="bold" as="h2">View History</Text>

//       {visibleHistory.length === 0 ? (
//           <div className="text-sm text-muted-foreground text-center mt-4">
//           No history yet
//         </div>
      
//       ) : (
//         visibleHistory.map(item => (
//           <Card key={item._id} style={{ marginTop: '1rem' }}>
//             {/* <Collapsible.Root>
//               <Collapsible.Trigger asChild>
//                 <Box
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     padding: '1rem',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <Text weight="bold">{item.title || "(no title)"}</Text>
//                   <Box style={{ display: 'flex', gap: '0.5rem' }}>
//                     {item.outputs.map(platform => (
//                       <Badge key={platform} variant="gray">
//                         {platform}
//                       </Badge>
//                     ))}
//                     <Text size="2">
//                       {new Date(item.createdAt).toLocaleString()}
//                     </Text>
//                   </Box>
//                 </Box>
//               </Collapsible.Trigger>

//               <Collapsible.Content>
//                 <Box style={{ padding: '1rem', backgroundColor: '#f7f7f7' }}>
//                   <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
//                     {item.result}
//                   </pre>
//                 </Box>
//               </Collapsible.Content>
//             </Collapsible.Root> */}
//             <Collapsible.Root>
//   <Collapsible.Trigger asChild>
//     <Box
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         padding: '1rem',
//         cursor: 'pointer',
//         gap: '0.5rem',
//       }}
//     >
//       <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text weight="bold">{item.title?.charAt(0).toUpperCase() + item.title?.slice(1) || "(no title)"}</Text>
//         <Box style={{ display: 'flex', gap: '0.5rem' }}>
//           {item.outputs.map(platform => (
//             <Badge key={platform} variant="gray">{platform}</Badge>
//           ))}
//           <Text size="2">
//             {new Date(item.createdAt).toLocaleString()}
//           </Text>
//         </Box>
//       </Box>

//       {/* First 2 lines of result (preview) */}
//       <Text
//         size="2"
//         style={{
//           fontFamily: 'inherit',
//           overflow: 'hidden',
//           display: '-webkit-box',
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical',
//           textOverflow: 'ellipsis',
//           lineHeight: '1.4',
//           color: '#666',
//         }}
//       >
//         {item.result}
//       </Text>
//     </Box>
//   </Collapsible.Trigger>

//   {/* Full result */}
//   <Collapsible.Content>
//     <Box style={{ padding: '1rem', backgroundColor: '#f7f7f7' }}>
//     <Button
//       variant="soft"
//       size="1"
//       style={{
//         position: 'absolute',
//         top: '0.5rem',
//         right: '0.5rem',
//         zIndex: 1,
//       }}
//       onClick={() => navigator.clipboard.writeText(item.result)}
//     >
//       Copy
//     </Button>

//       <pre
//         style={{
//           whiteSpace: 'pre-wrap',
//           margin: 0,
//           fontSize: '0.875rem', // match Text size 2
//           lineHeight: '1.4',
//           color: '#666',
//         }}
//       >
//         {item.result}
//       </pre>
//     </Box>
//   </Collapsible.Content>
// </Collapsible.Root>

//           </Card>
//         ))
//       )}
//     </Box>
//             </div>
//         </div>
//     )
// }
import React, { useEffect, useState } from "react";
import { TextField, Box, Text, Badge, Card, Button, Heading, Separator, Flex, ScrollArea } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
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
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "3rem 1rem",
        }}
      >
        <Box>
          <Heading size="4" weight="550" mb="2">
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
                      <Flex justify="space-between" align="center">
                        <Text weight="bold">
                          {item.title?.charAt(0).toUpperCase() + item.title?.slice(1) || "(No Title)"}
                        </Text>
                        <Flex gap="2" align="center" wrap="wrap">
                          {item.outputs.map((platform) => (
                            <Badge key={platform} variant="gray">
                              {platform}
                            </Badge>
                          ))}
                          <Text size="2" color="gray">
                            {new Date(item.createdAt).toLocaleString()}
                          </Text>
                        </Flex>
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
                        }}
                        onClick={() => navigator.clipboard.writeText(item.result)}
                      >
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
