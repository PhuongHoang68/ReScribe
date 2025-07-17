import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="App">
      <div className="Content">
        {/* header */}
      <header style=
      {{
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    maxWidth: '100%',
    height: "2rem",
    // padding: "0px 35px 0px 35px"
    padding: '0.5rem 1rem 0 1rem',
    // marginBottom: '2rem',
  }}>
        {/* <div style= {{paddingRight: "8rem"}}>Rescribe</div>
        <div >
          <button></button>
          <button></button>
        </div>
      </header>  */}
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Rescribe</div>

<div style={{ display: 'flex', gap: '1rem' }}>
<Link to="/login" style={{ textDecoration: 'none' }}>
  <button
    style={{
      background: 'none',
      border: 'none',
      color: '#000',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    Log In
  </button>
  </Link>
  <Link to="/signup" style={{ textDecoration: 'none' }} >
  <button
    style={{
      backgroundColor: '#ccc',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      cursor: 'pointer',
      color: '#000',
    }}
  >
    Sign Up
  </button>
  </Link>
</div>
</header>


      {/* Section 1 */}
      {/* <div style={{height:"14rem", display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    padding: "0px 35px 0px 35px"}} className="section1">
      </div> */}
      {/* Section 1 - Hero */}
<div
  className="section1"
  style={{
    height: '12rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    gap: '1rem',
  }}
>
  <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
    ReScribe: Do More with Less
  </div>
  <div style={{ fontSize: '1.1rem', maxWidth: '50ch', color: '#333' }}>
    AI Content Repurposer - Turn your long-form content into short, platform-ready posts in seconds.
  </div>
  <button
    style={{
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    Get Started
  </button>
</div>



      {/* Section 2 */}
      {/* <div style={{height:"14rem"}}>
        a
        </div> */}
        {/* Section 2 - How it works */}
<div
  className="section2"
  style={{
    height: '13rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    gap: '1.5rem',
  }}
>
  {/* Top Row */}
  <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000' }}>
    How it works:
  </div>

  {/* Bottom Row - 3 Steps */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '6rem',
      flexWrap: 'wrap',
    }}
  >
    {/* Step 1 */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        width: '9rem',
        textAlign: 'left',
      }}
    >
      <div style={{ fontSize: '2rem' }}>📋</div>
      <div style={{ fontSize: '1rem', color: '#333' }}>
        Paste or Upload Your Content
      </div>
    </div>

    {/* Step 2 */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        width: '9rem',
        textAlign: 'left',
      }}
    >
      <div style={{ fontSize: '2rem' }}>✅</div>
      <div style={{ fontSize: '1rem', color: '#333' }}>
        Choose Output Formats
      </div>
    </div>

    {/* Step 3 */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        width: '9rem',
        textAlign: 'left',
      }}
    >
      <div style={{ fontSize: '2rem' }}>➡️</div>
      <div style={{ fontSize: '1rem', color: '#333' }}>
        Get copy/paste-ready posts
      </div>
    </div>
  </div>
</div>


      {/* Section 3 */}
      {/* <div style={{height:"14rem"}}>
        d
        </div> */}

{/* <div
  className="section3"
  style={{
    height: '16rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    gap: '1.25rem',
  }}

  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
    <span style={{ fontSize: '1.5rem' }}>📝</span>
    <span style={{ color: '#000' }}>Supported Inputs</span>
  </div>


  <div style={{ fontSize: '1rem', color: '#333', maxWidth: '60ch' }}>
    Blog posts, Podcast transcripts, YouTube scripts, Email newsletters, Case studies, and more.
  </div>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '4rem',
      flexWrap: 'wrap',
    }}
  >

    <div
      style={{
        width: '9rem',
        height: '6rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        textAlign: 'center',
      }}
    >

      <span>Column 1</span>
    </div>


    <div
      style={{
        width: '9rem',
        height: '6rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        textAlign: 'center',
      }}
    >

      <span>Column 2</span>
    </div>


    <div
      style={{
        width: '9rem',
        height: '6rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        textAlign: 'center',
      }}
    >

      <span>Column 3</span>
    </div>
  </div>
</div> */}
{/* Section 3 - Supported Inputs + Output Preview */}
<div
  className="section3"
  style={{
    height: '16rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    gap: '1.25rem',
  }}
>
  {/* Row 1 - Title */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
    <span style={{ fontSize: '1.5rem' }}>📝</span>
    <span style={{ color: '#000' }}>Supported Inputs</span>
  </div>

  {/* Row 2 - Subtitle */}
  <div style={{ fontSize: '1rem', color: '#333', maxWidth: '60ch' }}>
    Blog posts, Podcast transcripts, YouTube scripts, Email newsletters, Case studies, and more.
  </div>

  {/* Row 3 - Output Previews */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    }}
  >
    {/* Twitter Box */}
    <div
      style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0.75rem',
        boxSizing: 'border-box',
        textAlign: 'left',
      }}
    >
      <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>🐦 Tweet</div>
      <div style={{ fontSize: '0.9rem', color: '#333' }}>
        AI is like coffee. It helps me power through content creation!
      </div>
      <button
        style={{
          alignSelf: 'flex-end',
          backgroundColor: '#eee',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.4rem 0.8rem',
          fontSize: '0.85rem',
          cursor: 'pointer',
        }}
      >
        Copy
      </button>
    </div>

    {/* LinkedIn Box */}
    <div
      style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0.75rem',
        boxSizing: 'border-box',
        textAlign: 'left',
      }}
    >
      <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>💼 LinkedIn Post</div>
      <div style={{ fontSize: '0.9rem', color: '#333' }}>
        I recently shared the benefits of AI in content repurposing ...
      </div>
      <button
        style={{
          alignSelf: 'flex-end',
          backgroundColor: '#eee',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.4rem 0.8rem',
          fontSize: '0.85rem',
          cursor: 'pointer',
        }}
      >
        Copy
      </button>
    </div>

    {/* Instagram Box */}
    <div
      style={{
        width: '10rem',
        height: '10rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0.75rem',
        boxSizing: 'border-box',
        textAlign: 'left',
      }}
    >
      <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>📸 Instagram:</div>
      <div style={{ fontSize: '0.9rem', color: '#333' }}>
        Repurposing content just got easier! Top 3 tips to maximize reach...
      </div>
      <button
        style={{
          alignSelf: 'flex-end',
          backgroundColor: '#eee',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.4rem 0.8rem',
          fontSize: '0.85rem',
          cursor: 'pointer',
        }}
      >
        Copy
      </button>
    </div>
  </div>
</div>

        

      {/* footer */}
      {/* <footer style={{height: "3rem"}}>
        q
        </footer> */}
        {/* Footer */}
<div
  className="footer"
  style={{
    textAlign: 'center',
    padding: '1rem 0 0.5rem 0',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#000',
  }}
>
  Built with React, Firebase, OpenAI API, MongoDB, Vercel
</div>



      </div>
      </div>

    )
}