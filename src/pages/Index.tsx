import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© 2026 Shoaib Akhtar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
