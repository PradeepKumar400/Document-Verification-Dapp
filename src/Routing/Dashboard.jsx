import Header from "../sections/header";
import Footer from "./footer";

export default function Dashboard() {
        const activities = [
      {
        status: "success",
        color: "green-500",
        title: "Certificate Verified",
        subtitle: "MIT",
        time: "2 min ago"
      },
      {
        status: "warning",
        color: "yellow-400",
        title: "Complaint Filed",
        subtitle: "Anonymous",
        time: "5 min ago"
      },
      {
        status: "success",
        color: "green-500",
        title: "Certificate Issued",
        subtitle: "Stanford",
        time: "12 min ago"
      },
      {
        status: "success",
        color: "green-500",
        title: "Complaint Resolved",
        subtitle: "Harvard",
        time: "1 hour ago"
      },
      {
        status: "success",
        color: "green-500",
        title: "Certificate Verified",
        subtitle: "Oxford",
        time: "2 hours ago"
      }
    ];  
    const Complaint_Cateogaries = [85,52,28,98];
    return(

<div className="bg-black">
<Header />
<div className="flex mt-10 mb-5 border-2 justify-center mx-auto rounded-2xl w-[200px] bg-[#254531] text-[#22C55E]">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
  <rect x="2" y="2" width="20" height="20" rx="4" fill="white"/>
  <rect x="6" y="12" width="3" height="6" rx="1" fill="#e91e63"/>
  <rect x="11" y="9" width="3" height="9" rx="1" fill="#2196f3"/>
  <rect x="16" y="6" width="3" height="12" rx="1" fill="#4caf50"/>
</svg>
 <span className="p-1 ">Admin Dashboard</span></div>
<div className="text-white flex justify-center font-bold text-3xl">
  <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mr-2">Comprehensive
  </div>
  Analytics and Control
</div>
<div className="text-gray-400 text-xl max-w-[70%] mx-auto text-center mt-2">
Monitor your institution's certificate verification, track complaints, and gain insights
with our powerful administrative dashboard.</div>

<div className="bg-[#111] shadow-lg border-1 grid grid-cols-2 grid-rows-2 gap-4 p-5 max-w-[70%] mx-auto mt-5 rounded-2xl   ">
<div className="flex justify-between items-center pl-4 pr-4 h-[120px] rounded-2xl shadow-lg bg-black  ">
  <div>
    <div className="text-gray-400 shadow-lg text-xl mb-3">Certificate Verified</div>
    <div className="text-white text-xl font-bold mb-3">12,847</div>
    <div className="flex items-center gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7"/>
        <polyline points="21 7 15 7 15 13"/>
      </svg>
      <div className="text-green-500 mb-3">+23.1%</div>
    </div>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="#0B0B0B" stroke="#1A1A1A"/>
      <path d="M24 44s12-6 12-15V11L24 4 12 11v18c0 9 12 15 12 15z" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#A855F7"/>
        </filter>
      </defs>
    </svg>
  </div>
</div>
<div className="flex justify-between items-center pl-4 pr-4 h-[120px] rounded-2xl shadow-lg bg-black ">
  <div>
    <div className="text-gray-400 text-xl mb-3">Active Complained</div>
    <div className="text-white text-xl font-bold mb-3">42</div>
    <div className="flex items-center gap-x-2">
      <img className="h-9 w-9" src="https://static.vecteezy.com/system/resources/previews/021/113/977/non_2x/3d-loss-charts-and-diagram-icons-charts-and-graphs-pie-line-candlestick-chart-free-png.png" alt="" />
      <div className="text-green-500 mb-3">-12.3%</div>
    </div>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="12" ry="12" fill="#0d1117"/><path d="M22 18h12l6 6v18H22V18zM34 18v6h6" stroke="#00bfff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="25" y1="28" x2="35" y2="28" stroke="#00bfff" stroke-width="2" stroke-linecap="round"/><line x1="25" y1="34" x2="33" y2="34" stroke="#00bfff" stroke-width="2" stroke-linecap="round"/></svg>

  </div>
</div>
<div className="flex justify-between items-center pl-4 pr-4 h-[120px] rounded-2xl shadow-lg bg-black text-white">
  <div>
    <div className="text-gray-400 text-xl mb-3">Registered Users</div>
    <div className="text-xl font-bold mb-3">8,432</div>
    <div className="flex items-center gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7"/>
        <polyline points="21 7 15 7 15 13"/>
      </svg>
      <div className="text-green-500 mb-3">+18.7%</div>
    </div>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="12" ry="12" fill="#0d1117"/><circle cx="26" cy="26" r="4" stroke="#00ff66" stroke-width="2" fill="none"/><path d="M18 38c0-4 4-8 8-8s8 4 8 8" stroke="#00ff66" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="38" cy="26" r="3" stroke="#00ff66" stroke-width="2" fill="none"/><path d="M32 36c0-3 3-6 6-6s6 3 6 6" stroke="#00ff66" stroke-width="2" fill="none" stroke-linecap="round"/></svg>

  </div>
</div>                           
<div className="flex justify-between items-center pl-4 pr-4 h-[120px] rounded-2xl shadow-lg bg-black text-white">
  <div>
    <div className="text-gray-400 text-xl mb-3">System Health</div>
    <div className="text-xl font-bold mb-3">99.9%</div>
    <div className="flex items-center gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7"/>
        <polyline points="21 7 15 7 15 13"/>
      </svg>
      <div className="text-green-500 mb-3">+0.1%</div>
    </div>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="#0B0B0B" stroke="#1A1A1A"/>
      <polyline points="10 24 16 24 20 12 28 36 32 24 38 24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</div>
</div>
{/* Recent Activity */}
<div className="bg-[#111] rounded-2xl p-6  max-w-2xl mx-auto mt-10 shadow-lg">
  <div className="flex items-center mb-6">
    <svg width="24" height="24" className="mr-2" viewBox="0 0 24 24" fill="none">
      <path d="M2 12h4l3 8 4-16 3 8h6" stroke="#9B5CFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-white text-2xl font-bold">Recent Activity</span>
  </div>
  <div className="space-y-4">
    {activities.map((item, idx) => (
      <div key={idx} className="bg-[#18181b] rounded-xl px-5 py-4 flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <span className={`h-3 w-3 bg-${item.color} rounded-full mr-2`}></span>
            <span className="text-white font-semibold text-lg">{item.title}</span>
          </div>
          <div className="text-gray-400 text-sm mt-1">{item.subtitle}</div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-1`}>
            {item.status}
          </span>
          <span className="text-gray-400 text-xs">{item.time}</span>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Complaint Cateogaries */}
<div className="bg-[#111] rounded-2xl p-6  max-w-[90%] mx-auto mt-10 shadow-lg">
  {/* Academic Harassment */}
  <div className="flex justify-between">
   <div className="w-[90%]">
      <span className="font-bold text-white ">Academic Harassment</span>
      <div style={{width:`${Complaint_Cateogaries[0]}%`}} className="bg-pink-400 h-2 mt-2">1</div>
   </div>
   <div className="text-white font-bold text-lg">
        {Complaint_Cateogaries[0]}
   </div>
  </div>
  {/* Grade Disputs */}
  <div className="flex justify-between mt-5">
   <div className="w-[90%]">
      <span className="font-bold text-white"> Grade Disputs </span>
      <div style={{width:`${Complaint_Cateogaries[1]}%`}} className="bg-pink-400 h-2 mt-2">1</div>
   </div>
   <div className="text-white font-bold text-lg">
        {Complaint_Cateogaries[1]}
   </div>
  </div>  
{/* Discrimination */}
  <div className="flex justify-between mt-5">
   <div className="w-[90%]">
      <span className="font-bold text-white"> Discrimination   </span>
      <div style={{width:`${Complaint_Cateogaries[2]}%`}} className="bg-pink-400 h-2 mt-2">1</div>
   </div>
   <div className="text-white font-bold text-lg">
        {Complaint_Cateogaries[2]}
   </div>
  </div>
{/* Policy Voilation */}
  <div className="flex justify-between mt-5">
   <div className="w-[90%]">
      <span className="font-bold text-white"> Policy Voilation   </span>
      <div style={{width:`${Complaint_Cateogaries[3]}%`}} className="bg-pink-400 h-2 mt-2">1</div>
   </div>
   <div className="text-white font-bold text-lg">
        {Complaint_Cateogaries[3]}
   </div>
  </div>    
</div>

{/* 3 blocks */}
<div className="bg-[#111] rounded-2xl p-6 flex justify-between max-w-[80%] mx-auto mt-10 shadow-lg">
      <div className="flex flex-col items-center bg-black shadow-lg p-4 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="12" fill="#0B0B0B" stroke="#1A1A1A"/><path d="M24 44s12-6 12-15V11L24 4 12 11v18c0 9 12 15 12 15z" stroke="#A855F7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/><defs><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#A855F7"/></filter></defs></svg>
          <div className="text-white text-lg font-bold">Issue Certificate</div>
          <p className="text-gray-400">Create and verify new Certificate</p>
      </div>
      <div className="flex flex-col items-center bg-black shadow-lg  p-4 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="12" ry="12" fill="#0d1117"/><path d="M22 18h12l6 6v18H22V18zM34 18v6h6" stroke="#00bfff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="25" y1="28" x2="35" y2="28" stroke="#00bfff" stroke-width="2" stroke-linecap="round"/><line x1="25" y1="34" x2="33" y2="34" stroke="#00bfff" stroke-width="2" stroke-linecap="round"/></svg>
          <div className="text-white text-lg font-bold">Review Complaints</div>
          <p className="text-gray-400">Process and Pending Complaints</p> 
      </div>
      <div className="flex flex-col items-center bg-black shadow-lg p-4 rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="12" ry="12" fill="#0d1117"/><circle cx="26" cy="26" r="4" stroke="#00ff66" stroke-width="2" fill="none"/><path d="M18 38c0-4 4-8 8-8s8 4 8 8" stroke="#00ff66" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="38" cy="26" r="3" stroke="#00ff66" stroke-width="2" fill="none"/><path d="M32 36c0-3 3-6 6-6s6 3 6 6" stroke="#00ff66" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          <div className="text-white text-lg font-bold">Manage</div>
          <p className="text-gray-400">Add or remove user acess</p>
      </div>            
</div> 
<Footer />
        </div>
    )
}