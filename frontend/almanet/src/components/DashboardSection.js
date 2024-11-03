// src/components/DashboardSection.js
import React from 'react';

function DashboardSection() {
  return (
    <section className="p-4">
      <h2 className="text-gray-900 text-2xl font-bold mb-5">Your Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="bg-gray-300 aspect-video rounded-xl" style={{ backgroundImage: `url("https://placeimg.com/640/480/tech/${index}")`, backgroundSize: 'cover' }}></div>
        ))}
      </div>
    </section>
  );
}

export default DashboardSection;
