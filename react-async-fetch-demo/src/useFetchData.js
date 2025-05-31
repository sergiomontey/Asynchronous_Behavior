/**
 * File: useFetchData.js
 * Author: Sergio Montecinos
 * Date: 2025-05-31
 * Description:
 *   Custom React hook to fetch data asynchronously from a given URL.
 *   Encapsulates all async logic, state management, and error handling.
 *   Designed for reusability and separation of concerns.
 *   Returns: { data, loading, error }
 *
 * Usage:
 *   const { data, loading, error } = useFetchData(url);
 */

import { useState, useEffect } from "react";

export default function useFetchData(url) {
  // State for fetched data
  const [data, setData] = useState(null);
  // State for loading indicator
  const [loading, setLoading] = useState(true);
  // State for error information
  const [error, setError] = useState(null);

  useEffect(() => {
    // This flag helps prevent updating state after the component unmounts
    let isMounted = true;

    // Async function to fetch data from the provided URL
    const fetchData = async () => {
      setLoading(true);   // Mark as loading before starting
      setError(null);     // Reset previous errors

      try {
        // Attempt to fetch data
        const response = await fetch(url);

        // Throw error for non-OK HTTP status
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Parse response as JSON
        const result = await response.json();

        // Update data only if component is still mounted
        if (isMounted) setData(result);
      } catch (err) {
        // On error, update error state (if still mounted)
        if (isMounted) setError(err);
      } finally {
        // Always end loading (if still mounted)
        if (isMounted) setLoading(false);
      }
    };

    // Start fetch
    fetchData();

    // Cleanup: set flag if component unmounts
    return () => { isMounted = false; };
  }, [url]); // Rerun if url changes

  // Return current async state to component
  return { data, loading, error };
}