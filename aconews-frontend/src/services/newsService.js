// src/services/newsService.js
import axios from 'axios';

export const fetchNews = async (query, page = 1) => {
  try {
    const response = await axios.get(`https://aconews-backend-ji41.onrender.com/api/news?query=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [] };
  }
};
