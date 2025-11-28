// src/App.jsx
import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/podcastApi";

/**
 * Root component for the React Podcast Landing Page.
 * This component is responsible for:
 * - Fetching podcast data when the page first loads.
 * - Managing loading, error, and data states.
 * - Rendering simple text output for now (we will replace this
 *   with proper layout and podcast cards in later phases).
 * @returns {JSX.Element} The JSX markup for the app.
 */
function App() {
  // Stores the list of podcasts returned from the API.
  const [podcasts, setPodcasts] = useState([]);

  // Tracks whether the app is currently loading data.
  const [isLoading, setIsLoading] = useState(true);

  // Stores any error message that occurs during the fetch.
  const [error, setError] = useState("");

  useEffect(() => {
    // We define an inner async function because useEffect itself
    // cannot be marked as async.
    async function loadPodcasts() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchPodcasts();

        // Basic "empty result" handling.
        if (!data || (Array.isArray(data) && data.length === 0)) {
          setPodcasts([]);
        } else {
          // For now we just store the raw data as-is.
          setPodcasts(data);
        }
      } catch (err) {
        // Save a simple, user-friendly error message.
        setError("Sorry, we could not load podcasts. Please try again.");
        // Optional: log the real error for debugging.
        // console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    // Call the inner function once when the component mounts.
    loadPodcasts();
  }, []); // Empty dependency array = only run once on first render.

  // ----- Render logic -----

  if (isLoading) {
    return <p>Loading podcasts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!podcasts || podcasts.length === 0) {
    return <p>No podcasts found.</p>;
  }

  return (
    <main>
      <h1>React Podcast Landing Page</h1>
      <p>Total podcasts loaded: {podcasts.length}</p>

      {/* TEMP: Just list titles or IDs to prove the data works.
          We will replace this with proper components later. */}
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id || podcast.title}>
            {podcast.title || "Untitled podcast"}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
