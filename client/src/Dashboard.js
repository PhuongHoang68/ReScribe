import React, { useState } from "react";
import { logout } from "./firebase";
import { Link } from "react-router-dom";
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
        <Link to="/" style={{ textDecoration: 'none' }}>
			<div style={{ fontSize: "1.75rem",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  color: "#0F172A",         // Dark navy (feels strong & forward)
  textTransform: "uppercase",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.08)" }}>Rescribe</div>
  </Link>
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
                borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
				// borderBottom: activeTab === value ? "2px solid #3B82F6" : "2px solid transparent",
                color: activeTab === value ? "#2F52AC" : "#111827",
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
              backgroundColor: "#283E92",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "11px 18px",
              boxShadow: '0 8px 22px rgba(59, 77, 219, 0.25)',
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
            // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
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
          color: '#6b7280'
        }}
      >
        Built with React, Firebase, OpenAI API, MongoDB, Vercel
      </footer>
    </div>
  );
}
