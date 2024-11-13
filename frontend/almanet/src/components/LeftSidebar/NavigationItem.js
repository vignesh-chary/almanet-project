// src/components/leftsidebar/NavigationItem.js
import React from 'react';

function NavigationItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
      <Icon className="w-5 h-5 text-gray-700 mr-3" />
      <span className="text-gray-800 font-medium">{label}</span>
    </div>
  );
}

export default NavigationItem;
