import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  { id: "hero", narration: "Welcome to the cinematic journey of A Poorna Seshaseyan — a passionate software developer from Bengaluru." },
  { id: "summary", narration: "Stage 1: The Awakening — An ambitious Information Science undergraduate with expertise spanning Full-Stack, AI/ML, and Cybersecurity." },
  { id: "education", narration: "Stage 2: The Depths of Knowledge — Excelling academically with a 9.04 CGPA at SVCE, building a strong foundation." },
  { id: "skills", narration: "Stage 3: The Tree of Skills — Mastering Java, Python, React, Node.js, Machine Learning, and many more technologies." },
  { id: "projects", narration: "Stage 4: The Floating Creations — Building real-world applications from AI interview simulators to crowd safety systems." },
  { id: "certifications", narration: "Stage 5: The Sacred Grove — Earning certifications from Google, Deloitte, NPTEL, Accenture and IIT Madras." },
  { id: "achievements", narration: "Stage 6: The Summit of Triumphs — Winning hackathons, pitching innovative ideas, and leading in technical competitions." },
  { id: "contact", narration: "Stage 7: The Connection — Ready to connect and build something extraordinary together." },
];

interface SimulateModeProps {
  active: boolean;
  onStop: () => void;
}

const SimulateMode = ({ active, onStop }: SimulateModeProps) => {
  const [currentStage, setCurrentStage] = useState(0);

  const scrollToStage = useCallback((index: number) => {
    const el = document.getElementById(stages[index].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!active) {
      setCurrentStage(0);
      return;
    }

    scrollToStage(0);

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        const next = prev + 1;
        if (next >= stages.length) {
          onStop();
          return 0;
        }
        scrollToStage(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [active, scrollToStage, onStop]);

  if (!active) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-xl w-[90%]"
      >
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-5 shadow-[0_0_40px_rgba(0,255,200,0.15)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cyan-400 text-xs tracking-widest uppercase">
              Stage {currentStage + 1} / {stages.length}
            </span>
            <button
              onClick={onStop}
              className="text-cyan-300/50 hover:text-cyan-400 text-xs"
            >
              ✕ Stop
            </button>
          </div>
          <p className="text-cyan-100/80 text-sm leading-relaxed">
            {stages[currentStage].narration}
          </p>
          {/* Progress bar */}
          <div className="mt-3 h-0.5 bg-cyan-900/30 rounded-full overflow-hidden">
            <motion.div
              key={currentStage}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SimulateMode;
