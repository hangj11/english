import { Mic, Keyboard } from "lucide-react";

export function LibraryScreen() {
  return (
    <div className="flex flex-col h-full bg-surface pt-16 px-6 relative">
      <div className="absolute inset-0 bg-wallpaper opacity-10 pointer-events-none"></div>
      <div className="mb-6 z-10 relative">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface mb-1">My Academy Hub</h1>
        <p className="text-primary font-bold text-xs opacity-90 uppercase tracking-wide">내 수업, 내 자료 기반 연습</p>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-24 flex flex-col gap-4 relative z-10">
        {[
          { name: "파고다 회화 Level 2 질문지", date: "10월 25일", completion: 90 },
          { name: "YBM 토익스피킹 Part 3", date: "10월 23일", completion: 50 },
          { name: "이익훈 어학원 Handout", date: "10월 20일", completion: 30 }
        ].map((item, idx) => (
          <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-3xl p-4 flex gap-4 shadow-[0_8px_16px_rgba(4,19,41,0.5)]">
            <div className="w-20 h-24 bg-surface-container-highest rounded-xl bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center border border-outline-variant relative overflow-hidden">
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase px-2 py-1 bg-primary/10 rounded-full border border-primary/20">Scanned</span>
                <span className="text-[10px] text-on-surface/50">{item.date}</span>
              </div>
              <h3 className="font-bold text-sm mb-3 text-on-surface leading-snug">{item.name}</h3>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-[#74daa8]" style={{ width: `${item.completion}%`}}></div>
                </div>
                <span className="text-[10px] font-bold text-[#74daa8]">{item.completion}%</span>
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
    <div className="flex flex-col h-full bg-surface pt-20 px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-on-surface tracking-tight">연습 모드 선택</h2>
        <p className="text-sm text-on-surface/60">모범답변 청취 후, 내 방식대로 답변하기</p>
      </div>
      
      <div className="flex flex-col gap-6 flex-1 max-w-[340px] mx-auto w-full">
        <div className="flex-1 bg-surface-container-low border border-primary/30 rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 hover:border-primary transition-all group relative overflow-hidden shadow-[0_16px_32px_rgba(75,142,255,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#74daa8]/10 to-transparent"></div>
          <div className="w-20 h-20 rounded-full bg-[#74daa8]/20 flex items-center justify-center mb-1 shadow-[0_0_24px_rgba(116,218,168,0.2)]">
            <Mic size={36} className="text-[#74daa8]" />
          </div>
          <h3 className="text-[22px] font-bold text-on-surface">말하기 연습 모드</h3>
          <p className="text-sm text-on-surface/60 text-center">마이크로 실전처럼 답변 녹음</p>
        </div>

        <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 hover:border-primary transition-all group relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-1">
            <Keyboard size={36} className="text-primary" />
          </div>
          <h3 className="text-[22px] font-bold text-on-surface">타이핑 리뷰 모드</h3>
          <p className="text-sm text-on-surface/60 text-center">조용한 곳에서 직접 텍스트 작성</p>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  );
}
