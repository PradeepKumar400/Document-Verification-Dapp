export default function VideoDemo(){
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#0B1120]">
        <video 
            className="rounded-lg shadow-lg"
            controls
            autoPlay
            loop
            src="/src/assets/Sample_Video.mp4"
        >
            Your browser does not support the video tag.
        </video>
        </div>
    );
}