import { fetchNews } from '../utils/fetchNews.js';

// Controller function to get news
export const getNews = async (req, res) => {
  const { query } = req.query; // Get the search query from request parameters
  try {
    const newsData = await fetchNews(query || 'latest');
    res.status(200).json(newsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
