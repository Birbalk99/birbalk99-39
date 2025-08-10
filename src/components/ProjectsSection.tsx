// ProjectsSection.jsx
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

/* ---------- sample data ---------- */
const projects = [
  {
    id: 1,
    title: "Telephone Conversation Agent",
    description: "Engineered an LLM powered voice assistant capable of real-time conversations over Twilio calls, leveraging multi-modal data sources for contextual responses. Integrated OpenAI GPT-4o for intelligent response generation and AWS Polly & Google TTS for human like, high fidelity speech synthesis. Designed a scalable event driven architecture using FastAPI + WebSocket, enabling low latency, bidirectional Twilio call streaming. Optimized asynchronous task execution with Celery & Redis, ensuring parallel processing of large datasets and real time status tracking. Architected a distributed vector storage system using FAISS + MongoDB, facilitating fast semantic retrieval across large knowledge bases.",
    image: "/projects/Tel_Agent_LLD_v1.1.jpg",
    technologies: [ "LLM", "Generative AI", "RAG", "FAISS", "LangChain", "OpenAI GPT-4o mini", "QLoRa", "WebSocket", "Twilio Stream API","AWS Polly", "Prompt Engineering", "MongoDB", "Redis", "Celery", "Async Processing", "Parallel Computing"    ],
    category: "Generative AI Agents",
    metrics: [
        "Real-time Conversation",
        "Human Like Voice",
        "Both Gender Voice Support",
        "Multiple Language Support",
        "Customizable per Business Use Case",
        "Inbound & Outbound Call Support",
        "Lead Generation",
        "Customer Support",
        "Sub-500ms Latency",
        "Distributed Vector Search",
        "Handles 1000+ Concurrent Calls"
    ],
    github: "#",
    demo: "#",
    privateRepo: true,
    privateDemo: true
  },
  {
    id: 2,
    title: "Knowledge Based Chatbot",
    description:
      "Developed an LLM-powered knowledge retrieval chatbot tailored for technicians, providing instant access to site manuals, SOPs and troubleshooting guides. Leveraged LangChain and AWS DocumentDB for fast, context-aware information retrieval. Integrated multi-turn conversational memory for follow-up queries and improved resolution accuracy, significantly reducing troubleshooting time and increasing on-site productivity.",
    image: "/projects/High_level_arc.png",
    technologies: [
      "LLM",
      "Generative AI",
      "LangChain",
      "AWS DocumentDB",
      "LLaMA",
      "Ollama",
      "Prompt Engineering",
      "Vector Search"
    ],
    category: "Generative AI RAG Chatbot",
    metrics: [
      "Instant Access to Manuals",
      "Reduced Troubleshooting Time by 60%",
      "Context-Aware Responses",
      "Multi-turn Conversation Support",
      "Offline Knowledge Base Integration",
      "Customizable for Different Sites",
      "Supports Technical & Operational Queries"
    ],
    github: "#",
    demo: "#",
    privateRepo: true,
    privateDemo: true
  },
  {
    id: 3,
    title: "Telephone Call Feedback Sentiment Analysis",
    description:
      "Built a real-time NLP-based sentiment analysis system to process and classify customer call feedback, delivering actionable insights to product and service teams. Leveraged advanced text preprocessing, word embeddings (Word2Vec, TF-IDF), and ensemble classification models with hyperparameter tuning to maximize prediction accuracy. Integrated insights into customer experience dashboards, enabling proactive retention strategies and targeted service improvements.",
    image: "/projects/Tel_Agent_LLD_v1.1.jpg",
    technologies: [
      "Sentiment Analysis",
      "Natural Language Processing (NLP)",
      "Text Preprocessing",
      "Word2Vec",
      "TF-IDF",
      "Classification Models",
      "XGBoost",
      "Hyperparameter Tuning",
      "Grid Search",
      "Model Evaluation"
    ],
    category: "Sentiment Analysis & Customer Experience",
    metrics: [
      "94% Sentiment Classification Accuracy",
      "15% Reduction in Customer Churn",
      "Real-time Feedback Processing",
      "Integrated CX Dashboard",
      "Supports Multiple Languages",
      "Automatic Model Retraining"
    ],
    github: "#",
    demo: "#",
    privateRepo: true,
    privateDemo: true
  },
  {
    id: 4,
    title: "Advanced Image Processing and Analysis System",
    description:
      "Engineered a high-performance computer vision system integrating advanced image preprocessing, edge detection, color extraction and object identification. Enhanced accessibility for color-blind users by analyzing chart colors (e.g., pie charts) using CCA guidelines, detecting near-similar colors and adding adaptive borders to improve visual distinction. Leveraged OpenCV, machine learning and custom algorithms to automate tasks such as background removal, text extraction (OCR), color profiling, and contrast ratio evaluation. Implemented a multi-step pipeline with gradient-based edge case handling, achieving precise object segmentation and detailed visual data analysis for industrial, research and accessibility-focused applications.",
    image: "/projects/Analysis_System.jpg",
    technologies: [
      "Computer Vision",
      "Image Processing",
      "Color Detection",
      "Edge Detection",
      "Text Recognition (OCR)",
      "OpenCV",
      "Data Visualization",
      "Algorithm Optimization",
      "Machine Learning",
      "Accessibility (Color Blind Support)",
      "CCA Compliance"
    ],
    category: "Computer Vision & Accessibility",
    metrics: [
      "98% Object Segmentation Accuracy",
      "Sub-200ms Processing Latency",
      "Improved Chart Readability for Color-blind Users",
      "CCA Compliant Color Contrast Analysis",
      "Supports Batch & Real-time Processing",
      "Handles Low-light & High-noise Images",
      "Customizable Color & Edge Detection Profiles"
    ],
    github: "#",
    demo: "#",
    privateRepo: true,
    privateDemo: true
  }
];

