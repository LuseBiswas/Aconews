import axios from 'axios';
import { config } from '../config/config.js';

export const fetchNews = async (req, res) => {
  const { query } = req.query;
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const pageSize = 10; // Number of articles per page

  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&apikey=${API_KEY}&page=${page}&max=${pageSize}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news from GNews API', error: error.message });
  }
};
