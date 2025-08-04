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
        <footer className="w-full bg-[#0F172A] border-t border-gray-800 px-4 py-5">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2">

            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <img
                src="/logo.gif"
                alt="The Birbal Studio Logo"
                className="w-7 h-7 rounded-full"
              />
              <span className="text-cyan-400 font-semibold text-lg">The Birbal Studio</span>
            </div>

            {/* Single-line Tagline */}
            <p className="text-sm text-gray-400 text-center leading-none">
              Building the future with AI, Generative Intelligence and Deep Learning crafted by Birbal Kumar.
            </p>

            {/* Social GIF Icons */}
            <div className="flex space-x-4 pt-1">
              <a href="https://www.linkedin.com/in/birbalk99" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/linkedin.gif"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              <a href="https://github.com/Birbalk99" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/github.gif"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>
              <a href="https://twitter.com/birbalk99" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/twitter-bird.gif"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-600 pt-1">
              © 2025 <span className="text-cyan-400">The Birbal Studio</span>. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </Layout>
  );
};

export default Index;
