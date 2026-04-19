import { Check, X, Star, BarChart3, Info, Lock } from "lucide-react";

export function ComparativeFeedbackScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-14 px-4 relative overflow-hidden">
       {/* 3-Part Feedback Overview Header */}
       <div className="relative z-10 mb-6 px-2">
         <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-6">입체적 피드백</h1>
         
         <div className="flex gap-2 w-full">
            <div className="flex-1 bg-gradient-to-br from-primary/20 to-transparent border border-primary/50 text-primary rounded-2xl p-3 text-center shadow-[0_4px_12px_rgba(75,142,255,0.2)]">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80 block mb-1">피드백 1</span>
              <span className="text-[13px] font-bold">비교 대조</span>
            </div>
            <div className="flex-1 bg-surface-container border border-outline-variant text-on-surface/50 rounded-2xl p-3 text-center opacity-70 border-dashed">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 block mb-1">피드백 2</span>
              <span className="text-[13px] font-semibold">문법 체크</span>
            </div>
            <div className="flex-1 bg-surface-container border border-outline-variant text-on-surface/50 rounded-2xl p-3 text-center opacity-70 border-dashed">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 block mb-1">피드백 3</span>
              <span className="text-[13px] font-semibold">표현 교정</span>
            </div>
         </div>
       </div>

       <div className="flex flex-col gap-4 relative z-10 px-1">
         <div className="flex items-center gap-2 mb-1 pl-1">
            <div className="w-1.5 h-4 bg-primary rounded-full"></div>
            <h3 className="text-sm font-bold text-on-surface">내 답변 vs 모범답안 단어 비교</h3>
         </div>

         <div className="bg-surface-container-low border border-[#ff7b7b]/30 rounded-[28px] p-6 relative">
            <div className="absolute top-5 right-5 text-[#ff7b7b] bg-[#ff7b7b]/10 p-1 rounded-full"><X size={14} strokeWidth={3}/></div>
            <span className="text-[10px] font-bold text-[#ff7b7b] uppercase tracking-widest mb-3 block">Your Voice Answer</span>
            <p className="text-on-surface line-through decoration-[#ff7b7b]/60 decoration-2 text-[16px] leading-relaxed font-medium">
              The vast <span className="text-[#ff7b7b] line-through">expance</span> of knowledge <span className="text-[#ff7b7b] line-through">can access</span> through AI.
            </p>
         </div>

         <div className="flex justify-center -my-2 relative z-20">
            <div className="bg-surface border border-outline-variant rounded-full p-1.5 text-on-surface/50 transform rotate-90">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
         </div>

         <div className="bg-gradient-to-br from-[#4b8eff]/10 to-transparent border border-[#4b8eff]/40 rounded-[28px] p-6 relative shadow-[0_16px_32px_rgba(75,142,255,0.15)]">
            <div className="absolute top-5 right-5 text-[#4b8eff] bg-[#4b8eff]/10 p-1 rounded-full"><Check size={14} strokeWidth={3}/></div>
            <span className="text-[10px] font-bold text-[#4b8eff] uppercase tracking-widest mb-3 block">AI Model Answer</span>
            <p className="text-on-surface text-[16px] leading-relaxed font-medium">
              The vast <span className="text-[#4b8eff] border-b-[2px] border-[#4b8eff]/50 border-dashed pb-[1px]">expanse</span> of knowledge <span className="text-[#4b8eff] border-b-[2px] border-[#4b8eff]/50 border-dashed pb-[1px]">accessible</span> through AI.
            </p>
         </div>
       </div>
    </div>
  );
}

