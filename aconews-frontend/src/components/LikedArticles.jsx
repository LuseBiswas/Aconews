import React, { useState, useEffect } from 'react';
import { FaNewspaper } from 'react-icons/fa';
import NewsCard from '../components/NewsCard';

const categories = [
  "Technology",
  "Entertainment",
  "Politics",
  "Sports",
  "Business",
  "Health",
  "Science",
  "Other"
];

const LikedArticles = () => {
  const [categorizedArticles, setCategorizedArticles] = useState({});

  useEffect(() => {
    const storedLikedArticles = JSON.parse(localStorage.getItem('likedArticles')) || [];
    
    // Categorize articles
    const categorized = categories.reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {});

    storedLikedArticles.forEach(article => {
      const articleCategory = article.category ? article.category.trim().toLowerCase() : 'other';
      const matchedCategory = categories.find(cat => cat.toLowerCase() === articleCategory) || 'Other';
      categorized[matchedCategory].push(article);
    });

    setCategorizedArticles(categorized);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <FaNewspaper className="mr-2 text-blue-500" />
        Liked Articles
      </h1>
      
      {Object.values(categorizedArticles).every(arr => arr.length === 0) ? (
        <p className="text-xl text-gray-600">No liked articles found.</p>
      ) : (
        categories.map(category => (
          categorizedArticles[category] && categorizedArticles[category].length > 0 && (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categorizedArticles[category].map((article, index) => (
                  <NewsCard key={`${category}-${index}`} article={article} />
                ))}
              </div>
            </div>
          )
        ))
      )}
    </div>
  );
};

export default LikedArticles;