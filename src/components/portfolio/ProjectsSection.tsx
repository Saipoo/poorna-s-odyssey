import { motion } from "framer-motion";
import StageSection from "./StageSection";
import spaceBg from "@/assets/space-bg.jpg";

const projects = [
  {
    title: "ConnectBook",
    subtitle: "Academic Management Platform",
    desc: "A comprehensive academic platform with Grade Master, Smart Attendance, Lecture Short Notes, Career Adviser, and Mentor Connect.",
    highlights: [
      "React dashboard with real-time analytics",
      "JWT-based secure authentication with role-based access",
      "Offline-capable with local storage data management",
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Express.js", "Tailwind"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Interview & Internship Simulator",
    subtitle: "AI-Powered Career Prep",
    desc: "A platform providing mock interviews, automated scoring, and real-world internship tasks.",
    highlights: [
      "AI-powered interview simulator with instant feedback",
      "Dynamic scoring and usability improvement by 40%",
      "Secure REST APIs with MongoDB backend",
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Express.js", "Tailwind"],
    color: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Crowd Safe Security System",
    subtitle: "AI-Based Stampede Prevention",
    desc: "An AI platform to predict and prevent stampedes during high-risk public gatherings.",
    highlights: [
      "AI-driven crowd density prediction with real-time alerts",
      "Multilingual voice-enabled chatbot",
      "WebSocket-based real-time communication between authorities",
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Google Maps API", "Web Speech API"],
    color: "from-red-400 to-orange-500",
  },
  {
    title: "Inspectrix",
    subtitle: "All-in-One Comparison & Review Analyzer",
    desc: "Simplifies decision-making by analyzing reviews, prices, ratings across businesses and products.",
    highlights: [
      "Smart analyzer suggesting best options",
      "Integrated chatbot for user guidance",
      "Real-time comparison analytics",
    ],
    tech: ["React", "Node.js", "Python", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "RideWithUs",
    subtitle: "Carpooling Made Easy",
    desc: "A user-friendly carpooling platform that helps people share rides and save travel costs.",
    highlights: [
      "Clean and responsive UI for ride booking",
      "Basic ride matching based on locations",
      "Local storage for quick data retrieval",
    ],
    tech: ["React", "Node.js", "Express.js", "Tailwind"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Modern UI Showcase",
    desc: "A visually appealing portfolio showcasing projects, skills, and achievements.",
    highlights: [
      "Fully responsive UI across all devices",
      "Smooth animations and interactive components",
    ],
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    color: "from-pink-400 to-purple-500",
  },
];

const ProjectsSection = () => {
  return (
    <StageSection id="projects" bgImage={spaceBg} stageNumber={4} stageTitle="The Floating Creations">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center"
      >
        The Floating Creations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 md:p-8 hover:border-cyan-400/40 transition-all hover:shadow-[0_0_40px_rgba(0,255,200,0.1)] group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${proj.color}`}>
                  {proj.title}
                </h3>
                <p className="text-cyan-300/50 text-sm">{proj.subtitle}</p>
              </div>
            </div>
            <p className="text-cyan-100/60 text-sm mb-4">{proj.desc}</p>
            <ul className="space-y-1.5 mb-4">
              {proj.highlights.map((h, j) => (
                <li key={j} className="text-cyan-200/50 text-xs flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {proj.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-300/70 text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </StageSection>
  );
};

export default ProjectsSection;
