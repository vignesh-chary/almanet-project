// src/components/Sidebar/MentorshipStatus.js
import React from 'react';

const MentorshipStatus = ({ progress = 68, statusText = "Connecting with Mentor" }) => {
  return (
    <section className="flex flex-col p-4 w-full max-w-[336px] bg-white shadow rounded-md">
      <header className="flex justify-between items-center w-full text-base font-medium text-stone-900">
        <h2>Mentorship Status</h2>
        <span className="text-sm text-stone-500">{progress}%</span>
      </header>
      <div className="w-full bg-stone-300 rounded-full h-2 mt-2">
        <div
          className="bg-emerald-600 h-full rounded-full"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p className="mt-2 text-sm text-stone-500">{statusText}</p>
    </section>
  );
};

export default MentorshipStatus;
