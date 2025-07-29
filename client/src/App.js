import "@radix-ui/themes/styles.css";
import './App.css';
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "./firebase";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
    console.log("Current Firebase user:", auth.currentUser);
  }, []);

  //auto logout and redirect to login
  useEffect(() => {
    let logoutTimer;
    if (user) {
      logoutTimer = setTimeout(async() => {
        await logout();
        console.log("Signed out after 6 hours");
        navigate("/login")
      }, 6 * 60 * 60 * 1000)
    }

    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
    }
  }, [user, navigate])

  if (loading) return <div>Loading...</div>; 

  return (
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
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

