import Header from "../sections/header";
import Footer from "./footer";

export default function How_its_work() {
    return(
      
        <div className="bg-black">
          
<Header />
<div className="flex mt-10 border-2 justify-center mx-auto rounded-2xl w-[200px] bg-[#03202F] text-[#2BB7F5]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
 {" "}How it's Works!!!</div>

<div className=" text-white mt-6 text-center" >
  <span className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Simple </span><span className="font-bold text-3xl">Yet Powerfull </span> </div>

<p className="text-gray-400  mt-3 text-center text-xl max-w-[70%] mx-auto">Our three-step verification process ensures maximum security and transparency while maintaining simplicity for end users.</p>     

<div className="text-[#9B5CFD] mt-20 text-2xl font-bold text-center">Certificate Verification Process</div>
{/* Upload and Register */}
<div  className=" flex flex-col items-center h-100 max-w-[70%] mx-auto pl-5 pr-5  mt-6 text-whitrounded-3xl border-3 border-purple-500 shadow-[0_0_30px_#a78bfa]  ">
                                          
          <div className="bg-[#9B5CFD] mt-6 h-16 w-16 rounded-full flex justify-center items-center">01</div>
           <div className="mt-9 "><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#1B1429"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="#9B5CFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 9 12 4 17 9" stroke="#9B5CFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="4" x2="12" y2="16" stroke="#9B5CFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
           
</div>
 <div className="text-xl text-white font-bold">Upload and Register</div>
 <div className="text-gray-400 text-xl mt-3 max-w-[70%] text-center">Educational institutions upload certificates to our blockchain network with cryptographic signatures and metadata.</div>
<p className="mt-2"><span className="text-purple-500">•</span> <span className="text-gray-400">Smart contract deployment</span></p>
<p className="ml-5 mt-1"><span className="text-purple-500">•</span> <span className="text-gray-400">IPFS file storage</span></p>
<p className="ml-5 mt-1"><span className="text-purple-500">•</span> <span className="text-gray-400">Metadata indexing</span></p>


</div>
{/* Blockchain Verification */}
<div className="flex flex-col items-center h-100 max-w-[70%] mx-auto pl-5 pr-5 mt-20 text-whitrounded-3xl border-3 border-purple-500 shadow-[0_0_30px_#4cc2ff]">
  <div className="bg-[#4cc2ff] mt-6 h-16 w-16 rounded-full flex justify-center items-center">02</div>
  <div className="mt-9">
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4cc2ff"/><stop offset="1" stop-color="#67e8f9"/></linearGradient><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#4cc2ff" flood-opacity="0.6"/></filter></defs><rect x="4" y="4" width="56" height="56" rx="14" fill="#0b0f14"/><path d="M16 20l16-7 16 7v8c0 10-7.3 18.7-16 23-8.7-4.3-16-13-16-23v-8z" fill="url(#g)" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/></svg>

  </div>
  <div className="text-xl font-bold text-white">Blockchain Verification</div>
  <div className="text-gray-400 text-xl mt-3 max-w-[70%] text-center">
    Each certificate receives a unique hash stored immutably on the blockchain, creating an unforgeable digital fingerprint.  </div>
  <p className="mt-2"><span className="text-[#4cc2ff]">•</span> <span className="text-gray-400">Cryptographic hashing
</span></p>
  <p className="ml-5 mt-1"><span className="text-[#4cc2ff]">•</span> <span className="text-gray-400">Immutable storage</span></p>
  <p className="ml-5 mt-1"><span className="text-[#4cc2ff]">•</span> <span className="text-gray-400">Decentralized consensus</span></p>
</div>
{/* Instant Validation */}
<div className="flex flex-col items-center h-100 max-w-[70%] mx-auto pl-5 pr-5 mt-20 text-whitrounded-3xl border-3 border-purple-500 shadow-[0_0_30px_#22c55e]">
  <div className="bg-[#22c55e] mt-6 h-16 w-16 rounded-full flex justify-center items-center">03</div>
  <div className="mt-9">
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#0b0f14"/>
      <path d="M32 12a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm-4 20l4 4 8-8" 
        fill="none" 
        stroke="#22c55e" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
    </svg>
  </div>
  <div className="text-xl font-bold text-white">Instant Validation</div>
  <div className="text-gray-400 text-xl mt-3 max-w-[70%] text-center">
   Anyone can verify certificate authenticity instantly by checking the blockchain record against the original document.  </div>
  <p className="mt-2"><span className="text-[#22c55e]">•</span> <span className="text-gray-400">Real-time verification</span></p>
  <p className="ml-5 mt-1"><span className="text-[#22c55e]">•</span> <span className="text-gray-400">Global accessibility</span></p>
  <p className="ml-5 mt-1"><span className="text-[#22c55e]">•</span> <span className="text-gray-400">Zero trust model</span></p>
</div>

<div className="text-[#44C5FA] mt-20 text-3xl font-bold text-center">
  Complaint Filing Process
</div>
<p className="text-gray-400 mt-4 text-2xl max-w-[70%] mx-auto text-center">
  Our decentralized complaint system ensures transparency, anonymity, and proper resolution tracking.
</p>

<div className="grid grid-cols-2 grid-rows-2 gap-4  mt-5 p-1 max-w-[90%] mx-auto">
  <div className="bg-[#111] shadow-lg b p-2 h-[300px] flex flex-col items-center border-1  rounded-xl">
     <div className="bg-[#44C5FA] text-black text-2xl  border-1 font-bold mt-9 h-[60px] w-[60px] rounded-full flex justify-center items-center ">01</div>
     <div className="text-[#44C5FA] font-bold text-xl mt-4">File Complaint </div>
     <div className="text-gray-400 text-center font-medium mt-3 max-w-[70%]">Submit complaints anonymously through our secure, encrypted portal with Al assistance for proper
formatting.</div>
  </div>
  <div className="bg-[#111] shadow-lg b p-2 h-[300px] flex flex-col items-center border-1  rounded-xl">
     <div className="bg-[#44C5FA] text-black text-2xl  border-1 font-bold mt-9 h-[60px] w-[60px] rounded-full flex justify-center items-center ">02</div>
     <div className="text-[#44C5FA] font-bold text-xl mt-4">Blockchain Recording </div>
     <div className="text-gray-400 text-center font-medium mt-3 max-w-[70%]">Complaint receives unique hash and is recorded immutably on the blockchain with role-based access controls.</div>
  </div>
  <div className="bg-[#111] shadow-lg b p-2 h-[300px] flex flex-col items-center border-1  rounded-xl">
     <div className="bg-[#44C5FA] text-black text-2xl  border-1 font-bold mt-9 h-[60px] w-[60px] rounded-full flex justify-center items-center ">03</div>
     <div className="text-[#44C5FA] font-bold text-xl mt-4">Smart Routing</div>
     <div className="text-gray-400 text-center font-medium mt-3 max-w-[70%]">Al categorizes and routes complaints to appropriate authorities while maintaining anonymity and transparency.</div>
  </div> 
   <div className="bg-[#111] shadow-lg b p-2 h-[300px] flex flex-col items-center border-1  rounded-xl">
     <div className="bg-[#44C5FA] text-black text-2xl  border-1 font-bold mt-9 h-[60px] w-[60px] rounded-full flex justify-center items-center ">04</div>
     <div className="text-[#44C5FA] font-bold text-xl mt-4">Resolution Tracking</div>
     <div className="text-gray-400 text-center font-medium mt-3 max-w-[70%]">Track complaint status in real-time with automated
updates and transparent resolution processes.</div>
  </div>  
</div>

<div className="text-green-600 text-center mt-10 mb-10 font-bold text-3xl">Go where you’re valued, not just where you’re needed!!!</div>
<div className="border-1 bg-[#111] shadow-lg  flex justify-between max-w-[70%] mx-auto p-5 ">
<div >
    <div className="text-purple-600 font-bold text-2xl">99.9%</div>
    <div className="text-gray-400">Uptime</div>
</div>
<div>
    <div className="font-bold text-2xl text-gray-400">{'<'}1s</div>
    <div className="text-[#4DC3FF]">Verification Time</div>
</div>
<div>
    <div className="font-bold text-2xl text-gray-400">100%</div>
    <div className="text-[#27AE60]">Immutable</div>  
</div>
<div>
    <div className="font-bold text-2xl text-gray-400">24/7</div>
    <div className="text-[#F39C12]">Support</div>
</div>

</div>
<Footer/>
</div>
    )
}