import dotenv from 'dotenv';
dotenv.config();

export const config = {
  GNEWS_API_KEY: process.env.GNEWS_API_KEY,
  GNEWS_API_URL: 'https://gnews.io/api/v4'
};
