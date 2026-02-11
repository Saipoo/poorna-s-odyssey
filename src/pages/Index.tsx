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
      <Navbar onSimulate={handleSimulate} />
      <HeroSection />
      <SummarySection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <SimulateMode active={simulating} onStop={handleStopSimulate} />
    </div>
  );
};

export default Index;
