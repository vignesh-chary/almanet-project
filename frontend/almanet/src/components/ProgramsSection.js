// src/components/ProgramsSection.js
import React from 'react';

function ProgramsSection() {
  return (
    <section className="px-4 py-10 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Why choose Almanet?</h1>
      <p className="text-base font-normal mb-6 max-w-2xl">
        Our programs are designed to help you build the skills, mindset, and network you need to succeed in tech.
      </p>
      <button className="h-12 px-5 bg-blue-600 text-white rounded-xl font-bold">Explore Programs</button>
    </section>
  );
}

export default ProgramsSection;
