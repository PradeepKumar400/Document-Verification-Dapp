import Header from "./header"
import Card from "./Card";
import How_its_work from "../Routing/How_its_work";
import Dashboard from "../Routing/Dashboard"; 
import Footer from "../Routing/footer";
export default function Features(){
    const arr=[
        {
          info: "Immutable certificate storage on Ethereum with IPFS integration. Verify any credential instantly with cryptographic proof.",
          image: "src/assets/Img1.png",
          title:"Blockchain Certificate Verification",
          component:["Ethereum ","Smart Contracts","IPFS"]
       
        },
        {
          info: "Anonymous, transparent complaint filing with unique blockchain hashes. Role-based visibility ensures proper handling.",
          image:"src/assets/Img2.png",
          title:"Decentralized Complaint System",
          component:["Blockchain Ledger","Role-Based Access","Encryption"]
       
        },
        {
            info: "Intelligent complaint drafting, automatic categorization, and smart routing. ML NLP layer for sensitive data protection.",
            image: "src/assets/Img3.png",
            title:"AI-Powered Assistant",
            component:["NLP Processing","Automatic Categorization","Smart Routing"]
        },
        {
            info:"Comprehensive analytics for institutions. Track certificates, monitor complaints, and generate detailed reports.",
            image: "src/assets/Img4.png",
            title:"Admin Dashboard",
            component:["Real-Time Analytics","Status Tracking","Report Generation"]
        },
        {
            info:"Secure login via MetaMask or OAuth. Easy certificate upload, verification status tracking,and complaint management.",
            image: "src/assets/Img5.png",
            title:"Student Faculty Portal",
            component:["Metamask Integration","OAuth","Status Tracking"]
        },
        {
            info:"End-to-end encryption, decentralized verification, and immutable audit trails. Your data stays private and secure.",
            image: "src/assets/Img6.png",
            title:"Zero Trust Security",
            component:["E2E Encryption","Immutable Logs","Privacy First"]
        }
                
    ]
   return(
        <>      
       <Header />
       <div className="bg-black ">
        {/* Features */}
        <div className=" w-full h-auto flex flex-col items-center pt-10 text-center">
  {/* Badge */}
  <div className="flex items-center px-3 py-2 rounded-full border border-purple-500 shadow-[0_0_15px_#a855f7]/80 backdrop-blur-md bg-purple-900/20 w-fit mb-6">
    <span className="text-xl mr-3">🛠️</span>
    <span className="text-purple-400 font-bold">Powerful Features</span>
  </div>
  {/* Title */}
  <h1 className="text-5xl font-bold mb-4">
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Revolutionary Technology Stack
    </span>{" "}   
  </h1>
  {/* Subtitle */}
  <p className="text-gray-400 text-lg max-w-2xl">
    Built with cutting-edge blockchain, AI, and modern web technologies to ensure
    maximum security, transparency, and user experience.
  </p>
        </div>
         <style>{`
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

        {/* Cards Created */}
        <div className=" flex pt-10 px-10 overflow-x-auto hide-scrollbar gap-4 ">
     {arr.map((item,index)=>{
               return <Card image="src\assets\Img1.png" key={index} item={item}/> 
          })} 
        </div>

        <div className="h-[240px]  bg-[#111] shadow-lg max-w-[70%] border-1 rounded-2xl  mx-auto mt-10  "> 
            <h1 className="text-center font-bold text-2xl p-4 text-white">Ready to tranform Education?</h1>
            <p className="text-gray-400 text-center text-xl pl-4 pr-4">Join the future of trustless educational verification with CeriSure's revolutionary blockchain-powered platform</p>
            <div className="text-xl gap-6 pt-10 flex justify-center items-center">
                  <button className="w-[200px] h-[40px] rounded-2xl border-1 text-white hover:bg-purple-600 font-bold hover:text-white transition duration-300">Start Free Trial</button>
                  <button className="w-[200px] h-[40px] rounded-2xl border-1 text-white hover:bg-purple-600 font-bold hover:text-white transition duration-300">Schedule Demo</button>
            </div>
            
        </div>

      <Footer/>

      </div>
  </>
    )
}