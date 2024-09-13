import express from 'express';
import { getNews } from '../controllers/newsController.js';

const router = express.Router();

// Route to get news
router.get('/', getNews);

export default router;
