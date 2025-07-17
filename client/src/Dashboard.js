import React from "react";
import { logout } from "./firebase";

export default function Dashboard({user}) {
    return (
        <div>
        <h2>Welcome, {user.email}</h2>
        <button onClick={logout}>Log Out</button>
        {/* Main app UI */}
      </div>
    )
}