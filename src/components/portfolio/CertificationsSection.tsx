import { motion } from "framer-motion";
import StageSection from "./StageSection";
import certsBg from "@/assets/certs-bg.jpg";

const certifications = [
  { title: "Introduction to Cybersecurity", issuer: "Google (via Coursera)", date: "Dec 2023" },
  { title: "Create your first Web app with Python and Flask", issuer: "Coursera", date: "Dec 2023" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", date: "Feb 2025" },
  { title: "Cyber Job Simulation", issuer: "Deloitte (via Forage)", date: "May 2025" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL", date: "May 2025" },
  { title: "Software Engineering Job Simulation", issuer: "Accenture (via Forage)", date: "Jun 2025" },
  { title: "Introduction to Golang", issuer: "Simplilearn SkillUp", date: "Jul 2025" },
  { title: "AI Search Methods for Problem Solving — IIT Madras", issuer: "VTU Center for Online Education", date: "Jul 2025" },
];

const CertificationsSection = () => {
  return (
    <StageSection id="certifications" bgImage={certsBg} stageNumber={5} stageTitle="The Sacred Grove" animatedBgTheme="fire">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-12 text-center"
      >
        The Sacred Grove
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-5 hover:border-emerald-400/40 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-lg">
              🏅
            </div>
            <div>
              <h3 className="text-sm font-bold text-cyan-300">{cert.title}</h3>
              <p className="text-cyan-100/40 text-xs mt-0.5">{cert.issuer}</p>
              <p className="text-cyan-500/40 text-xs mt-1">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </StageSection>
  );
};

export default CertificationsSection;
