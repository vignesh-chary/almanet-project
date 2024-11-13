// src/components/AuthHeader/AuthHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from '../shared/SearchBar';
import Navigation from './Navigation';
import ProfileImage from './ProfileImage';

function AuthHeader() {
  const handleProfileSearch = (query) => {
    console.log("Searching for alumni or students with query:", query);
  };

  return (
    <header className="flex justify-between items-center px-6 py-2 w-full border-b border-gray-200 bg-white"> {/* Reduced vertical padding */}
      {/* Logo with Reload Functionality */}
      <div className="flex items-center gap-4">
        <Link to="/" onClick={() => window.location.reload()}>
          <Logo />
        </Link>
      </div>
      
      {/* Centered Search Bar */}
      <div className="flex-1 flex justify-center">
        <SearchBar
          placeholder="Search alumni, students..."
          onSearch={handleProfileSearch}
          customStyles="w-80 bg-gray-100 px-3 py-1"
        />
      </div>
      
      {/* Navigation Links and Profile Image */}
      <div className="flex items-center gap-8">
        <Navigation />
        <ProfileImage /> {/* ProfileImage component will be the only item here now */}
      </div>
    </header>
  );
}

export default AuthHeader;
