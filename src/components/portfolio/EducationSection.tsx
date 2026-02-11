import { motion } from "framer-motion";
import StageSection from "./StageSection";
import oceanBg from "@/assets/ocean-bg.jpg";

const education = [
  {
    degree: "B.E in Information Science & Engineering",
    school: "Sri Venkateshwara College of Engineering",
    score: "CGPA: 9.04",
    period: "Nov 2022 — Present",
    location: "Bengaluru, India",
  },
  {
    degree: "Pre-University (PCMC)",
    school: "Government PU College Yelahanka",
    score: "91.33%",
    period: "Completed",
    location: "Bengaluru, India",
  },
  {
    degree: "ICSE",
    school: "New Baldwin School",
    score: "90%",
    period: "Completed",
    location: "Bengaluru, India",
  },
];

const EducationSection = () => {
  return (
    <StageSection id="education" bgImage={oceanBg} stageNumber={2} stageTitle="The Depths of Knowledge">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-12 text-center"
      >
        The Depths of Knowledge
      </motion.h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 md:p-8 hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-bold text-cyan-300">{edu.degree}</h3>
                <p className="text-cyan-100/60 mt-1">{edu.school}</p>
              </div>
              <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold">
                {edu.score}
              </span>
            </div>
            <div className="flex gap-4 mt-3 text-sm text-cyan-300/40">
              <span>{edu.period}</span>
              <span>📍 {edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </StageSection>
  );
};

export default EducationSection;
