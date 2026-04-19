import { Pause, FastForward, Headphones } from "lucide-react";

export function AudioPlayerScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <div className="flex justify-between items-center mb-10">
        <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase">From Academy Worksheet Q1</span>
        <div className="px-3 py-1.5 flex items-center gap-1.5 bg-primary/20 rounded-full border border-primary/50 text-[10px] uppercase font-bold tracking-widest text-primary shadow-[0_0_12px_rgba(75,142,255,0.3)]">
          <Headphones size={12} /> AI 모범답변 청취
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center mb-8 relative px-2">
        <p className="text-[26px] leading-[1.6] font-medium text-on-surface/40 tracking-tight">
          The <span className="text-on-surface">cognitive</span> <span className="text-on-surface">horizon</span> represents the vast expanse of <span className="text-primary border-b-2 border-primary">knowledge</span> accessible through artificial intelligence.
        </p>
      </div>

      <div className="bg-surface-container-low rounded-[32px] p-6 border border-primary/30 mb-8 shadow-[0_16px_32px_rgba(4,19,41,0.6)]">
        <div className="flex justify-between items-center mb-6 text-[11px] text-primary font-mono tracking-wider font-bold">
          <span>00:12</span>
          <span className="text-on-surface/50">00:45</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full mb-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[30%] bg-primary rounded-full shadow-[0_0_8px_#4c8eff]"></div>
        </div>
        <div className="flex justify-between items-center px-4">
          <span className="text-sm font-bold text-on-surface/60">1.0x</span>
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary-container shadow-[0_8px_24px_rgba(173,198,255,0.4)] hover:scale-105 transition-transform">
            <Pause size={24} className="fill-current" />
          </div>
          <FastForward size={24} className="text-on-surface/60" />
        </div>
      </div>
    </div>
  );
}

export function VoicePracticeScreen() {
  return (
    <div className="flex flex-col h-full bg-[#041329] pt-16 px-6">
      <div className="text-center mb-8">
        <span className="text-[10px] font-bold px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/30 rounded-full uppercase inline-flex items-center gap-2 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span> Mic Active
        </span>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-4 text-center">
        <span className="text-[9px] font-bold tracking-widest text-[#74daa8] uppercase block mb-1">추출된 내 질문지 문항</span>
        <div className="text-on-surface/90 text-[15px] font-medium leading-snug">
          Q: Summarize the main concept of the passage.
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative my-4">
        <div className="flex gap-2.5 items-center h-32">
          {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4].map((h, i) => (
            <div 
              key={i} 
              className="w-2.5 bg-gradient-to-t from-[#74daa8] to-[#00fa9a] rounded-full shadow-[0_0_16px_rgba(116,218,168,0.6)]" 
              style={{ height: `${h * 15 + 10}px`, animation: `pulse 1s infinite alternate`, animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-auto mb-12 flex flex-col items-center">
        <p className="text-center text-[17px] text-on-surface font-medium mb-10 leading-relaxed max-w-[280px]">
           The main concept is about... <span className="opacity-50 border-r-2 border-[#74daa8] pr-1 animate-pulse inline-block min-w-[2px] h-5 translate-y-1"></span>
        </p>
        <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shadow-[0_8px_24px_rgba(4,19,41,0.5)]">
           <div className="w-6 h-6 rounded bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export function TypingPracticeScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-6">
        <span className="text-[9px] font-bold tracking-widest text-primary uppercase block mb-1">추출된 내 질문지 문항</span>
        <p className="text-[17px] text-on-surface font-medium leading-relaxed">
          인공지능을 통해 접근 가능한 지식의 광대한 영역을 영어로.
        </p>
      </div>

      <div className="flex-1 bg-surface-container-low rounded-t-[32px] border border-outline-variant p-6 mx--6 relative flex flex-col shadow-[0_-16px_32px_rgba(4,19,41,0.4)]">
         <span className="text-[11px] font-bold text-on-surface/50 uppercase tracking-widest mb-4">내 답변 입력란</span>
         <textarea 
           className="w-full bg-transparent text-on-surface resize-none focus:outline-none mb-4 text-[17px] leading-relaxed font-medium" 
           rows={4}
           defaultValue="The vast expance of knowledge "
         />
         <div className="flex gap-2.5 overflow-x-auto pb-4 hide-scrollbar -mx-2 px-2">
            {["expanse", "expansion", "extent"].map(word => (
              <span key={word} className="px-5 py-2.5 bg-surface-container-highest border border-outline-variant shadow-[0_4px_16px_rgba(4,19,41,0.4)] rounded-full text-[13px] font-bold text-primary whitespace-nowrap">{word}</span>
            ))}
         </div>
         <div className="mt-auto flex justify-end pb-4 pt-4 border-t border-outline-variant">
           <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-3.5 rounded-full text-[15px] font-bold shadow-[0_8px_24px_rgba(173,198,255,0.4)] hover:opacity-90">
             분석 및 피드백 받기
           </button>
         </div>
      </div>
    </div>
  );
}
