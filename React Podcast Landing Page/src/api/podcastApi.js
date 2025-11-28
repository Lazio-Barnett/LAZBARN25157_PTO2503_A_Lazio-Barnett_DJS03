// src/api/podcastApi.js

const PODCAST_API_URL = "https://podcast-api.netlify.app/";

/**
 
Fetches podcast data from the external podcast API.*
This function uses the Fetch API to request JSON data from the
podcast endpoint. It throws an error if the response is not OK
(for example, if the server returns a 4xx or 5xx status).*
@async
@returns {Promise<unknown>} A promise that resolves to the parsed JSON
data returned by the podcast API. The exact shape of the data is
defined by the API.
@throws {Error} If the network request fails or the response is not OK.*/
export async function fetchPodcasts() {
  const response = await fetch(PODCAST_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts from the API.");
  }

  const data = await response.json();
  return data;
}
