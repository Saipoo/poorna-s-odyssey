import { motion } from "framer-motion";

type BgTheme = "water" | "fire" | "cosmic";

interface AvatarAnimatedBgProps {
  theme: BgTheme;
}

const WaterBg = () => (
  <>
    {/* Rising water bubbles */}
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={`wb-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${8 + Math.random() * 84}%`,
          bottom: "-5%",
          width: 4 + Math.random() * 10,
          height: 4 + Math.random() * 10,
          background: `radial-gradient(circle, rgba(0,200,255,${0.3 + Math.random() * 0.3}) 0%, transparent 70%)`,
          boxShadow: `0 0 12px rgba(0,200,255,0.3)`,
        }}
        animate={{
          y: [0, -(600 + Math.random() * 400)],
          x: [0, Math.sin(i) * 40],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeOut",
        }}
      />
    ))}
    {/* Water surface shimmer */}
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={`ws-${i}`}
        className="absolute pointer-events-none"
        style={{ left: `${i * 20 + 5}%`, bottom: "5%" }}
        animate={{ scale: [0, 2.5, 4], opacity: [0.3, 0.15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
      >
        <div className="w-6 h-6 rounded-full border border-cyan-300/20" />
      </motion.div>
    ))}
  </>
);

const FireBg = () => (
  <>
    {/* Floating ember particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={`fp-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: "-5%",
          width: 3 + Math.random() * 6,
          height: 3 + Math.random() * 6,
          background: `radial-gradient(circle, ${
            i % 3 === 0
              ? "rgba(255,100,0,0.6)"
              : i % 3 === 1
              ? "rgba(255,200,0,0.5)"
              : "rgba(255,50,0,0.5)"
          } 0%, transparent 70%)`,
          boxShadow: `0 0 8px ${i % 2 === 0 ? "rgba(255,100,0,0.4)" : "rgba(255,200,0,0.3)"}`,
        }}
        animate={{
          y: [0, -(500 + Math.random() * 500)],
          x: [0, (Math.random() - 0.5) * 80],
          opacity: [0, 0.9, 0],
          scale: [0.5, 1.2, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeOut",
        }}
      />
    ))}
    {/* Ash particles floating down */}
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.div
        key={`ash-${i}`}
        className="absolute w-1 h-1 bg-gray-400/30 rounded-full pointer-events-none"
        style={{ left: `${Math.random() * 100}%`, top: "-5%" }}
        animate={{
          y: [0, 800],
          x: [0, (Math.random() - 0.5) * 100],
          rotate: [0, 360],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear",
        }}
      />
    ))}
  </>
);

const CosmicBg = () => (
  <>
    {/* Shooting stars */}
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={`ss-${i}`}
        className="absolute pointer-events-none"
        style={{
          top: `${10 + Math.random() * 40}%`,
          left: "-5%",
          width: 60 + Math.random() * 40,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(200,200,255,0.8), transparent)",
          borderRadius: 2,
        }}
        animate={{
          x: [0, 1200],
          y: [0, 200 + Math.random() * 200],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          delay: i * 4 + Math.random() * 3,
          ease: "easeIn",
        }}
      />
    ))}
    {/* Nebula pulse */}
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={`nb-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${15 + Math.random() * 70}%`,
          top: `${10 + Math.random() * 80}%`,
          width: 80 + Math.random() * 120,
          height: 80 + Math.random() * 120,
          background: `radial-gradient(circle, ${
            i % 3 === 0
              ? "rgba(100,50,200,0.1)"
              : i % 3 === 1
              ? "rgba(50,100,200,0.08)"
              : "rgba(200,50,150,0.08)"
          } 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Twinkling stars */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 2 + Math.random() * 2,
          height: 2 + Math.random() * 2,
          backgroundColor: `rgba(${200 + Math.random() * 55},${200 + Math.random() * 55},255,0.6)`,
        }}
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      />
    ))}
  </>
);

const AvatarAnimatedBg = ({ theme }: AvatarAnimatedBgProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {theme === "water" && <WaterBg />}
      {theme === "fire" && <FireBg />}
      {theme === "cosmic" && <CosmicBg />}
    </div>
  );
};

export default AvatarAnimatedBg;
