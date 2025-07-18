import "@radix-ui/themes/styles.css";
import './App.css';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from "./firebase";
import LandingPage from './LandingPage';
import LoginPage from "./LoginPage";
import SignupPage from "./SignUpPage";
import Dashboard from "./Dashboard";
// import GenerateOutput from "./components/GenerateOutput";
// import UserSettings from "./components/UserSettings";
// import ViewHistory from "./components/ViewHistory";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <SignupPage />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
          {/* <Route path="generate" element={<GenerateOutput />} />
          <Route path="history"  element={<ViewHistory />} />
          <Route path="settings" element={<UserSettings />} /> */}
        {/* Optionally add a catch-all: */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>









      
  );
}

export default App;
