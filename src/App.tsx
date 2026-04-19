import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BatteryFull, Signal, Wifi } from "lucide-react";

import { SplashScreen, CameraScreen, AnalyzingScreen } from "./screens/Part1";
import { LibraryScreen, ModeSelectionScreen } from "./screens/Part2";
import { AudioPlayerScreen, VoicePracticeScreen, TypingPracticeScreen } from "./screens/Part3";
import { ComparativeFeedbackScreen, ExpressionDeepDiveScreen, ReportScreen, NotificationLockScreen } from "./screens/Part4";

type ScreenState = 
  | "splash" 
  | "camera" 
  | "analyzing" 
  | "library" 
  | "modes" 
  | "audio" 
  | "voice" 
  | "typing" 
  | "feedback" 
  | "deepdive" 
  | "report" 
  | "lock";

const SCREEN_SEQUENCE: ScreenState[] = [
  "splash", "camera", "analyzing", "library", "modes", "audio", "voice", "typing", "feedback", "deepdive", "report", "lock"
];

const SCREEN_DURATIONS: Record<ScreenState, number> = {
  splash: 2500,
  camera: 3000,
  analyzing: 3500,
  library: 3000,
  modes: 2500,
  audio: 3500,
  voice: 4000,
  typing: 3000,
  feedback: 3500,
  deepdive: 3500,
  report: 3500,
  lock: 3000
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screen = SCREEN_SEQUENCE[currentIndex];

  const screenVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
  };

  useEffect(() => {
    const duration = SCREEN_DURATIONS[screen];
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREEN_SEQUENCE.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [screen]);

  return (
    <div className="bg-background text-on-surface font-body h-screen w-screen overflow-hidden flex items-center justify-center selection:bg-primary/30">
      <div className="relative w-full h-full max-w-[430px] max-h-[932px] sm:h-[852px] sm:w-[393px] bg-surface sm:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_rgba(4,19,41,0.5)] sm:border-8 sm:border-surface-container">
        
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-14 flex justify-between items-center px-6 z-50 text-on-surface pointer-events-none">
          <span className="text-[15px] font-semibold tracking-tight">9:41</span>
          <div className="flex items-center gap-2">
            <Signal size={16} strokeWidth={2.5} className="mt-[1px]" />
            <Wifi size={17} strokeWidth={2.5} />
            <BatteryFull size={20} strokeWidth={2.5} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={screen} 
            variants={screenVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            className="w-full h-full"
          >
            {screen === "splash" && <SplashScreen />}
            {screen === "camera" && <CameraScreen />}
            {screen === "analyzing" && <AnalyzingScreen />}
            {screen === "library" && <LibraryScreen />}
            {screen === "modes" && <ModeSelectionScreen />}
            {screen === "audio" && <AudioPlayerScreen />}
            {screen === "voice" && <VoicePracticeScreen />}
            {screen === "typing" && <TypingPracticeScreen />}
            {screen === "feedback" && <ComparativeFeedbackScreen />}
            {screen === "deepdive" && <ExpressionDeepDiveScreen />}
            {screen === "report" && <ReportScreen />}
            {screen === "lock" && <NotificationLockScreen />}
          </motion.div>
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        @keyframes progress {
          0% { left: -40%; }
          100% { left: 100%; }
        }
      `}} />
    </div>
  );
}
