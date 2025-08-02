import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Brain, TrendingUp, Zap } from "lucide-react";

const skills = [
  { name: "Artificial Intelligence", level: 96, icon: Brain, color: "primary" },
  { name: "Generative AI", level: 95, icon: Zap, color: "secondary" },
  { name: "Large Language Models (LLMs)", level: 94, icon: BarChart3, color: "accent" },
  { name: "Prompt Engineering", level: 92, icon: Code2, color: "primary" },


  { name: "Machine Learning", level: 90, icon: Brain, color: "secondary" },
  { name: "Deep Learning", level: 88, icon: Zap, color: "accent" },
  { name: "Natural Language Processing (NLP)", level: 87, icon: Code2, color: "primary" },


  { name: "Statistical Analysis", level: 85, icon: TrendingUp, color: "secondary" },
  { name: "Data Visualization", level: 85, icon: BarChart3, color: "accent" },
  { name: "SQL & Databases", level: 82, icon: Database, color: "primary" },

  { name: "Python", level: 95, icon: Code2, color: "secondary" },
  { name: "FastAPI / Flask / Django", level: 88, icon: Code2, color: "accent" },
  { name: "Vector Search (FAISS, MongoDB)", level: 84, icon: Database, color: "primary" },
  { name: "Cloud Platforms (AWS, Azure, GCP)", level: 80, icon: Database, color: "secondary" },
  { name: "Docker & Containerization", level: 78, icon: Zap, color: "accent" },
  { name: "MLOps & LLMOps", level: 75, icon: TrendingUp, color: "primary" },

  { name: "Data Engineering", level: 85, icon: Database, color: "secondary" },
  { name: "Big Data Technologies (Spark)", level: 80, icon: BarChart3, color: "accent" },
  { name: "Data Warehousing", level: 78, icon: Database, color: "primary" },
  { name: "ETL Pipelines", level: 76, icon: Database, color: "secondary" },
  { name: "AWS / Azure / GCP", level: 80, icon: Database, color: "secondary" },
  { name: "MLOps & LLMOps", level: 78, icon: TrendingUp, color: "accent" }
];


const technologies = [
  // 🧑‍💻 Programming & Scripting
  "Python", "SQL", "R",

  // 📚 AI/ML/DL Libraries
  "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost",

  // 🧠 Generative AI & LLMs
  "LangChain", "Llama", "OpenAI API", "Hugging Face", "LLMOPS", "Prompt Engineering",

  // 📊 Data Analysis & Visualization
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Excel",

  // 🚀 Backend & APIs
  "FastAPI", "Flask", "Django", "WebSockets", "Celery", "Redis",

  // 🛢️ Databases & Vector Stores
  "MongoDB", "FAISS", "Pinecone", "ChromaDB", "SQL", "AWS DocumentDB",

  // ☁️ Cloud & DevOps
  "AWS", "Azure", "GCP", "AWS Bedrock", "AWS Lambda", "Docker", "Git",

  // 📓 Notebooks & IDEs
  "Jupyter", "Google Colab", "VS Code", "Replit"
];


export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-7xl mx-auto text-center leading-relaxed px-4">
            I’m Birbal Kumar, a passionate and forward-thinking individual with a strong background in computer science and a deep interest in artificial intelligence. 
            Over the past few years, I’ve worked across diverse organizations, where I’ve had the opportunity to lead impactful projects and contribute to AI-driven innovation. 
            My journey has been shaped by curiosity, collaboration, and a desire to solve real-world problems that drive value and make a difference.
            I take pride in building thoughtful solutions that are practical, meaningful, and aligned with both user needs and business goals. 
            With each project, I aim to grow not just as a professional, but as a lifelong learner committed to excellence and creative exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify max-w-7xl mx-auto">
                <p>
                  My journey into the world of technology started with a deep interest in problem-solving and systems thinking.
                  I completed my Bachelor's in Computer Science, where I developed a strong foundation in algorithms, logic, and programming.
                  This academic background gave me the confidence to explore various domains, but it was during my early career that I truly discovered my passion for data-driven innovation.
                </p>
                <p>
                  I began my professional journey as a Product Developer at Camp Automation, where I contributed to building intuitive dashboards and enhancing user experience.
                  It was here that I started exploring data science techniques, using clustering algorithms and analytics to improve Facebook ad performance and customer segmentation.
                  These early experiences sparked my interest in machine learning and its real-world impact.
                </p>
                <p>
                  To pursue this path further, I transitioned into a Data Scientist role at Pai Solutions, where I was entrusted with leading Generative AI projects.
                  I developed intelligent support chatbots using OpenAI GPT and LLaMA models, and deployed them on scalable cloud infrastructure like AWS.
                  I also worked on intelligent systems that could extract and process visual content from PDFs and videos — a unique challenge that helped me combine AI with media understanding.
                </p>
                <p>
                  My desire to push the limits of AI innovation led me to Metadrob, where I took on end-to-end ownership of AI-powered assistants for voice and web.
                  These projects involved real-time interaction design using FastAPI, WebSockets, and Redis, and deep integration of large language models like GPT-4o and LLaMA 3.
                  I also architected RAG systems using FAISS and MongoDB, building robust pipelines for contextual understanding and fast response generation.
                </p>
                <p>
                  Over time, my journey has evolved from writing code to designing complete systems — from simple data workflows to multi-modal, real-time, AI-powered experiences.
                  What keeps me motivated is the blend of curiosity, creativity, and responsibility that comes with building intelligent solutions that serve people meaningfully.
                  I believe that the real power of technology lies not just in automation, but in augmentation — enhancing human capability through thoughtful design.
                </p>
                <p>
                  Today, I continue to explore new frontiers in Generative AI, LLMs, and data-centric architectures, while staying grounded in clean problem-solving and a user-first mindset.
                  I see every project as an opportunity to learn something new, collaborate meaningfully, and leave behind systems that are both impactful and elegant.
                  This is not just my career path — it's a journey I care deeply about.
                </p>
              </div>
            </Card>

            {/* Technology Stack */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 text-${skill.color}`} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            animationDelay: `${skills.indexOf(skill) * 0.2}s`,
                            '--progress': `${skill.level}%`
                          } as React.CSSProperties & { '--progress': string }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};