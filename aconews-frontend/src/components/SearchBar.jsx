import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-l-lg focus:outline-none w-2/3 sm:w-1/2"
        placeholder="Search for news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-900 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
