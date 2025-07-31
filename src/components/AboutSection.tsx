import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Brain, TrendingUp, Zap } from "lucide-react";

const skills = [
  { name: "Python", level: 95, icon: Code2, color: "primary" },
  { name: "Machine Learning", level: 90, icon: Brain, color: "secondary" },
  { name: "SQL & Databases", level: 88, icon: Database, color: "accent" },
  { name: "Data Visualization", level: 92, icon: BarChart3, color: "primary" },
  { name: "Statistical Analysis", level: 85, icon: TrendingUp, color: "secondary" },
  { name: "Deep Learning", level: 80, icon: Zap, color: "accent" }
];

const technologies = [
  "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau",
  "Apache Spark", "Docker", "Git", "AWS", "Azure", "Jupyter"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data scientist with 5+ years of experience in transforming 
            raw data into strategic business insights through advanced analytics and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my career as a software engineer, but found my true passion 
                  in the intersection of mathematics, statistics, and technology. 
                  The ability to uncover hidden patterns in data and predict future 
                  trends fascinated me.
                </p>
                <p>
                  Over the years, I've worked on diverse projects from predictive 
                  analytics for e-commerce to computer vision for healthcare, 
                  always pushing the boundaries of what's possible with data.
                </p>
                <p>
                  Today, I specialize in building end-to-end ML pipelines and 
                  creating data-driven solutions that drive real business impact.
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