import React from 'react';
import Blob from './Blob'; // ✅ Your glitchy hacker image blob
import Header from '../src/sections/header';
import { Link } from 'react-router-dom';
export default function Hero(){
  return (
  <div className="h-auto mx-w-[80%]">
    <Header/>
    <div className="relative min-h-screen w-full bg-[#0B1120] overflow-hidden flex items-center px-6 md:px-20 py-20">
      
      {/* Background Gradient Blob */}
      <div className="absolute bottom-[-30%] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-[#6C4AB6] opacity-30 blur-[200px] pointer-events-none z-0" />

      {/* Glitch Hacker Image */}
      <Blob />

      {/* Main Content */}
      <div className="relative z-20 max-w-2xl text-white">
        {/* Badge */}
        <div className="mb-6 w-fit px-4 py-1 rounded-full text-sm font-medium border border-purple-500 text-purple-300 shadow-[0_0_15px_#a855f7]/80 backdrop-blur-md bg-purple-900/20">
           <span className="text-purple-300">🚀 Revolutionizing Educational Trust</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
            Trustless   
          </span> {' '}
          Certificate & <br/>
          Complaint Verification
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg mt-4 max-w-xl">
          Secure your educational credentials with blockchain technology. Verify certificates instantly and file complaints with complete transparency and decentralized trust.
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap md:gap-20 gap-10 mt-10">
          <div>
            <p className="text-purple-400 text-2xl font-semibold">100%</p>
            <p className="text-sm text-gray-400">Verified</p>
          </div>
          <div>
            <p className="text-blue-400 text-2xl font-semibold">24/7</p>
            <p className="text-sm text-gray-400">Available</p>
          </div>
          <div>
            <p className="text-green-400 text-2xl font-semibold">Instant</p>
            <p className="text-sm text-gray-400">Processing</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-xl font-semibold text-white shadow-md">
            Start Verification →
          </button>
         <button className="bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-xl font-semibold text-white shadow-md flex items-center gap-2">
       <Link to="/src/assets/Sample_Video.mp4" className="text-blue-400">▶ Watch Demo</Link>
  
         </button>
        </div>
      </div>
    </div>
     </div>
  );
};

 
