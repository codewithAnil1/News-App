// Import the environment variable
import axios from "axios";
const API_KEY = "5febb4806d9241efb68c2971d347390b" ;

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
