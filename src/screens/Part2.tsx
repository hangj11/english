import { Mic, Keyboard } from "lucide-react";

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
                  <div className="h-full bg-[#74daa8]" style={{ width: `${90 - item * 20}%`}}></div>
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
