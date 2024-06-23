// Import the environment variable
import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Use the API key in your API client configuration
const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

// Example function to fetch articles
export const fetchArticles = (category = 'general', page = 1) => {
  return apiClient.get(`/top-headlines`, {
    params: {
      category,
      page,
      pageSize: 10,
      country: 'in'  // Default country
    }
  });
};
