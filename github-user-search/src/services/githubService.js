
// src/services/githubService.js
import axios from "axios";

const API_URL = "https://api.github.com/users/";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};
