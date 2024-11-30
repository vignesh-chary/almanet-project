// src/pages/AdminPage.js
import React from 'react';

function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Analytics Cards */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-2xl">2,345</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold">Total Alumni</h2>
          <p className="text-2xl">567</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold">New Events</h2>
          <p className="text-2xl">12</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
