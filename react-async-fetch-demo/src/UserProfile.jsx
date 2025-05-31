/**
 * File: UserProfile.jsx
 * Author: Sergio Montecinos
 * Date: 2025-05-31
 * Description:
 *   Displays detailed information for a given user by ID.
 *   Uses the custom hook useFetchData to perform an async fetch.
 *   Demonstrates best practices for async rendering in React:
 *     - Loading feedback (spinner)
 *     - Error handling
 *     - Clean, readable UI logic
 */

import React from "react";
import useFetchData from "./useFetchData";

export default function UserProfile({ userId }) {
  // Fetches user data for the provided userId using the custom hook.
  // Returns:
  //   - user: user object (on success)
  //   - loading: boolean (fetch in progress)
  //   - error: error object (if request fails)
  const { data: user, loading, error } = useFetchData(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  // Show loading indicator while fetch is in progress.
  if (loading) return <div className="spinner"></div>;

  // Show a clear error message if fetch fails.
  if (error) return <p style={{ color: "red" }}>Error loading user: {error.message}</p>;

  // If for any reason user is not present, render nothing.
  if (!user) return null;

  // Main UI: display user details (name, email, etc.)
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}