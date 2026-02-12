import { motion } from "framer-motion";
import StageSection from "./StageSection";
import forestBg from "@/assets/forest-bg.jpg";

const SummarySection = () => {
  return (
    <StageSection id="summary" bgImage={forestBg} stageNumber={1} stageTitle="The Awakening" animatedBgTheme="water">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-8 text-center">
          The Awakening
        </h2>
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 md:p-12">
          <p className="text-cyan-100/80 text-lg leading-relaxed mb-6">
            Ambitious Information Science undergraduate with a strong passion for{" "}
            <span className="text-cyan-400 font-semibold">Java & Python Development</span>,{" "}
            <span className="text-emerald-400 font-semibold">Networking</span>,{" "}
            <span className="text-purple-400 font-semibold">Full-Stack Development</span>,{" "}
            <span className="text-pink-400 font-semibold">AI/ML</span>,{" "}
            <span className="text-orange-400 font-semibold">Cybersecurity</span>, and{" "}
            <span className="text-yellow-400 font-semibold">Data Analytics</span>.
          </p>
          <p className="text-cyan-100/60 text-base leading-relaxed mb-8">
            Skilled in building scalable and secure applications, with a deep interest in solving complex real-world problems through innovative and data-driven solutions. Experienced in creating full-stack web applications, AI-powered platforms, and crowd management systems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "CGPA", value: "9.07" },
              { label: "Projects", value: "35+" },
              { label: "Certifications", value: "15+" },
              { label: "Hackathons", value: "5+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                <p className="text-xs text-cyan-300/50 tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </StageSection>
  );
};

export default SummarySection;
