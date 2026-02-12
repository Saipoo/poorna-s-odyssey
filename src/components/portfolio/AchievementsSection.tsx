import { motion } from "framer-motion";
import StageSection from "./StageSection";
import achievementsBg from "@/assets/achievements-bg.jpg";

const achievements = [
  {
    title: "🥇 Won 1st Place — College Idea Pitching Event",
    desc: "Showcased innovative problem-solving and presentation skills.",
  },
  {
    title: "🥈 Won 2nd Place — HackSpark 2025 Hackathon",
    desc: "Honored for innovative tech solution at SVCE Bangalore.",
  },
  {
    title: "🏆 Top 20 Finalist — Build for Bengaluru Hackathon",
    desc: "Participated at SKIT Bangalore and made it among top 20 finalists.",
  },
  {
    title: "🎯 7th Place — SIH 2024 Internal Hackathon",
    desc: "Competed in the Smart India Hackathon internal round at college.",
  },
  {
    title: "📊 Deloitte Data Analytics Job Simulation",
    desc: "Gained hands-on experience in data insights and reporting.",
  },
  {
    title: "🔒 Deloitte Cyber Job Simulation",
    desc: "Analyzed access logs, identified suspicious patterns, and investigated unauthorized API usage.",
  },
  {
    title: "☁️ GDSC Club Events Participant",
    desc: "Gained practical experience in Google Cloud-based development and deployment.",
  },
];

const AchievementsSection = () => {
  return (
    <StageSection id="achievements" bgImage={achievementsBg} stageNumber={6} stageTitle="The Summit of Triumphs" animatedBgTheme="cosmic">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center"
      >
        The Summit of Triumphs
      </motion.h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 p-5 hover:border-purple-400/40 transition-all"
          >
            <h3 className="text-base font-bold text-cyan-200">{ach.title}</h3>
            <p className="text-cyan-100/50 text-sm mt-1">{ach.desc}</p>
          </motion.div>
        ))}
      </div>
    </StageSection>
  );
};

export default AchievementsSection;
