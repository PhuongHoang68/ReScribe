import React from "react";
import { Link } from "react-router-dom";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, CopyIcon, CheckCircledIcon, ArrowRightIcon } from '@radix-ui/react-icons';



export default function LandingPage() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', backgroundColor: '#f9fafb' }}>
      <div className="Content" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Rescribe</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'none', border: 'none', fontSize: '1rem', cursor: 'pointer', color: '#374151' }}>Log In</button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: '#2563eb', border: 'none', borderRadius: '0.5rem', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', color: '#fff' }}>Sign Up</button>
            </Link>
          </div>
        </header>

        <main style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', padding: '3rem 2rem' }}>
          {/* Left Side */}
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>ReScribe: Do More with Less</h1>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '40ch' }}>
              AI Content Repurposer - Turn your long-form content into short, platform-ready posts in seconds.
            </p>
            <button style={{ backgroundColor: '#10b981', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Get Started</button>
          </div>

          {/* Right Side */}
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: "center" }}>
            {/* How It Works */}
            <div
  style={{
    padding: '1.5rem 1.5rem 2.2rem 1.5rem',
    borderRadius: '1rem',
    border: '1px solid #e5e7eb',
    background: '#fff'
  }}
>
  <h2
    style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#111827',
    }}
  >
    How it works:
  </h2>
  <div
    style={{
      justifyContent: 'center',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    }}
  >
    {[
      [<CopyIcon key="icon1" style={{ width: 24, height: 24, color: '#4B5563' }} />, 'Paste or Upload Your Content'],
      [<CheckCircledIcon key="icon2" style={{ width: 24, height: 24, color: '#4B5563' }} />, 'Choose Output Formats'],
      [<ArrowRightIcon key="icon3" style={{ width: 24, height: 24, color: '#4B5563' }} />, 'Get copy/paste-ready posts'],

    ].map(([icon, text], i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          gap: '0.5rem',
          width: '8rem',
          alignItems: 'center',
          textAlign: 'left',
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{icon}</span>
        <span
          style={{
            fontSize: '0.875rem',
            color: '#4b5563',
            lineHeight: 1.2,
            fontWeight: 500,
          }}
        >
          {text}
        </span>
      </div>
    ))}
  </div>
</div>


            {/* Supported Inputs */}

<div
  style={{
    padding: '1.5rem 1.5rem 3rem 1.5rem',
    borderRadius: '1rem',
    border: '1px solid #e5e7eb',
    background: '#fff',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      fontSize: '1.125rem',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'center',
      color: '#111827',
      marginBottom: '1rem',
    }}
  >
    <CopyIcon style={{ width: 20, height: 20, color: '#4B5563' }} />
    Supported Inputs
  </h2>

  <p
    style={{
      fontSize: '1rem',
      color: '#4b5563',
      marginBottom: '1.5rem',
      lineHeight: 1.4,
    }}
  >
    Blog posts, Podcast transcripts, YouTube scripts, Email newsletters, Case studies, and more.
  </p>

  <div
    style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'nowrap',
    }}
  >
    {[
      [
        <TwitterLogoIcon
          key="icon-twitter"
          style={{ width: 24, height: 24, color: '#4B5563', flexShrink: 0 }}
        />,
        'Tweet',
        'AI is like coffee. It helps me power through content creation!',
      ],
      [
        <LinkedInLogoIcon
          key="icon-linkedin"
          style={{ width: 24, height: 24, color: '#4B5563', flexShrink: 0 }}
        />,
        'LinkedIn Post',
        'I recently shared the benefits of AI in content repurposing ...',
      ],
      [
        <InstagramLogoIcon
          key="icon-instagram"
          style={{ width: 24, height: 24, color: '#4B5563', flexShrink: 0 }}
        />,
        'Instagram',
        'Repurposing content just got easier! Top 3 tips to maximize reach...',
      ],
    ].map(([icon, title, text], i) => (
      <div
        key={i}
        style={{
          width: '9rem',
          minHeight: '9rem',
          padding: '0.75rem',
          background: '#f9fafb',
          border: '1px solid #ddd',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'left',
          cursor: 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: '#374151' }}>
          {icon}
          <span style={{ fontSize: '0.95rem' }}>{title}</span>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.4rem', flexGrow: 1 }}>
          {text}
        </div>
        <button
          style={{
            alignSelf: 'flex-end',
            background: '#e5e7eb',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.3rem 0.6rem',
            cursor: 'pointer',
            fontSize: '0.8rem',
            marginTop: '0.6rem',
            color: '#374151',
          }}
          aria-label={`Copy ${title} text`}
        >
          <CopyIcon style={{ width: 14, height: 14, marginRight: '0.3rem', verticalAlign: 'middle' }} />
          Copy
        </button>
      </div>
    ))}
  </div>
</div>

          </div>
        </main>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '1rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
          Built with React, Firebase, OpenAI API, MongoDB, Vercel
        </footer>
      </div>
    </div>
  );
}