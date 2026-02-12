import { useState, useCallback } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SummarySection from "@/components/portfolio/SummarySection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import SimulateMode from "@/components/portfolio/SimulateMode";

const Index = () => {
  const [simulating, setSimulating] = useState(false);

  const handleSimulate = useCallback(() => {
    setSimulating(true);
  }, []);

  const handleStopSimulate = useCallback(() => {
    setSimulating(false);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />

      {/* Simulate button at bottom */}
      {!simulating && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleSimulate}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-sm font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,255,200,0.5)] transition-all animate-pulse hover:animate-none"
          >
            ▶ Simulate Journey
          </button>
        </div>
      )}

      <SimulateMode active={simulating} onStop={handleStopSimulate} />
    </div>
  );
};

export default Index;
