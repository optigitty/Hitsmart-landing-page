import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { OpportunitySection } from "@/components/OpportunitySection";

export default function HomePage() {
  return (
    <main className="bg-bg-primary text-text-primary">
      <HeroSection />
      <OpportunitySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
