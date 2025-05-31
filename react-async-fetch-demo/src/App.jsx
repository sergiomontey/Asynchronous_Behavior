/**
 * File: App.jsx
 * Author: Sergio Montecinos
 * Date: 2025-05-31
 * Description:
 *   Main React application component.
 *   Manages user state, cycles through demo users (IDs 1–10),
 *   and renders the UserProfile component.
 *   Demonstrates how to organize UI and state logic for an async fetch app.
 */

import React, { useState } from "react";
import UserProfile from "./UserProfile";

export default function App() {
  // State to keep track of which user is currently displayed.
  // Starts at user ID 1.
  const [currentUserId, setCurrentUserId] = useState(1);

  // Handler to increment the user ID.
  // Cycles from 1 to 10, then back to 1.
  const handleNextUser = () => {
    setCurrentUserId(prevId => (prevId % 10) + 1);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Asynchronous Behavior in React UI</h1>
      <button
        onClick={handleNextUser}
        style={{
          marginBottom: 16,
          padding: "8px 12px",
          borderRadius: 5,
          background: "#007bff",
          color: "#fff",
          border: "none"
        }}
      >
        Load Next User (Current: {currentUserId})
      </button>
      {/* Renders the profile of the current user */}
      <UserProfile userId={currentUserId} />
    </div>
  );
}