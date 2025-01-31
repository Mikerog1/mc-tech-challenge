"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  query: string;
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, onSearch }) => {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for labels"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-96 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      
    </div>
  );
};



export default Search;
