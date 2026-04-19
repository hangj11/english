const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'screens');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const part1 = `
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
       {/* Fake Camera View */}
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
         
         {/* Word highlights */}
         <div className="absolute top-1/4 left-8 w-20 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
         <div className="absolute top-1/3 left-16 w-32 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
         <div className="absolute top-[45%] left-10 w-24 h-5 bg-[#facc15]/30 border border-[#facc15] shadow-[0_0_8px_rgba(250,204,21,0.5)] rounded-sm"></div>
       </div>

       <div className="relative z-20 p-8 pb-12 flex flex-col items-center">
         <p className="text-on-surface mb-8 text-sm font-medium opacity-80 uppercase tracking-widest text-[11px]">Align worksheet within guide</p>
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
       <h2 className="text-xl font-bold mb-4 tracking-tight text-on-surface">AI is extracting questions...</h2>
       <p className="text-sm text-primary opacity-70 mb-8 max-w-[200px] leading-relaxed">Processing document structure and text content</p>
       
       <div className="w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-[#4b8eff] to-[#74daa8] rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
       </div>
    </div>
  );
}
\`;

const part2 = \`
import { Mic, Keyboard, BookOpen, Clock } from "lucide-react";

export function LibraryScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6 relative">
      <div className="absolute inset-0 bg-wallpaper opacity-10 pointer-events-none"></div>
      <h1 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">My Workbooks</h1>
      
      <div className="flex-1 overflow-y-auto pb-24 flex flex-col gap-4 relative z-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-surface-container-low border border-outline-variant rounded-3xl p-4 flex gap-4 shadow-[0_8px_16px_rgba(4,19,41,0.5)]">
            <div className="w-20 h-24 bg-surface-container-highest rounded-xl bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center border border-outline-variant relative overflow-hidden">
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase px-2 py-1 bg-primary/10 rounded-full border border-primary/20">A Academy</span>
                <span className="text-[10px] text-on-surface/50">Oct 25</span>
              </div>
              <h3 className="font-bold text-sm mb-3">Unit {item+4} Worksheet</h3>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-[#74daa8]" style={{ width: \`\${90 - item * 20}%\`}}></div>
                </div>
                <span className="text-[10px] font-bold text-[#74daa8]">{90 - item * 20}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ModeSelectionScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <h2 className="text-xl font-bold mb-8 text-on-surface text-center">Choose Practice Type</h2>
      
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-surface-container transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-16 h-16 rounded-full bg-[#74daa8]/20 flex items-center justify-center mb-2 shadow-[0_0_16px_rgba(116,218,168,0.2)]">
            <Mic size={28} className="text-[#74daa8]" />
          </div>
          <h3 className="text-xl font-bold text-on-surface">Speaking Focus</h3>
          <p className="text-xs text-on-surface/60 text-center max-w-[200px]">Practice pronunciation and fluency with AI</p>
        </div>

        <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-surface-container transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2 shadow-[0_0_16px_rgba(173,198,255,0.2)]">
            <Keyboard size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold text-on-surface">Writing Focus</h3>
          <p className="text-xs text-on-surface/60 text-center max-w-[200px]">Review through typing and grammar checks</p>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  );
}
\`;

const part3 = \`
import { Play, Pause, FastForward, Settings, Mic } from "lucide-react";

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
        {/* Massive 3D Waveform Effect */}
        <div className="flex gap-2 items-center h-32">
          {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4].map((h, i) => (
            <div 
              key={i} 
              className="w-2 bg-gradient-to-t from-[#74daa8] to-[#00fa9a] rounded-full shadow-[0_0_12px_rgba(116,218,168,0.6)]" 
              style={{ height: \`\${h * 20 + Math.random()*20}px\`, animation: \`pulse 1s infinite alternate\`, animationDelay: \`\${i * 0.1}s\` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-auto mb-12">
        <p className="text-center text-lg text-on-surface font-medium mb-8 leading-relaxed">
           The main concept is about... <span className="opacity-50 border-r-2 border-[#74daa8] pr-1 animate-pulse">how AI</span>
        </p>
        <div className="flex justify-center">
           <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center cursor-pointer">
              <div className="w-6 h-6 rounded-sm bg-red-400"></div>
           </div>
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
           placeholder="Type your answer here..."
         />
         <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
            {["expanse", "expansion", "extent"].map(word => (
              <span key={word} className="px-4 py-2 bg-surface border border-outline-variant rounded-full text-xs text-primary whitespace-nowrap">{word}</span>
            ))}
         </div>
         <div className="mt-auto flex justify-end pb-4">
           <button className="bg-primary text-on-primary-container px-6 py-3 rounded-full text-sm font-bold shadow-[0_4px_12px_rgba(173,198,255,0.2)]">Check Grammar</button>
         </div>
      </div>
    </div>
  );
}
\`;

const part4 = \`
import { Check, X, Star, BarChart3, Info, Lock } from "lucide-react";

export function ComparativeFeedbackScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-4">
       <div className="flex justify-between items-end mb-8 px-2">
         <h1 className="text-2xl font-bold tracking-tight">Analysis</h1>
         <div className="text-right">
           <div className="text-[10px] text-on-surface/50 uppercase tracking-widest font-bold mb-1">Expression</div>
           <div className="text-2xl font-bold text-[#74daa8]">85<span className="text-sm">%</span></div>
         </div>
       </div>

       <div className="flex flex-col gap-4">
         <div className="bg-surface-container-low border border-[#ff7b7b]/30 rounded-[24px] p-5 relative">
            <div className="absolute top-4 right-4 text-[#ff7b7b]"><X size={16} /></div>
            <span className="text-[10px] font-bold text-[#ff7b7b] uppercase tracking-widest mb-2 block">Your Version</span>
            <p className="text-on-surface line-through decoration-[#ff7b7b]/50 decoration-2 text-[15px] leading-relaxed">
              The vast <span className="text-[#ff7b7b]">expance</span> of knowledge <span className="text-[#ff7b7b]">can access</span> through AI.
            </p>
         </div>

         <div className="bg-surface-container-low border border-[#4b8eff]/50 rounded-[24px] p-5 relative shadow-[0_8px_24px_rgba(75,142,255,0.1)]">
            <div className="absolute top-4 right-4 text-[#4b8eff]"><Check size={16} /></div>
            <span className="text-[10px] font-bold text-[#4b8eff] uppercase tracking-widest mb-2 block">Natural AI Version</span>
            <p className="text-on-surface text-[15px] leading-relaxed">
              The vast <span className="text-[#4b8eff] font-medium border-b border-[#4b8eff] border-dashed pb-[2px]">expanse</span> of knowledge <span className="text-[#4b8eff] font-medium border-b border-[#4b8eff] border-dashed pb-[2px]">accessible</span> through AI.
            </p>
         </div>
       </div>
    </div>
  );
}

export function ExpressionDeepDiveScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-20 px-6 relative">
       {/* Background mimicking the previous screen slightly blurred */}
       <div className="absolute inset-0 bg-[#041329]/80 backdrop-blur-sm z-0"></div>
       
       <div className="relative z-10 bg-surface-container border border-outline-variant rounded-[32px] p-6 shadow-2xl mt-12">
          <div className="flex justify-between items-start mb-6">
             <div className="flex items-center gap-2 text-primary">
                <Info size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest">Did you know?</span>
             </div>
             <Star size={18} className="text-on-surface/30 hover:text-yellow-400 transition-colors" />
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-on-surface">Accessible vs Can access</h3>
          <p className="text-sm text-on-surface/70 leading-relaxed mb-6">
            In formal writing, reducing relative clauses (which can be accessed -&gt; accessible) makes sentences more concise and impactful.
          </p>

          <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant">
             <span className="text-[10px] text-on-surface/50 uppercase tracking-widest font-bold mb-2 block">Alternative Phrase</span>
             <p className="text-sm font-medium text-primary">"reachable via artificial intelligence"</p>
          </div>
       </div>
    </div>
  );
}

export function ReportScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Weekly Growth</h1>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#74daa8] to-[#4b8eff] p-[2px]">
           <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-xs font-bold">🔥 5</div>
        </div>
      </div>

      <div className="bg-surface-container border border-outline-variant rounded-[32px] p-6 mb-6">
         <h3 className="text-sm font-bold mb-6 flex items-center gap-2"><BarChart3 size={16} className="text-primary"/> Performance</h3>
         
         <div className="flex items-end h-32 gap-3 mb-4">
            {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col justify-end group">
                 <div className="w-full bg-primary/20 rounded-t-sm group-hover:bg-primary transition-colors relative" style={{ height: \`\${h}%\`}}>
                    {i === 5 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">95</div>}
                 </div>
               </div>
            ))}
         </div>
         <div className="flex justify-between text-[10px] text-on-surface/40 font-bold uppercase">
           <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="text-primary">S</span><span>S</span>
         </div>
      </div>

       <div className="bg-surface-container-low border border-outline-variant rounded-[24px] p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xl shadow-[0_4px_16px_rgba(250,204,21,0.3)]">🏆</div>
          <div>
            <h4 className="font-bold text-sm mb-1">Perfect Reviewer</h4>
            <p className="text-xs text-on-surface/50">Top 5% in Academy this week!</p>
          </div>
       </div>
    </div>
  );
}

export function NotificationLockScreen() {
  return (
    <div className="flex flex-col h-full bg-[#041329] pt-28 px-4 relative">
      <div className="absolute inset-0 bg-wallpaper opacity-40 mix-blend-screen transition-opacity duration-1000"></div>
      
      <div className="flex flex-col items-center mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-2">
           <Lock size={14} className="text-on-surface" />
        </div>
        <span className="text-[72px] font-bold tracking-[-0.04em] text-on-surface leading-[0.9]">18:30</span>
        <span className="text-[15px] font-medium text-on-surface mt-2 tracking-wide opacity-90">수요일, 10월 25일</span>
      </div>

      {/* iOS 17 Style Notification */}
      <div className="bg-[rgba(16,36,68,0.55)] backdrop-blur-[30px] rounded-[32px] w-full shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden relative z-20 mx-auto mt-4 iOS-bounce">
         <div className="px-5 py-4 flex items-start gap-4">
           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[#002d6f] flex items-center justify-center shadow-inner shrink-0 mt-1">
             <span className="text-white font-bold font-serif text-xl leading-none">A</span>
           </div>
           <div>
             <div className="flex justify-between items-center mb-1">
               <span className="text-[13px] font-bold tracking-wide text-on-surface uppercase opacity-90">Academy Connect AI</span>
               <span className="text-[11px] text-on-surface/50 font-medium">지금</span>
             </div>
             <h4 className="text-[15px] font-bold text-on-surface leading-[1.4] mb-1">Class is over! 📸</h4>
             <p className="text-[14px] font-medium text-on-surface/75 leading-[1.4]">
               Snap your worksheet and finish today's review in 5 mins.
             </p>
           </div>
         </div>
      </div>
    </div>
  );
}
\`;

fs.writeFileSync(path.join(dir, 'Part1.tsx'), part1);
fs.writeFileSync(path.join(dir, 'Part2.tsx'), part2);
fs.writeFileSync(path.join(dir, 'Part3.tsx'), part3);
fs.writeFileSync(path.join(dir, 'Part4.tsx'), part4);
console.log('Screens generated.');
