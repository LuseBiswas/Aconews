// src/components/Loading.jsx
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner className="animate-spin text-blue-600 text-4xl" />
      <span className="ml-4 text-xl font-semibold">Loading News...</span>
    </div>
  );
};

export default Loading;
