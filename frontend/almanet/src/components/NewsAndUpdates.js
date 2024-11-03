// src/components/NewsAndUpdates.js
import React from 'react';

function NewsAndUpdates() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-5">News and Updates</h2>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-100 p-4 rounded-xl">
          <h3 className="text-gray-900 font-bold">New Machine Learning Program</h3>
          <p className="text-gray-500 text-sm">
            Excited to announce our new ML program designed for students passionate about data analysis.
          </p>
          <button className="mt-2 h-8 px-4 bg-gray-200 text-gray-900 rounded-xl">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default NewsAndUpdates;
