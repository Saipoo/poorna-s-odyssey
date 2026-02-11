import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StageSectionProps {
  id: string;
  bgImage: string;
  stageNumber: number;
  stageTitle: string;
  children: ReactNode;
}

const StageSection = ({ id, bgImage, stageNumber, stageTitle, children }: StageSectionProps) => {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Stage label */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-24 left-6 md:left-12"
      >
        <span className="text-cyan-500/40 text-6xl md:text-8xl font-black">
          {String(stageNumber).padStart(2, "0")}
        </span>
        <p className="text-cyan-300/60 text-xs tracking-[0.3em] uppercase mt-1">
          {stageTitle}
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 w-full">
        {children}
      </div>
    </section>
  );
};

export default StageSection;
