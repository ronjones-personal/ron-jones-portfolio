import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ExecutiveSummarySection } from "@/components/ExecutiveSummarySection";
import { LeadershipToggleSection } from "@/components/LeadershipToggleSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ConsultingSection } from "@/components/ConsultingSection";
import { TechnicalSkillsSection } from "@/components/TechnicalSkillsSection";
import { BusinessSkillsSection } from "@/components/BusinessSkillsSection";
import { HobbiesSection } from "@/components/HobbiesSection";
import { DogsSection } from "@/components/DogsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "credibility",
        "summary",
        "leadership",
        "experience",
        "consulting", 
        "skills",
        "hobbies",
        "dogs",
        "contact"
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <CredibilitySection />
        <ExecutiveSummarySection />
        <LeadershipToggleSection />
        <ExperienceSection />
        <ConsultingSection />
        <TechnicalSkillsSection />
        <BusinessSkillsSection />
        <HobbiesSection />
        <DogsSection />
        <ContactSection />
      </main>
    </div>
  );
}
