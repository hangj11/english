import { BrainCircuit, ArrowLeft, Zap, Scan, Image as ImageIcon, Baseline } from "lucide-react";

export function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-surface-container-highest relative">
      <div className="absolute inset-0 bg-wallpaper opacity-20 transition-opacity duration-1000"></div>
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary to-primary-container rounded-3xl flex items-center justify-center shadow-[0_16px_32px_rgba(4,19,41,0.8)] mb-8 -rotate-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 text-on-surface">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h1 className="relative z-10 text-3xl font-bold tracking-tighter text-on-surface mb-4 text-center px-4 leading-tight">Academy Connect</h1>
      <p className="relative z-10 text-primary font-bold tracking-widest text-[11px] opacity-100 text-center max-w-[240px] bg-primary/10 py-2.5 px-5 rounded-full border border-primary/30 shadow-[0_0_16px_rgba(75,142,255,0.15)]">
        내 학원 자료, 그대로 연습하다
      </p>
    </div>
  );
}

export function CameraScreen() {
  return (
    <div className="flex flex-col h-full bg-[#1b1c24] relative overflow-hidden">
       {/* Background Book Image */}
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544473244-f6895e69da8a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 blur-[1px]"></div>
       <div className="absolute inset-0 bg-black/40"></div>
       
       {/* Top Bar */}
       <div className="relative z-20 flex justify-between items-center p-4 pt-14 bg-[#1b1c24]/90 backdrop-blur-md">
         <ArrowLeft size={24} className="text-white" />
         <span className="text-white font-medium text-[17px] tracking-wide">Document Scan</span>
         <Zap size={24} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] fill-white" />
       </div>

       {/* Scan Area Box */}
       <div className="relative flex-1 m-6 mt-10 mb-[240px] border border-white/20 rounded-lg shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
         {/* Corner Brackets */}
         <div className="absolute -top-[2px] -left-[2px] w-8 h-8 border-t-[3px] border-l-[3px] border-[#a4c2ff] rounded-tl-lg drop-shadow-[0_0_6px_rgba(164,194,255,0.8)]"></div>
         <div className="absolute -top-[2px] -right-[2px] w-8 h-8 border-t-[3px] border-r-[3px] border-[#a4c2ff] rounded-tr-lg drop-shadow-[0_0_6px_rgba(164,194,255,0.8)]"></div>
         <div className="absolute -bottom-[2px] -left-[2px] w-8 h-8 border-b-[3px] border-l-[3px] border-[#a4c2ff] rounded-bl-lg drop-shadow-[0_0_6px_rgba(164,194,255,0.8)]"></div>
         <div className="absolute -bottom-[2px] -right-[2px] w-8 h-8 border-b-[3px] border-r-[3px] border-[#a4c2ff] rounded-br-lg drop-shadow-[0_0_6px_rgba(164,194,255,0.8)]"></div>
         
         {/* Green Floating Labels */}
         <div className="absolute top-[20%] left-[15%] px-2.5 py-1 border border-[#74daa8] bg-[#74daa8]/10 text-[#74daa8] text-[9px] uppercase font-bold tracking-widest backdrop-blur-sm rounded shadow-[0_0_12px_rgba(116,218,168,0.3)]">LITERATURE</div>
         <div className="absolute top-[38%] left-[12%] px-2.5 py-1 border border-[#74daa8] bg-[#74daa8]/10 text-[#74daa8] text-[9px] uppercase font-bold tracking-widest backdrop-blur-sm rounded shadow-[0_0_12px_rgba(116,218,168,0.3)]">ANALYSIS</div>
         <div className="absolute top-[55%] left-[25%] px-2.5 py-1 border border-[#74daa8] bg-[#74daa8]/10 text-[#74daa8] text-[9px] uppercase font-bold tracking-widest backdrop-blur-sm rounded shadow-[0_0_12px_rgba(116,218,168,0.3)]">COMPREHENSION</div>

         {/* Analyzing Button */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2c3345]/80 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
            <Scan size={14} className="text-[#a4c2ff]" />
            <span className="text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase">Analyzing Text...</span>
         </div>
       </div>

       {/* Bottom Controls Panel */}
       <div className="absolute bottom-0 w-full h-[220px] pb-10 z-20 flex flex-col items-center justify-end">
          <div className="absolute inset-0 bg-[#2b2d35]/95 backdrop-blur-2xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center gap-6">
            {/* Mode Selector */}
            <div className="flex bg-[#121319] p-1.5 rounded-full shadow-inner">
              <button className="px-7 py-2 bg-[#1b233a] rounded-full text-[13px] font-bold text-[#a4c2ff] shadow-[0_2px_8px_rgba(0,0,0,0.2)]">Text</button>
              <button className="px-7 py-2 text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors">Math</button>
              <button className="px-7 py-2 text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors">Graph</button>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between w-full px-12">
               <button className="w-[52px] h-[52px] bg-[#1d1f27] rounded-2xl flex items-center justify-center text-white/80 hover:text-white border border-white/5 shadow-lg">
                 <ImageIcon size={22} />
               </button>

               <button className="w-20 h-20 rounded-[28px] bg-[#121319] border-4 border-[#2b2d35] flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]">
                 <div className="w-14 h-14 bg-[#7aa3ff] rounded-2xl shadow-[0_0_20px_rgba(122,163,255,0.6)]"></div>
               </button>

               <button className="w-[52px] h-[52px] bg-[#1d1f27] rounded-2xl flex items-center justify-center text-white/80 hover:text-white border border-white/5 shadow-lg">
                 <Baseline size={24} />
               </button>
            </div>
          </div>
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
       <h2 className="text-[22px] font-bold mb-6 tracking-tight text-on-surface leading-snug">
         질문지 내용 추출 및<br/>모범답변 생성 중...
       </h2>
       
       <div className="flex flex-col gap-3 text-sm font-medium text-left bg-surface-container-low border border-outline-variant p-4 rounded-2xl mb-8 w-full max-w-[260px] shadow-[0_8px_24px_rgba(4,19,41,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#74daa8] shadow-[0_0_8px_#74daa8]"></div>
            <span className="text-on-surface/80">내 학원 질문 추출 완료</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#facc15] shadow-[0_0_8px_#facc15] animate-pulse"></div>
            <span className="text-on-surface">AI 모범답안 동기화...</span>
          </div>
       </div>

       <div className="w-48 h-1.5 bg-surface-container-highest rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-[#4b8eff] to-[#74daa8] rounded-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
       </div>
    </div>
  );
}
