// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section className="flex flex-col items-start justify-end px-10 py-20 bg-cover bg-center rounded-xl" 
             style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://cdn.usegalileo.ai/sdxl10/0b695511-660a-4752-ba17-9f5225797a52.png')` }}>
      <h1 className="text-white text-5xl font-black">Hello, future tech leader</h1>
      <p className="text-white text-base mt-2">
        Welcome to Almanet, your platform to learn skills, mindset, and network to become a tech professional.
      </p>
      <div className="mt-4 flex gap-3">
        <button className="h-12 px-5 bg-blue-600 text-white rounded-xl font-bold">Explore Programs</button>
        <button className="h-12 px-5 bg-gray-200 text-gray-900 rounded-xl font-bold">Book a call</button>
      </div>
    </section>
  );
}

export default HeroSection;
