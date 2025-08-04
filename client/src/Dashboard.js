import React, { useState } from "react";
import { logout } from "./firebase";
import GenerateOutput from "./components/GenerateOutput";
import ViewHistory from "./components/ViewHistory";

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        minHeight: "100vh",
 // Light blue background
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem",
		  maxHeight: "2.5rem",
          backgroundColor: "#fff",
        //   borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
			<div style={{ fontSize: "1.55rem", fontWeight: "bold" }}>Rescribe</div>
			{[
            { label: "Generate Output", value: "generate" },
            { label: "View History", value: "history" },
          ].map(({ label, value }) => (
            <div
              key={value}
              onClick={() => setActiveTab(value)}
              style={{
                cursor: "pointer",
                padding: "0.5rem 1rem",
				// borderBottom: activeTab === value ? "2px solid #3B82F6" : "2px solid transparent",
                color: activeTab === value ? "#3B82F6" : "#111827",
				fontWeight: "bolder",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </div>
          ))}
		</div>

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
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "2rem 0rem 0 0rem ",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            // maxWidth: "1200px",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            // padding: "0 2rem 0 2rem",
          }}
        >
          {activeTab === "generate" ? <GenerateOutput /> : <ViewHistory />}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem 0",
          fontSize: "0.875rem",
        //   color: "#6b7280",
        }}
      >
        Built with React, Firebase, OpenAI API, MongoDB, Vercel
      </footer>
    </div>
  );
}
