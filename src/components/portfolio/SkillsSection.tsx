import { motion } from "framer-motion";
import StageSection from "./StageSection";
import skillsBg from "@/assets/skills-bg.jpg";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "⚡",
    skills: ["Java", "Python", "C", "JavaScript", "Golang", "TypeScript"],
    color: "from-cyan-400 to-blue-500",
    glowColor: "cyan",
  },
  {
    title: "Web & Frameworks",
    icon: "🌐",
    skills: ["React", "Node.js", "Express.js", "REST API", "HTML/CSS", "Tailwind CSS"],
    color: "from-emerald-400 to-cyan-500",
    glowColor: "emerald",
  },
  {
    title: "Database & Cloud",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "Google Cloud", "Firebase", "PostgreSQL"],
    color: "from-purple-400 to-pink-500",
    glowColor: "purple",
  },
  {
    title: "AI / Machine Learning",
    icon: "🧠",
    skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "PCA", "KNN", "Decision Trees", "K-Means"],
    color: "from-orange-400 to-red-500",
    glowColor: "orange",
  },
  {
    title: "Data Visualization",
    icon: "📊",
    skills: ["PowerBI", "Tableau Desktop", "Seaborn", "Matplotlib", "Recharts"],
    color: "from-yellow-400 to-orange-500",
    glowColor: "yellow",
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux"],
    color: "from-pink-400 to-purple-500",
    glowColor: "pink",
  },
];

// Orbiting skill icons around a central meditating figure — pure CSS
const orbitSkills = [
  "Java", "Python", "React", "Node.js", "MongoDB", "AI/ML",
  "Golang", "Docker", "Git", "TypeScript", "Express", "Tailwind",
];

const SkillsSection = () => {
  return (
    <StageSection id="skills" bgImage={skillsBg} stageNumber={3} stageTitle="The Tree of Skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-8 text-center"
      >
        The Tree of Skills
      </motion.h2>

      {/* Orbiting skills visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-16"
      >
        {/* Center - meditating figure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl md:text-7xl animate-pulse">🧘</div>
          <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-cyan-500/10 animate-ping" style={{ animationDuration: "3s" }} />
        </div>

        {/* Orbit ring 1 */}
        <div className="absolute inset-4 md:inset-8 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]">
          {orbitSkills.slice(0, 4).map((skill, i) => {
            const angle = (i * 360) / 4;
            return (
              <div
                key={skill}
                className="absolute"
                style={{
                  left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="px-2.5 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/40 rounded-full text-cyan-300 text-xs font-bold whitespace-nowrap animate-[spin_20s_linear_infinite_reverse]">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit ring 2 */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/15 animate-[spin_30s_linear_infinite_reverse]">
          {orbitSkills.slice(4, 8).map((skill, i) => {
            const angle = (i * 360) / 4 + 45;
            return (
              <div
                key={skill}
                className="absolute"
                style={{
                  left: `${50 + 48 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 48 * Math.sin((angle * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="px-2.5 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full text-emerald-300 text-xs font-bold whitespace-nowrap animate-[spin_30s_linear_infinite]">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit ring 3 — outermost, hidden on very small screens */}
        <div className="absolute -inset-8 md:-inset-6 rounded-full border border-purple-500/10 animate-[spin_40s_linear_infinite] hidden md:block">
          {orbitSkills.slice(8, 12).map((skill, i) => {
            const angle = (i * 360) / 4 + 22;
            return (
              <div
                key={skill}
                className="absolute"
                style={{
                  left: `${50 + 46 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 46 * Math.sin((angle * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="px-2.5 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-400/40 rounded-full text-purple-300 text-xs font-bold whitespace-nowrap animate-[spin_40s_linear_infinite_reverse]">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Skill categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all hover:shadow-[0_0_30px_rgba(0,255,200,0.1)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}>
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-cyan-200/70 text-xs hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </StageSection>
  );
};

export default SkillsSection;
