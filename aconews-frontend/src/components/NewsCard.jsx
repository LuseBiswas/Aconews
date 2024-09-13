import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaHeart, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ article }) => {
  const [liked, setLiked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    // Check if the article is already liked by checking localStorage
    const likedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
    const isLiked = likedArticles.some(a => a.url === article.url);
    setLiked(isLiked);
  }, [article.url]);

  const handleLike = () => {
    const likedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
    if (liked) {
      // Remove article from likedArticles
      const updatedLikedArticles = likedArticles.filter(a => a.url !== article.url);
      localStorage.setItem('likedArticles', JSON.stringify(updatedLikedArticles));
    } else {
      // Add article to likedArticles
      likedArticles.push(article);
      localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative group">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
          src={article.image} 
          alt={article.title} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-lg font-bold hover:underline"
          >
            Read Full Article
          </a>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{article.description}</p>
        <div className="flex justify-between items-center">
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 flex items-center hover:text-blue-700 transition-colors"
          >
            Read more <FaExternalLinkAlt className="ml-1" />
          </a>
          <div className="flex space-x-2">
            <button 
              onClick={handleLike} 
              className={`p-2 rounded-full ${liked ? 'text-red-500 bg-red-100' : 'text-gray-500 bg-gray-100'} hover:bg-gray-200 transition-colors`}
            >
              <FaHeart />
            </button>
            <div className="relative">
              <button 
                onClick={handleShare} 
                className="p-2 rounded-full text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaShareAlt />
              </button>
              {showShareOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share on Twitter</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share on Facebook</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Copy Link</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
