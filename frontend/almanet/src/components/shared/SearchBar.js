// src/components/shared/SearchBar.js
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchBar({ placeholder, onSearch, customStyles }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className={`flex items-center ${customStyles}`}>
      <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none px-2 border-b border-gray-300" // Added border styling
        style={{ borderRadius: '0' }} // Remove curved edges
      />
      <button onClick={handleSearch} className="hidden">Search</button>
    </div>
  );
}

export default SearchBar;
