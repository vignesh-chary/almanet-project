// src/components/SuccessStories.js
import React from 'react';

function SuccessStories() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-5">Success Stories</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-gray-900 font-bold">Erika's Journey</h3>
            <p className="text-gray-500 text-sm">
              Erika advanced to senior software engineer, thanks to Almanet's mentorship program.
            </p>
            <button className="mt-2 h-8 px-4 bg-gray-200 text-gray-900 rounded-xl">Read More</button>
          </div>
          <div className="w-40 h-24 bg-cover rounded-xl" style={{ backgroundImage: `url('https://placeimg.com/640/480/people')` }}></div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
