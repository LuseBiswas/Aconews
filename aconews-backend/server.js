// Import required modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the CORS package
import newsRoutes from './routes/newsRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Initialize environment variables
dotenv.config();

// Create an Express application
const app = express();

// Use the CORS middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
