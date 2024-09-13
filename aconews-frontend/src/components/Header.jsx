import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-300 font-bold" : "";
  };

  return (
    <header className="bg-blue-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <FaNewspaper className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">ACONEWS</h1>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className={`hover:underline cursor-pointer transition-colors duration-300 ${isActive('/')}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/liked"
                className={`hover:underline cursor-pointer transition-colors duration-300 ${isActive('/liked')}`}
              >
              Liked Articles
              </Link>
            </li>
            {/* Additional nav items can go here */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;