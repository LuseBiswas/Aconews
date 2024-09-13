import React, { useState, useEffect } from "react";
import { FaFire, FaNewspaper, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import { fetchNews } from "../services/newsService";
import Loading from "../components/Loading";

const categories = ["Technology", "Business", "Sports", "Entertainment", "Health"];

const Home = () => {
  const [news, setNews] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState("Technology");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError("");
      try {
        const newsData = await fetchNews(query || category, page);
        if (newsData.articles.length > 0) {
          setFeaturedArticle(newsData.articles[0]);
          setNews(newsData.articles.slice(1));
        } else {
          setFeaturedArticle(null);
          setNews([]);
        }
        setTotalPages(Math.ceil(newsData.totalArticles / 10));
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      }
      setLoading(false);
    };

    getNews();
  }, [query, category, page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setQuery("");
    setPage(1);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCategory("");
    setPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar setQuery={handleSearch} />
      
      {/* Category Quick Filters */}
      <div className="flex flex-wrap justify-center my-6 gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              category === cat
                ? "bg-blue-900 text-[#dbc652]"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaFire className="text-red-500 mr-2" /> Featured Article
              </h2>
              <NewsCard article={featuredArticle} featured={true} />
            </div>
          )}

          {/* Latest News */}
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaNewspaper className="text-blue-500 mr-2" /> Latest News
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>

          {/* No Results Message */}
          {news.length === 0 && !loading && (
            <p className="text-center text-gray-600 my-8">No articles found. Try a different search or category.</p>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${
                page === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <FaChevronLeft className="mr-2" /> Previous
            </button>
            <p className="py-2 px-4 bg-gray-100 rounded-full font-semibold">
              Page {page} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${
                page === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next <FaChevronRight className="ml-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;