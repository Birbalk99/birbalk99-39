import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Database, TrendingUp, Brain } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
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
const badgeList = [
  { label: "Generative AI", icon: "artificial-intelligence.gif"},
  { label: "LLMs", icon: "llm.gif" },
  { label: "LangChain", icon: "langchain.png" },
  { label: "LangGraph", icon: "langgraph.svg" },
  { label: "CrewAI", icon: "crewai.svg" },
  { label: "AutoGen", icon: "autogen.gif" },
  { label: "Prompt Engineering", icon: "tools.gif" },
  { label: "Agentic Workflow", icon: "workflow.gif" },
  { label: "RAG", icon: "rag.gif" },
  { label: "FastAPI", icon: "fastapi.gif" },
  { label: "Celery", icon: "celery.gif" },
  { label: "Redis", icon: "redis.gif" },
  { label: "MongoDB", icon: "mongo.gif" },
  { label: "FAISS", icon: "faiss.gif" },
  { label: "ChromaDB", icon: "chromadb.gif" },
  { label: "Pinecone", icon: "pinecone.gif" },
  { label: "Neo4j", icon: "neo4j.gif" },
  { label: "Graph Databases", icon: "graphdb.gif" },
  { label: "Computer Vision", icon: "cv.gif" },
  { label: "NLP", icon: "nlp.gif" },
  { label: "OpenCV", icon: "opencv.gif" },
  { label: "TTS / STT", icon: "tts.gif" },
  { label: "WebSockets", icon: "websockets.gif" }
];


// Helper to calculate experience
function getExperienceString(startYear: number, startMonth: number) {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  months = months % 12;
  if (years > 0 && months > 0) return `${years} years and ${months} months`;
  if (years > 0) return `${years} years`;
  return `${months} months`;
}

export const HeroSection = () => {
  const [particles, setParticles] = useState<number[]>([]);
  const [experience, setExperience] = useState("");

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
    // Set your start date here (Feb 2022)
    setExperience(getExperienceString(2022, 2));
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           
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
            Hi, I'm <span className="gradient-text">Birbal Kumar</span>
            <br />
            <span className="text-glow">Data Scientist</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 mx-auto leading-relaxed min-h-[80px] w-full max-w-8xl text-justify">
            <Typewriter
              words={[
                `Data Scientist with over ${experience} of experience, specializing in AI, Generative AI, LLMs, and Data Science. I have contributed to impactful projects across multiple organizations, leveraging a strong computer science background to solve real-world problems.`
              ]}
              loop={1}
              typeSpeed={15}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 mx-auto leading-relaxed min-h-[80px] w-full max-w-8xl text-justify">
            Passionate about transforming complex data into actionable insights using
            <span className="text-primary"> Artificial Intelligence</span>,
            <span className="text-secondary"> Generative AI</span>,
            <span className="text-accent"> Machine Learning</span>,
            <span className="text-primary"> Deep Learning</span>,
            <span className="text-secondary"> Computer Vision</span>, and
            <span className="text-accent"> advanced analytics</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {badgeList.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform"
              >
                <img
                  src={`/icons/${icon}`}
                  alt={label}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-primary animate-glow"
              onClick={scrollToProjects}>
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/statics/Resume.pdf" download>Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToProjects}
        role="button"
        tabIndex={0}
        aria-label="Scroll to projects"
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") scrollToProjects();
        }}
      >
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};