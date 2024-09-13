import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LikedArticles from './components/LikedArticles';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        {/* Header Component */}
        <Header />
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<LikedArticles />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
