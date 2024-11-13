// src/components/ProgramsSection.js
import React from 'react';

function ProgramsSection() {
  return (
    <section className="px-4 py-10 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Why Choose Almanet?</h1>
      <p className="text-base font-normal mb-6 max-w-2xl">
        At Almanet, we empower students to connect with alumni for mentorship and guidance. Our platform offers resources and networking opportunities to help you navigate your career path and develop the skills needed for success in the tech industry.
      </p>
      <button className="h-12 px-5 bg-blue-600 text-white rounded-xl font-bold">Connect with Alumni</button>
    </section>
  );
}

export default ProgramsSection;
