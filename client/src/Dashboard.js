import React from "react";
import { logout } from "./firebase";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  CopyIcon,
  CheckCircledIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import { Box } from "@radix-ui/themes";
import GenerateOutput from "./components/GenerateOutput";
import ViewHistory from "./components/ViewHistory";

export default function Dashboard({ user }) {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        backgroundColor: "#f9fafb",
        minHeight: "100vh"
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>Rescribe</div>
        <button
          onClick={logout}
          style={{
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Log Out
        </button>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "2rem 2rem 3rem",
          maxWidth: "1600px",
          margin: "0 auto",
          width: "100%"
        }}
      >
        <Tabs.Root defaultValue="generate" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Tabs List */}
          <Tabs.List style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Tabs.Trigger
              value="generate"
              style={{
                padding: "0.6rem 1.4rem",
                backgroundColor: "#10b981",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              Generate Output
            </Tabs.Trigger>
            <Tabs.Trigger
              value="history"
              style={{
                padding: "0.6rem 1.4rem",
                backgroundColor: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              View History
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab Content — Full Width */}
          <Box pt="2" style={{ width: "100%" }}>
            <Tabs.Content value="generate" style={{ width: "100%" }}>
              <GenerateOutput />
            </Tabs.Content>
            <Tabs.Content value="history" style={{ width: "100%" }}>
              <ViewHistory />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem 0",
          fontSize: "0.875rem",
          color: "#6b7280"
        }}
      >
        Built with React, Firebase, OpenAI API, MongoDB, Vercel
      </footer>
    </div>
  );
}
