// src/components/UpcomingEvents.js
import React from 'react';

function UpcomingEvents() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-5">Upcoming Events</h2>
      <div className="flex gap-4">
        <div className="flex-1 bg-gray-200 rounded-xl p-4">
          <h3 className="text-gray-900 font-bold">Tech Talk: Future of AI</h3>
          <p className="text-gray-500 text-sm mt-2">Join us to discuss the latest developments in AI.</p>
          <button className="mt-4 h-8 px-4 bg-blue-600 text-white rounded-xl">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
