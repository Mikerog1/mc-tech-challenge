"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<FilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {selectedCategory || "All Categories"}
        <FaChevronDown className="w-2.5 h-2.5 ms-2.5" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li
              className="p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                onCategoryChange("");
                setIsOpen(false);
              }}
            >
              All Categories
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className="p-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
