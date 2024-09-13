import axios from 'axios';
import { config } from '../config/config.js';

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(`${config.GNEWS_API_URL}/search`, {
      params: {
        q: query,
        token: config.GNEWS_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching news data');
  }
};
