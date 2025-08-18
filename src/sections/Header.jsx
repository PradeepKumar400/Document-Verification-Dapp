import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md w-full h-auto border-2-white">
      <div className="ml-20 flex flex-wrap justify-between items-center"> <svg className="p-2" width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#7c3aed" /></linearGradient> </defs> <rect width="64" height="64" rx="16" fill="url(#grad)" /><path d="M32 14L18 20V30C18 39 24.5 47 32 50C39.5 47 46 39 46 30V20L32 14Z" stroke="white" strokeWidth="2.5"fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="mt-3 ml-10 mr-10 text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
          CeriSure
        </span>

       <Link to="/Features" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg mt-1">Features</Link>

       <Link to="/HowItWorks" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg mt-1">How it Works</Link>

       <Link to="/Dashboard" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg mt-1">Dashboard</Link>

        <button to="/Contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg mt-1 mr-5" onClick={()=>{
          document.getElementById("footer").scrollIntoView({ behavior: 'smooth' });
        }}>Contact</button>

        <Link to="/SignIn" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg mt-1 mr-5">Sign in</Link>

        <Link to="/GetStarted" className="text-white hover:text-white transition-colors duration-200 text-lg mt-1 mr-5 rounded-[10px] p-2 bg-purple-500">Get Started</Link>

      </div>
    </header>
  );
}