export function ExpressionDeepDiveScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-14 px-4 relative overflow-hidden">
       {/* Highlighting Grammar & Expression */}
       <div className="relative z-10 mb-6 px-2">
         <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-6">입체적 피드백</h1>
         <div className="flex gap-2 w-full">
            <div className="flex-1 bg-surface-container border border-outline-variant text-on-surface/50 rounded-2xl p-3 text-center opacity-70 border-dashed">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 block mb-1">피드백 1</span>
              <span className="text-[13px] font-semibold">비교 대조</span>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#facc15]/10 to-transparent border border-[#facc15]/50 text-[#facc15] rounded-2xl p-3 text-center shadow-[0_4px_12px_rgba(250,204,21,0.1)]">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80 block mb-1">피드백 2+3</span>
              <span className="text-[13px] font-bold">문법 & 표현</span>
            </div>
         </div>
       </div>
       
       <div className="relative z-10 flex flex-col gap-4 px-1 mt-2">
          {/* Grammar Focus */}
          <div className="bg-surface-container-low border border-outline-variant rounded-[28px] p-6">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#facc15]/20 p-1.5 rounded-lg text-[#facc15]"><Info size={18} /></div>
                <span className="text-sm font-bold text-on-surface">문법 교정: Accessible</span>
             </div>
             <div className="bg-surface-container rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2 text-[#ff7b7b] text-sm"><X size={14}/> <span>can access (능동)</span></div>
                <div className="flex items-center gap-2 text-[#4b8eff] text-sm font-bold"><Check size={14}/> <span>accessible (형용사구 수식)</span></div>
             </div>
             <p className="text-[13px] text-on-surface/70 leading-relaxed mt-4">
               'which can be accessed'라는 수동 관계의 관계대명사절은, 격식있는 문장에서 간단하게 형용사 <strong className="text-primary font-bold">accessible</strong>로 단축할 수 있습니다.
             </p>
          </div>

          {/* Expression Focus */}
          <div className="bg-gradient-to-l from-[#74daa8]/5 to-transparent border border-[#74daa8]/30 rounded-[28px] p-6 relative">
             <div className="absolute top-6 right-6 text-yellow-400"><Star size={20} className="fill-current opacity-20"/></div>
             <span className="text-[10px] font-bold text-[#74daa8] uppercase tracking-widest mb-2 block">원어민의 표현 (Expression)</span>
             <h3 className="text-lg font-bold mb-3 text-on-surface leading-tight">reachable via artificial intelligence</h3>
             <p className="text-[13px] text-on-surface/70 leading-relaxed">
               accessible 이외에도 reachable via 라는 전치사구를 사용하면 조금 더 트렌디하고 직관적인 의미 전달이 가능합니다.
             </p>
          </div>
       </div>
    </div>
  );
}

export function ReportScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface mb-1">Weekly Growth</h1>
          <p className="text-primary text-[11px] font-bold uppercase tracking-widest">학원 진도 완벽 동기화</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#74daa8] to-[#4b8eff] p-[2px] shadow-[0_8px_16px_rgba(75,142,255,0.3)]">
           <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-[13px] font-bold text-on-surface">🔥 5</div>
        </div>
      </div>

      <div className="bg-surface-container border border-outline-variant rounded-[32px] p-6 mb-6 shadow-lg">
         <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-on-surface"><BarChart3 size={18} className="text-primary"/> Performance</h3>
         
         <div className="flex items-end h-32 gap-3 mb-5">
            {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col justify-end group">
                 <div className="w-full bg-primary/20 rounded-t border-t border-primary/50 group-hover:bg-primary/80 transition-colors relative" style={{ height: `${h}%`}}>
                    {i === 5 && <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">95</div>}
                 </div>
               </div>
            ))}
         </div>
         <div className="flex justify-between text-[11px] text-on-surface/40 font-bold uppercase px-1">
           <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="text-primary text-[13px]">S</span><span>S</span>
         </div>
      </div>

       <div className="bg-gradient-to-r from-surface-container-low to-transparent border border-outline-variant rounded-[24px] p-5 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-[0_8px_24px_rgba(250,204,21,0.4)]">🏆</div>
          <div>
            <h4 className="font-bold text-[15px] mb-1 text-on-surface">Perfect Follow-up!</h4>
            <p className="text-xs text-on-surface/60 font-medium">이번 주 학원 복습률 100% 달성</p>
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
           <Lock size={16} className="text-on-surface" />
        </div>
        <span className="text-[76px] font-bold tracking-[-0.04em] text-on-surface leading-[0.9]">18:30</span>
        <span className="text-[16px] font-medium text-on-surface mt-3 tracking-wide opacity-90">수요일, 10월 25일</span>
      </div>

      <div className="bg-[rgba(16,36,68,0.55)] backdrop-blur-[30px] rounded-[32px] w-full shadow-[0_32px_64px_rgba(0,0,0,0.5)] border border-outline-variant overflow-hidden relative z-20 mx-auto mt-4 px-5 py-5 flex items-start gap-4">
         <div className="w-11 h-11 rounded-1.5xl bg-gradient-to-br from-primary to-[#002d6f] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0 mt-0.5 border border-[#ffffff20]">
           <span className="text-white font-bold font-serif text-[22px] leading-none">A</span>
         </div>
         <div className="flex-1">
           <div className="flex justify-between items-center mb-1.5 w-full">
             <span className="text-[13px] font-bold tracking-wide text-on-surface uppercase opacity-90">Academy Connect AI</span>
             <span className="text-[11px] text-on-surface/50 font-medium whitespace-nowrap">방금 전</span>
           </div>
           <h4 className="text-[16px] font-bold text-on-surface leading-[1.4] mb-1.5">학원 수업이 끝났네요! 📸</h4>
           <p className="text-[14px] font-medium text-on-surface/75 leading-[1.4]">
             오늘 받은 질문지를 스캔해서 복습의 골든타임을 놓치지 마세요.
           </p>
         </div>
      </div>
    </div>
  );
}
