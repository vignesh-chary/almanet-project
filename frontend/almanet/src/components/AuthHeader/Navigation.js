// src/components/AuthHeader/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UsersIcon, BriefcaseIcon, BellIcon } from '@heroicons/react/24/outline'; // Outline icons for consistency
import HandshakeIcon from '../../assets/icons/handshake.svg';

function Navigation() {
  const navItems = [
    { label: 'Home', icon: <HomeIcon className="h-6 w-6 text-gray-900" />, path: '/' },
    { label: 'My Network', icon: <UsersIcon className="h-6 w-6 text-gray-900" />, path: '/alumni' },
    { label: 'Jobs', icon: <BriefcaseIcon className="h-6 w-6 text-gray-900" />, path: '/jobs' },
    { label: 'Mentorship', icon: <img src={HandshakeIcon} alt="Mentorship icon" className="h-6 w-6" />, path: '/mentor' },
    { label: 'Notifications', icon: <BellIcon className="h-6 w-6 text-gray-900" />, path: '/notifications' },
  ];

  return (
    <nav className="flex gap-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="flex flex-col items-center text-gray-700 hover:text-gray-900"
        >
          {/* Icon without circular border */}
          <div className="flex items-center justify-center">
            {item.icon}
          </div>
          <span className="text-xs mt-1">{item.label}</span> {/* Reduced text size here */}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
