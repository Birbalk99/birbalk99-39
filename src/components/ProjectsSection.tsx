import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Brain, Eye, ShoppingCart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description: "Real-time dashboard for predicting customer churn using ensemble machine learning models. Achieved 94% accuracy with Random Forest and XGBoost.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Scikit-learn", "Plotly", "Streamlit", "PostgreSQL"],
    category: "Machine Learning",
    icon: TrendingUp,
    metrics: ["94% Accuracy", "15% Churn Reduction", "Real-time Processing"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Computer Vision for Medical Imaging",
    description: "Deep learning model for automated detection of anomalies in X-ray images. Implemented CNN architecture with transfer learning.",
    image: "/api/placeholder/400/250",
    technologies: ["TensorFlow", "Keras", "OpenCV", "Flask", "Docker"],
    category: "Deep Learning",
    icon: Brain,
    metrics: ["96% Sensitivity", "92% Specificity", "0.2s Processing"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Market Sentiment Analysis",
    description: "NLP pipeline analyzing social media sentiment to predict stock price movements. Real-time data processing with Apache Kafka.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "NLTK", "Apache Kafka", "Redis", "AWS"],
    category: "Natural Language Processing",
    icon: Eye,
    metrics: ["78% Prediction Accuracy", "100K tweets/hour", "Real-time Analysis"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "E-commerce Recommendation Engine",
    description: "Collaborative filtering system with content-based recommendations. Increased user engagement by 35% and sales by 28%.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Surprise", "FastAPI", "MongoDB", "React"],
    category: "Recommendation Systems",
    icon: ShoppingCart,
    metrics: ["35% Engagement", "28% Sales Increase", "Sub-second Response"],
    github: "#",
    demo: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my data science projects that demonstrate expertise in 
            machine learning, deep learning, and data visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id} 
                className="project-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-card relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <Badge 
                    className="absolute top-4 left-4 bg-primary text-primary-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <Badge 
                        key={metric} 
                        variant="outline" 
                        className="text-xs border-accent text-accent"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-secondary/20 text-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-glow"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};