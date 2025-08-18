import Header from "../sections/header"
import Footer from "./footer"
export default function GetStarted(){
    return(
        <div className="bg-black">

<Header />
 {/* Get Started */}
<div className="bg-[#111] rounded-2xl p-8 flex flex-col items-center max-w-[80%] mx-auto mt-10 shadow-lg">
  <div className="mb-6">
    <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg shadow-md">
      <span className="mr-2">🚀</span> Ready to Get Started?
    </span>
  </div> 
  <h1 className="text-5xl font-extrabold text-center mb-4 text-white">
    Transform Your Institution<br />with <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CeriSure</span>
  </h1>             
  <p className="text-gray-300 text-xl text-center max-w-3xl">
    Join thousands of educational institutions already using CeriSure to verify certificates and manage complaints with blockchain-powered transparency and security.
  </p>
  <div className="flex justify-around  gap-10 mt-10">
      <div><svg   width="60" height="60" className="ml-11" viewBox="0 0 24 24" fill="none">
      <path d="M2 12h4l3 8 4-16 3 8h6" stroke="#9B5CFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg><div className="text-white text-xl font-bold mt-2">Secure and Immutable</div>
      <div className="text-gray-400 mt-1">
            Blockchain-powered security
            ensures your certificates can never be forged or tampered with.</div>
      </div>

      <div><svg xmlns="http://www.w3.org/2000/svg" className="ml-4" width="60" height="60" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="12" fill="#3bcbff"/><path d="M25 20 L35 20 L30 30 L40 30 L25 45 L30 35 L20 35 Z" stroke="black" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div className="text-white text-xl font-bold mt-2">Lightning Fast</div>
      <div className="text-gray-400 mt-1">Verify any certificate in under a second with our optimized blockchain infrastructure.</div>
      </div>

      <div><svg xmlns='http://www.w3.org/2000/svg' className="ml-4" width='60' height='60' viewBox='0 0 128 128'><rect x='8' y='8' width='112' height='112' rx='24' fill='#22c55e'/><circle cx='52' cy='46' r='14' fill='none' stroke='#fff' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><path d='M24 90c0-18 56-18 56 0' fill='none' stroke='#fff' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='90' cy='40' r='10' fill='none' stroke='#fff' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><path d='M70 78c0-12 40-12 40 0' fill='none' stroke='#fff' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/></svg>
      <div className="text-white text-xl font-bold mt-2">User Frinedly</div>
      <div className="text-gray-400 mt-1">Intuitive interface makes it easy
           for students, faculty, and administrators to use.</div>
      </div>

  </div>
</div>

<div className="flex flex-col items-center mt-10">
  {/* Button Row */}
  <div className="flex gap-6 mb-6">
    <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-md flex items-center gap-2 hover:scale-105 transition">
      Start Free Trial
      <span className="ml-2 text-xl">→</span>
    </button>
    <button className="bg-black text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-md hover:scale-105 transition">
      Schedule Demo
    </button>
  </div>
  {/* Features Row */}
  <div className="flex gap-8">
    <span className="flex items-center text-gray-300 text-lg">
      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
      No setup fees
    </span>
    <span className="flex items-center text-gray-300 text-lg">
      <span className="h-3 w-3 bg-purple-500 rounded-full mr-2"></span>
      Cancel anytime
    </span>
    <span className="flex items-center text-gray-300 text-lg">
      <span className="h-3 w-3 bg-sky-400 rounded-full mr-2"></span>
      24/7 support
    </span>
  </div>
</div>

{/* Custom Integration & Questions Section */}
<div className="w-full flex flex-col items-center justify-center py-12 bg-transparent">
  <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl mx-auto">
    {/* Card 1 */}
    <div className="flex-1 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-2xl min-h-[270px]">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Custom Integration?</h2>
      <p className="text-gray-300 mb-8 text-lg md:text-xl">Our team can help integrate CeriSure with your existing systems and workflows.</p>
      <div className="mt-2 flex justify-center w-full">
        <button className="px-6 py-2 rounded-lg bg-black/80 text-white font-semibold border border-white/30 hover:bg-white/10 transition shadow-md focus:outline-none">Contact Sales</button>
      </div>
    </div>
    {/* Card 2 */}
    <div className="flex-1 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-2xl min-h-[270px]">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have Questions?</h2>
      <p className="text-gray-300 mb-8 text-lg md:text-xl">Check our documentation or speak with our technical team for detailed answers.</p>
      <div className="mt-2 flex justify-center w-full">
        <button className="px-6 py-2 rounded-lg bg-black/80 text-white font-semibold border border-white/30 hover:bg-white/10 transition shadow-md focus:outline-none">View Documentation</button>
      </div>
    </div>
  </div>
</div>
<Footer />
        </div>
    )
}