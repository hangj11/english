import { BrainCircuit, Camera } from "lucide-react";

export function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-surface-container-highest">
      <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-container rounded-3xl flex items-center justify-center shadow-[0_16px_32px_rgba(4,19,41,0.8)] mb-8 -rotate-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 text-on-surface">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold tracking-tighter text-on-surface mb-2">Academy Connect AI</h1>
      <p className="text-primary font-medium tracking-widest uppercase text-[10px] opacity-80">The Cognitive Horizon</p>
    </div>
  );
}

export function CameraScreen() {
  return (
    <div className="flex flex-col h-full bg-[#041329] relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633519803875-e9cc5c6db27f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-[#041329]/80 via-transparent to-[#041329]/80"></div>
       
       <div className="relative z-20 flex justify-between items-center p-6 pt-16">
         <div className="w-10 h-10 rounded-full bg-surface-container/50 backdrop-blur-md flex items-center justify-center text-on-surface">X</div>
         <div className="bg-surface-container/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-outline-variant">
           <div className="w-2 h-2 rounded-full bg-[#facc15] shadow-[0_0_8px_#facc15] animate-pulse"></div>
           <span className="text-[10px] font-bold tracking-widest text-[#facc15] uppercase">OCR Active</span>
         </div>
       </div>

       <div className="flex-1 m-auto w-full max-w-[85%] border border-[#4b8eff]/50 relative bg-[#4b8eff]/10 backdrop-blur-[2px] rounded-xl overflow-hidden shadow-[0_0_32px_rgba(75,142,255,0.15)]">
         <div className="absolute top-0 w-full h-[2px] bg-[#4b8eff] animate-[scan_2.5s_ease-in-out_infinite] blur-[1px]"></div>
         <div className="absolute top-1/4 left-8 w-20 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
         <div className="absolute top-1/3 left-16 w-32 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
         <div className="absolute top-[45%] left-10 w-24 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
       </div>

       <div className="relative z-20 p-8 pb-12 flex flex-col items-center">
         <p className="text-on-surface mb-8 text-sm font-medium opacity-80 uppercase tracking-widest text-[11px]">Align worksheet</p>
         <button className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-on-surface shadow-[0_0_16px_rgba(214,227,255,0.5)]"></div>
         </button>
       </div>
    </div>
  );
}

export function AnalyzingScreen() {
  return (
    <div className="flex flex-col h-full bg-surface items-center justify-center text-center px-8 relative overflow-hidden">
       <div className="absolute inset-0 bg-wallpaper opacity-10"></div>
       <div className="w-40 h-40 relative mb-10">
         <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20"></div>
         <div className="absolute inset-4 rounded-full border border-primary animate-ping opacity-40" style={{ animationDelay: '0.3s'}}></div>
         <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#4b8eff] to-[#002d6f] blur-[10px] animate-pulse"></div>
         <div className="absolute inset-0 flex items-center justify-center z-10">
           <BrainCircuit size={48} className="text-on-surface drop-shadow-[0_0_8px_rgba(214,227,255,0.8)]" />
         </div>
       </div>
       <h2 className="text-xl font-bold mb-4 tracking-tight text-on-surface">Extracting questions...</h2>
       <div className="w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden relative mt-8">
          <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-[#4b8eff] to-[#74daa8] rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
       </div>
    </div>
  );
}
