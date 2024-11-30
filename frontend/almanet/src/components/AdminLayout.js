// src/components/AdminLayout.js
import React from 'react';
import AdminHeader from './AdminHeader';

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
        <div className="text-center text-2xl font-bold">
          Admin Panel
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/admin/news" className="block py-2 px-4 rounded hover:bg-gray-700">
                News Management
              </a>
            </li>
            <li>
              <a href="/admin/alumni" className="block py-2 px-4 rounded hover:bg-gray-700">
                Alumni Management
              </a>
            </li>
            <li>
              <a href="/admin/events" className="block py-2 px-4 rounded hover:bg-gray-700">
                Events Management
              </a>
            </li>
            <li>
              <a href="/admin/messaging" className="block py-2 px-4 rounded hover:bg-gray-700">
                Messaging
              </a>
            </li>
            <li>
              <a href="/admin/reports" className="block py-2 px-4 rounded hover:bg-gray-700">
                Reports
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
