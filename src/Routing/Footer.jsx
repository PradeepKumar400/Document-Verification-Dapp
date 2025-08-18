export default function Footer(){
    return(
        <div id="footer">
                 {/* Hero Info Section */}
      <div  className="w-full max-w-3xl mx-auto pt-12 pb-6">
  <div className="flex items-center gap-4 mb-2">
    {/* Shield Icon */}
    <div className="bg-purple-500/30 rounded-xl p-3">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 6v6c0 5.25 3.75 9.75 8 10 4.25-.25 8-4.75 8-10V6l-8-3z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">CeriSure</span>
  </div>
  <p className="text-gray-300 text-lg mb-6">
    Revolutionizing educational trust through blockchain-powered certificate verification and decentralized complaint management systems.
  </p>
  {/* Social Icons */}
  <div className="flex gap-4 mb-6">
    <a href="#" className="bg-white border border-white rounded-lg p-3  ">
      {/* Twitter */}
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.47v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
    </a>
    <a href="#" className="bg-white border border-white rounded-lg p-3 ">
      {/* GitHub */}
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
    </a>
    <a href="#" className="bg-white border border-white rounded-lg p-3   ">
      {/* LinkedIn */}
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z"/><rect width="4" height="12" x="2" y="9" rx="2"/></svg>
    </a>
    <a href="#" className="bg-white border border-white rounded-lg p-3  ">
      {/* Email */}
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
    </a>
  </div>
  {/* Compliance Badges */}
  <div className="flex gap-8 items-center mt-2">
    <span className="flex items-center gap-2 text-green-400 text-base">
      <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
      99.9% Uptime
    </span>
    <span className="flex items-center gap-2 text-purple-400 text-base">
      <span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>
      SOC 2 Compliant
    </span>
    <span className="flex items-center gap-2 text-blue-400 text-base">
      <span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
      GDPR Ready
    </span>
  </div>
      </div>

      {/* Footer Section */}
        <footer className="bg-black pt-12 pb-6 max-w-[90%] mx-auto text-gray-300">
         {/* Links Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 text-base">
    <div>
      <div className="mb-2">Features</div>
      <div className="mb-2">How it Works</div>
      <div className="mb-2">Dashboard</div>
      <div className="mb-2">Pricing</div>
    </div>
    <div>
      <div className="mb-2">Documentation</div>
      <div className="mb-2">API Reference</div>
      <div className="mb-2">Blockchain Guide</div>
      <div className="mb-2">Support</div>
    </div>
    <div>
      <div className="mb-2">About</div>
      <div className="mb-2">Blog</div>
      <div className="mb-2">Careers</div>
      <div className="mb-2">Contact</div>
    </div>
    <div>
      <div className="mb-2">Privacy Policy</div>
      <div className="mb-2">Terms of Service</div>
      <div className="mb-2">Security</div>
      <div className="mb-2">Compliance</div>
    </div>
  </div>
  <hr className="border-t border-white/10 mb-8" />
  {/* Newsletter */}
  <div className="max-w-2xl mx-auto text-center mb-8">
    <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
    <p className="mb-6 text-gray-400">Get the latest updates on blockchain verification technology and platform features.</p>
    <form className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="px-8 py-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
  <hr className="border-t border-white/10 mb-6" />
  {/* Bottom Bar */}
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
    <div>
      © 2024 CeriSure. All rights reserved. Built with <span className="text-pink-400">♥</span> for education.
    </div>
    <div className="flex items-center gap-2">
      <span>Powered by</span>
      <span className="text-purple-400 font-semibold">Ethereum</span>
      <span className="text-blue-400 font-semibold">IPFS</span>
      <span className="text-green-400 font-semibold">React</span>
    </div>
  </div>
        </footer>
        </div>
        
    )
}