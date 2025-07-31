import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Database, TrendingUp, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const FloatingParticle = ({ delay }: { delay: number }) => (
  <div 
    className="data-particle"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 8 + 4}px`,
      height: `${Math.random() * 8 + 4}px`,
      animationDelay: `${delay}s`
    }}
  />
);

export const HeroSection = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Glow effects */}
      <div className="hero-glow absolute top-1/4 left-1/4 w-96 h-96 z-10" />
      <div className="hero-glow absolute bottom-1/4 right-1/4 w-80 h-80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Data <span className="gradient-text">Scientist</span>
            <br />
            <span className="text-glow">Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights through 
            <span className="text-primary"> machine learning</span>, 
            <span className="text-secondary"> visualization</span>, and 
            <span className="text-accent"> statistical analysis</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-sm">Big Data</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Brain className="w-5 h-5 text-secondary" />
              <span className="text-sm">Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm">Analytics</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-primary animate-glow"
              onClick={scrollToProjects}
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};