// import { Navigation } from "@/components/Navigation";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/AboutSection";
// import { ProjectsSection } from "@/components/ProjectsSection";
// import { ContactSection } from "@/components/ContactSection";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <main>
//         <div id="home">
//           <HeroSection />
//         </div>
//         <AboutSection />
//         <ProjectsSection />
//         <ContactSection />
//       </main>
      
//       {/* Footer */}
//       <footer className="bg-background-secondary py-8 text-center border-t border-border">
//         <p className="text-muted-foreground">
//           © 2025 The Birbal Studio.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Index;
// src/pages/Index.tsx
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import Layout from "@/components/Layout"; // <-- import layout

const Index = () => {
  return (
    <Layout>
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
          <p className="text-muted-foreground">© 2025 The Birbal Studio.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
