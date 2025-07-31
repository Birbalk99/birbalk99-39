import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-background-secondary py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Data Scientist Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
