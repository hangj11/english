import { Pause, FastForward } from "lucide-react";

export function AudioPlayerScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <div className="flex justify-between items-center mb-10">
        <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase">Model Listening</span>
        <div className="px-3 py-1 rounded-full border border-outline-variant text-[10px] uppercase tracking-widest text-on-surface/60">Shadowing: OFF</div>
      </div>

      <div className="flex-1 flex flex-col justify-center mb-8 relative">
        <p className="text-2xl leading-[1.6] font-medium text-on-surface/40">
          The <span className="text-on-surface">cognitive</span> <span className="text-on-surface">horizon</span> represents the vast expanse of <span className="text-primary border-b-2 border-primary">knowledge</span> accessible through artificial intelligence.
        </p>
      </div>

      <div className="bg-surface-container-low rounded-[32px] p-6 border border-outline-variant mb-8">
        <div className="flex justify-between items-center mb-6 text-[10px] text-on-surface/50 font-mono">
          <span>00:12</span>
          <span>00:45</span>
        </div>
        <div className="w-full h-1 bg-surface-container-highest rounded-full mb-8 relative">
          <div className="absolute left-0 top-0 h-full w-[30%] bg-primary rounded-full"></div>
        </div>
        <div className="flex justify-between items-center px-4">
          <span className="text-xs font-bold text-on-surface/60">1.0x</span>
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary-container shadow-[0_8px_16px_rgba(173,198,255,0.2)] hover:scale-105 transition-transform">
            <Pause size={24} className="fill-current" />
          </div>
          <FastForward size={20} className="text-on-surface/60" />
        </div>
      </div>
    </div>
  );
}

export function VoicePracticeScreen() {
  return (
    <div className="flex flex-col h-full bg-[#041329] pt-16 px-6">
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold tracking-[0.1em] px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full uppercase inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span> Recording
        </span>
      </div>

      <div className="mb-12 text-center text-on-surface/50 text-sm font-medium line-clamp-2">
        Q: Summarize the main concept of the passage.
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="flex gap-2 items-center h-32">
          {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4].map((h, i) => (
            <div 
              key={i} 
              className="w-2 bg-gradient-to-t from-[#74daa8] to-[#00fa9a] rounded-full shadow-[0_0_12px_rgba(116,218,168,0.6)]" 
              style={{ height: `${h * 15 + 10}px`, animation: `pulse 1s infinite alternate`, animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-auto mb-12 flex flex-col items-center">
        <p className="text-center text-lg text-on-surface font-medium mb-8 leading-relaxed max-w-[280px]">
           The main concept is about... <span className="opacity-50 border-r-2 border-[#74daa8] pr-1 animate-pulse">how AI</span>
        </p>
        <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center cursor-pointer">
           <div className="w-6 h-6 rounded-sm bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export function TypingPracticeScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <p className="text-xs text-on-surface/50 font-bold uppercase tracking-widest mb-4">Q. Translate to English</p>
      <p className="text-lg text-on-surface font-medium leading-relaxed mb-8">
        인공지능을 통해 접근 가능한 지식의 광대한 영역
      </p>

      <div className="flex-1 bg-surface-container-low rounded-t-3xl border border-outline-variant p-5 mx--6 relative flex flex-col">
         <textarea 
           className="w-full bg-transparent text-on-surface resize-none focus:outline-none mb-4 text-base leading-relaxed" 
           rows={4}
           defaultValue="The vast expance of knowledge "
         />
         <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
            {["expanse", "expansion", "extent"].map(word => (
              <span key={word} className="px-4 py-2 bg-surface-container border border-outline-variant shadow-[0_4px_16px_rgba(4,19,41,0.5)] rounded-full text-xs text-primary whitespace-nowrap">{word}</span>
            ))}
         </div>
         <div className="mt-auto flex justify-end pb-4">
           <button className="bg-primary text-on-primary-container px-6 py-3 rounded-full text-sm font-bold shadow-[0_4px_12px_rgba(173,198,255,0.2)]">Check Grammar</button>
         </div>
      </div>
    </div>
  );
}
