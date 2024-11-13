// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import HandshakeIcon from '../assets/icons/handshake.svg'; // Adjust the path as necessary

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-10 py-2"> {/* Reduced vertical padding */}
      <div className="flex items-center gap-4 text-gray-900">
        <Link to="/" className="text-lg font-bold">
          <h2>Almanet</h2>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="flex flex-col items-center text-gray-900 text-xs font-medium hover:text-blue-600">
          <HomeIcon className="h-6 w-6 mb-1" aria-hidden="true" />
          <span>Home</span>
        </Link>
        <Link to="/alumni" className="flex flex-col items-center text-gray-900 text-xs font-medium hover:text-blue-600">
          <UsersIcon className="h-6 w-6 mb-1" aria-hidden="true" />
          <span>Alumni</span>
        </Link>
        <Link to="/mentor" className="flex flex-col items-center text-gray-900 text-xs font-medium hover:text-blue-600">
          <img src={HandshakeIcon} alt="Mentorship icon" className="h-6 w-6 mb-1" />
          <span>Become a Mentor</span>
        </Link>

        <div className="flex gap-2">
          <Link to="/register">
            <button className="h-10 px-4 bg-white text-blue-600 border border-blue-600 rounded-xl font-bold">
              Sign up
            </button>
          </Link>
          <Link to="/login">
            <button className="h-10 px-4 bg-blue-600 text-white rounded-xl font-bold">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
