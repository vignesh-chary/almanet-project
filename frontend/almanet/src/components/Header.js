// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3">
      <div className="flex items-center gap-4 text-gray-900">
        <h2 className="text-lg font-bold">Almanet</h2>
      </div>
      <div className="flex items-center gap-9">
        {/* Use Link components for routing */}
        <Link to="/" className="text-gray-900 text-sm font-medium">Home</Link>
        <Link to="/programs" className="text-gray-900 text-sm font-medium">Programs</Link>
        <Link to="/companies" className="text-gray-900 text-sm font-medium">For Companies</Link>
        <Link to="/alumni" className="text-gray-900 text-sm font-medium">Alumni</Link>
        <Link to="/mentor" className="text-gray-900 text-sm font-medium">Become a Mentor</Link>
        
        <div className="flex gap-2">
          {/* Log in button routes to LoginPage */}
          <Link to="/login">
            <button className="h-10 px-4 bg-blue-600 text-white rounded-xl font-bold">Log in</button>
          </Link>
          <Link to="/register">
            <button className="h-10 px-4 bg-gray-200 text-gray-900 rounded-xl font-bold">Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
