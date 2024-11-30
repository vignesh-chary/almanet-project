import React from 'react';
import { BellIcon, UserCircleIcon, CogIcon } from '@heroicons/react/24/solid';

function AdminHeader() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Bell Icon */}
        <BellIcon className="w-6 h-6 text-white cursor-pointer" />
        
        {/* User Profile */}
        <UserCircleIcon className="w-6 h-6 text-white cursor-pointer" />
        
        {/* Settings */}
        <CogIcon className="w-6 h-6 text-white cursor-pointer" />
      </div>
    </header>
  );
}

export default AdminHeader;
