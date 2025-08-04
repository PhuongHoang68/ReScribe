import React from "react";
import { logout } from "./firebase";
import * as Tabs from "@radix-ui/react-tabs";
import GenerateOutput from "./components/GenerateOutput";
import ViewHistory from "./components/ViewHistory";
import { useState } from "react";


export default function Dashboard({ user }) {
	const [activeTab, setActiveTab] = useState("generate");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        overflowX: "hidden" // avoid accidental horizontal scrollbars
      }}
    >
      {/* Header */}
      <header
      style={{
        display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1rem 2rem",
      }}
    >
        <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>Rescribe</div>
		<div style={{display: "flex", alignItems: "center", gap: "4rem"}}>
	  <div>Generate Output</div>
	  <div>View History</div>
        <button
          onClick={logout}
          style={{
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Log Out
        </button>
		</div>

    
    </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "3rem 1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs.Root
          defaultValue="generate"
          style={{
            width: "100%",
            maxWidth: "1200px", // safe readable width
            backgroundColor: "#fff",
            // borderRadius: "1rem",
            // border: "1px solid #e5e7eb",
            // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            overflow: "hidden"
          }}
        >
          {/* Tabs List */}
          {/* <Tabs.List
            style={{
              display: "flex",
			  backgroundColor: "#EDF2FE",
              borderBottom: "1px solid #e5e7eb"
            }}
          >
            {[
              { label: "Generate Output", value: "generate" },
              { label: "View History", value: "history" }
            ].map(({ label, value }) => (
              <Tabs.Trigger
                key={value}
                value={value}
                style={{
                  flex: 1,
                  padding: "1rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#374151",
                  textAlign: "center",
                  borderBottom: "3px solid transparent",
                  transition: "all 0.2s ease"
                }}
                onFocus={(e) => (e.target.style.outline = "none")}
              >
                {label}
              </Tabs.Trigger>
            ))}
          </Tabs.List> */}

          {/* Tab Content */}
          <div style={{ padding: "2rem" }}>
            <Tabs.Content value="generate">
              <GenerateOutput />
            </Tabs.Content>
            <Tabs.Content value="history">
              <ViewHistory />
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem 0",
          fontSize: "0.875rem",
          color: "#6b7280",
        }}
      >
        Built with React, Firebase, OpenAI API, MongoDB, Vercel
      </footer>
    </div>
  );
}
