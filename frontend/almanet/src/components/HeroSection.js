import React from 'react';

function HeroSection() {
  return (
    <section
      className="flex flex-col items-start justify-end px-10 py-20 bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: `url('/clg.jpg'), linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))`,
        backgroundBlendMode: 'multiply',
      }}
    >
      <h1 className="text-white text-5xl font-black">Empowering Your Future</h1>
      <p className="text-white text-base mt-2">
        Join Almanet to connect with alumni, gain mentorship, and enhance your skills for a successful tech career.
      </p>
      <div className="mt-4 flex gap-3">
        {/* <button className="h-12 px-5 bg-blue-600 text-white rounded-xl font-bold">Connect with Alumni</button> */}
        <button className="h-12 px-5 bg-gray-200 text-gray-900 rounded-xl font-bold">Start Your Journey</button>
      </div>
    </section>
  );
}

export default HeroSection;
