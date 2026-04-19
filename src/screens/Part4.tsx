import { Check, X, Star, BarChart3, Info, Lock } from "lucide-react";

export function ComparativeFeedbackScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-4">
       <div className="flex justify-between items-end mb-8 px-2">
         <h1 className="text-2xl font-bold tracking-tight text-on-surface">Analysis</h1>
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
              The vast <span className="text-[#ff7b7b] line-through">expance</span> of knowledge <span className="text-[#ff7b7b] line-through">can access</span> through AI.
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
       <div className="absolute inset-0 bg-[#041329]/90 backdrop-blur-md z-0"></div>
       
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
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">Weekly Growth</h1>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#74daa8] to-[#4b8eff] p-[2px]">
           <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-xs font-bold text-on-surface">🔥 5</div>
        </div>
      </div>

      <div className="bg-surface-container border border-outline-variant rounded-[32px] p-6 mb-6">
         <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-on-surface"><BarChart3 size={16} className="text-primary"/> Performance</h3>
         
         <div className="flex items-end h-32 gap-3 mb-4">
            {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col justify-end group">
                 <div className="w-full bg-primary/20 rounded-t-sm group-hover:bg-primary transition-colors relative" style={{ height: `${h}%`}}>
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
            <h4 className="font-bold text-sm mb-1 text-on-surface">Perfect Reviewer</h4>
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

      <div className="bg-[rgba(16,36,68,0.55)] backdrop-blur-[30px] rounded-[32px] w-full shadow-[0_32px_64px_rgba(0,0,0,0.5)] border border-outline-variant overflow-hidden relative z-20 mx-auto mt-4 px-5 py-4 flex items-start gap-4">
         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[#002d6f] flex items-center justify-center shadow-inner shrink-0 mt-1">
           <span className="text-white font-bold font-serif text-xl leading-none">A</span>
         </div>
         <div className="flex-1">
           <div className="flex justify-between items-center mb-1 w-full">
             <span className="text-[13px] font-bold tracking-wide text-on-surface uppercase opacity-90">Academy Connect AI</span>
             <span className="text-[11px] text-on-surface/50 font-medium whitespace-nowrap">지금</span>
           </div>
           <h4 className="text-[15px] font-bold text-on-surface leading-[1.4] mb-1">Class is over! 📸</h4>
           <p className="text-[14px] font-medium text-on-surface/75 leading-[1.4]">
             Snap your worksheet and finish today's review in 5 mins.
           </p>
         </div>
      </div>
    </div>
  );
}