"use client";

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleReadMore = (id) => {
    setExpandedIds((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 16;
    const rotateX = -y * 12;
    el.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.03,1.03,1.03)`;
    el.style.transition = "transform 0.08s linear";
    el.style.setProperty("--mouse-x", `${x}`);
    el.style.setProperty("--mouse-y", `${y}`);
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = "";
    el.style.transition = "transform 0.4s cubic-bezier(.2,.9,.2,1)";
    el.style.setProperty("--mouse-x", `0`);
    el.style.setProperty("--mouse-y", `0`);
  };

  const renderCard = (project, i) => (
    <div key={project.id} className="card-3d-container">
      <Card
        className="card-3d-body group overflow-hidden shadow-lg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          animation: `fadeIn 0.6s ease-out forwards`,
          animationDelay: `${i * 0.12}s`,
          opacity: 0,
        }}
      >
        <div
          className="aspect-video relative overflow-hidden rounded-t-md"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            {project.category}
          </Badge>
          <div className="absolute inset-0 pointer-events-none" />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {expandedIds.has(project.id)
              ? project.description
              : project.description.length > 220
              ? project.description.slice(0, 220) + "..."
              : project.description}
            {project.description.length > 220 && (
              <button
                onClick={() => toggleReadMore(project.id)}
                className="ml-2 text-primary text-sm hover:underline"
              >
                {expandedIds.has(project.id) ? "Show less" : "Read more"}
              </button>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.metrics?.map((m) => (
              <Badge key={m} variant="outline" className="text-xs border-accent text-accent">
                {m}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory">
            {project.technologies.map((t, idx) => (
              <Badge
                key={`${t}-${idx}`}
                variant="secondary"
                className="text-xs bg-secondary/20 text-secondary whitespace-nowrap snap-start"
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            {project.privateDemo ? (
              <Button size="sm" disabled className="w-full bg-primary hover:bg-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" /> Demo Private
              </Button>
            ) : (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </Button>
              </a>
            )}
            {project.privateRepo ? (
              <Button
                size="sm"
                variant="outline"
                disabled
                className="opacity-60 cursor-not-allowed"
              >
                <Github className="w-4 h-4 mr-2" /> Private
              </Button>
            ) : (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" /> Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of my work across <strong>AI, Machine Learning, Deep Learning, NLP</strong> and{" "}
            <strong>Computer Vision</strong>. Click View All to see the rest right below.
          </p>
        </div>

        {/* Always show first 4 */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, i) => renderCard(project, i))}
        </div>

        {/* If showAll -> append the rest */}
        {showAll && (
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {projects.slice(4).map((project, i) => renderCard(project, i + 4))}
          </div>
        )}

        {/* Toggle button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? "View Less" : `View All Projects (${projects.length})`}
          </Button>
        </div>
      </div>

      {/* styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-3d-container { perspective: 1200px; }
        .card-3d-body { transition: box-shadow 0.25s ease, transform 0.25s ease; border-radius: 12px; }
        .card-3d-body:hover { box-shadow: 0 18px 40px rgba(12, 19, 35, 0.12), 0 6px 18px rgba(12,19,35,0.06); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
