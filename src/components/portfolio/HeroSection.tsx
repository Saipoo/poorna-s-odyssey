import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

// Bioluminescent bubble
const GlowBubble = ({ delay, x, size, color }: { delay: number; x: string; size: number; color: string }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x,
      bottom: "-10%",
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      boxShadow: `0 0 ${size * 2}px ${color}`,
    }}
    animate={{
      y: [0, -800, -1200],
      x: [0, Math.sin(delay) * 60, Math.cos(delay) * 40],
      opacity: [0, 0.7, 0],
      scale: [0.5, 1.2, 0.3],
    }}
    transition={{
      duration: 10 + delay * 2,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

// Water ripple effect
const WaterRipple = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{
      scale: [0, 3, 5],
      opacity: [0.4, 0.2, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  >
    <div className="w-8 h-8 rounded-full border border-cyan-400/30" />
  </motion.div>
);

const HeroSection = ({ onSimulate }: { onSimulate: () => void }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Animated particles - bioluminescent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing bubbles rising */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlowBubble delay={0} x="15%" size={12} color="rgba(0,255,200,0.4)" />
        <GlowBubble delay={1.5} x="35%" size={8} color="rgba(0,200,255,0.3)" />
        <GlowBubble delay={3} x="55%" size={15} color="rgba(100,255,200,0.4)" />
        <GlowBubble delay={0.8} x="75%" size={10} color="rgba(0,255,150,0.35)" />
        <GlowBubble delay={2.2} x="25%" size={6} color="rgba(50,200,255,0.3)" />
        <GlowBubble delay={4} x="85%" size={14} color="rgba(0,255,200,0.3)" />
        <GlowBubble delay={1} x="45%" size={9} color="rgba(0,255,180,0.35)" />
        <GlowBubble delay={2.8} x="65%" size={11} color="rgba(100,200,255,0.3)" />
        <GlowBubble delay={3.5} x="5%" size={7} color="rgba(0,255,220,0.4)" />
        <GlowBubble delay={0.5} x="92%" size={13} color="rgba(0,200,180,0.3)" />
      </div>

      {/* Water ripple effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaterRipple delay={0} x="20%" y="85%" />
        <WaterRipple delay={2} x="50%" y="90%" />
        <WaterRipple delay={4} x="80%" y="88%" />
        <WaterRipple delay={1} x="35%" y="92%" />
        <WaterRipple delay={3} x="65%" y="87%" />
      </div>

      <div className="relative z-10 text-center px-4 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cyan-400/80 text-sm md:text-base tracking-[0.4em] uppercase mb-4"
        >
          Welcome to the Journey of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 mb-6"
        >
          A POORNA SESHASEYAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-cyan-100/70 font-light tracking-wider mb-8"
        >
          Software Developer • Full-Stack Engineer • AI/ML Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#summary" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,255,200,0.5)] transition-all">
            Begin Journey ↓
          </a>
          <button 
            onClick={onSimulate}
            className="px-8 py-3 border border-cyan-500/40 text-cyan-300 rounded-full hover:bg-cyan-500/10 transition-all"
          >
            ▶ Simulate Journey
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
