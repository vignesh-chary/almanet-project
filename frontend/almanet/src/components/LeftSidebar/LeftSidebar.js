// src/components/leftsidebar/LeftSidebar.js
import React from 'react';
import NavigationItem from './NavigationItem';
import { BookmarkIcon, CalendarIcon, ChatBubbleLeftIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline'; // Updated icons import

const navigationItems = [
  { icon: UserIcon, label: 'Profile' },
  { icon: BriefcaseIcon, label: 'Mentorship' },
  { icon: CalendarIcon, label: 'Events' },
  { icon: ChatBubbleLeftIcon, label: 'Groups' }, // Replaced ChatIcon with ChatBubbleLeftIcon
  { icon: BookmarkIcon, label: 'Saved Items' },
];

function LeftSidebar() {
  return (
    <div className="flex flex-col w-full bg-gray-100 p-4 rounded-lg shadow-lg max-w-xs">
      {/* Profile Section */}
      <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow-sm mb-4">
        <img
          src="https://via.placeholder.com/100" // Replace with actual user profile picture URL if available
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <h3 className="mt-3 text-lg font-semibold">Vignesh Chary</h3>
        <p className="text-sm text-gray-600">Student at MVSR Engineering College</p>
        <div className="text-sm mt-4 text-center">
          {/* <p className="font-medium text-blue-500 cursor-pointer">Profile viewers: 4</p>
          <p className="mt-2 font-medium text-blue-500 cursor-pointer">View all analytics</p> */}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="bg-white p-3 rounded-lg shadow-sm">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>

      {/* Discover more */}
      <div className="bg-white p-3 rounded-lg shadow-sm mt-4 text-blue-500 text-center font-semibold cursor-pointer">
        Discover more
      </div>
    </div>
  );
}

export default LeftSidebar;
