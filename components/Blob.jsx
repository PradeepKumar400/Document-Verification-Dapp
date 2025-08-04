import React from 'react';
import hackerImg from '../src/assets/hacker.png'; // Path to your glitchy hacker image

const Blob = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[650px] max-w-none group">
      {/* Base Image */}
      <img
        src={hackerImg}
        alt="Hacker"
        className="w-full h-auto object-contain transition duration-300 ease-in-out group-hover:opacity-80"
      />

      {/* Red Glitch Layer */}
      <img
        src={hackerImg}
        alt="Glitch Red"
        className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 group-hover:opacity-50 mix-blend-screen blur-sm animate-glitch-red pointer-events-none"
      />

      {/* Blue Glitch Layer */}
      <img
        src={hackerImg}
        alt="Glitch Blue"
        className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 group-hover:opacity-50 mix-blend-screen blur-sm animate-glitch-blue pointer-events-none"
      />
    </div>
  );
};

export default Blob;
