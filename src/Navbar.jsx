// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import Imgage from "./assets/news-b.avif";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img src={Imgage} alt="Logo" className="h-10 w-10 mr-2" />{" "}
          {/* Replace with your logo */}
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            NewsApp
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a1 1 0 00-.993.883L9 2v1a1 1 0 001.993.117L11 3V2a1 1 0 00-.883-.993L10 1zM4.222 2.222a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM16.293 2.93a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM10 13a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zM4 11H3a1 1 0 00-.117 1.993L3 13h1a1 1 0 00.117-1.993L4 11zm12 0h-1a1 1 0 00-.117 1.993L15 13h1a1 1 0 00.117-1.993L16 11zM5.636 16.364a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM15.364 16.364a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM10 16a1 1 0 00-.993.883L9 17v1a1 1 0 001.993.117L11 18v-1a1 1 0 00-.883-.993L10 16z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.293 14.293a8 8 0 01-11.586 0 8 8 0 1111.586 0zM11.586 3.879a8.001 8.001 0 00-5.672 13.106 6 6 0 116.33-9.99 7.965 7.965 0 00-.658-3.116z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
