import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Code, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Machine Learning Solutions",
    description: "Custom ML models for prediction, classification, and recommendation systems tailored to your business needs.",
    icon: Brain,
    price: "Starting at $2,500",
    duration: "2-4 weeks",
    features: [
      "Custom algorithm development",
      "Model training & optimization",
      "Performance monitoring setup",
      "Documentation & handover"
    ],
    popular: true
  },
  {
    id: 2,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights with comprehensive analysis and visualization.",
    icon: BarChart3,
    price: "Starting at $1,500",
    duration: "1-3 weeks",
    features: [
      "Exploratory data analysis",
      "Statistical modeling",
      "Interactive dashboards",
      "Business recommendations"
    ],
    popular: false
  },
  {
    id: 3,
    title: "Data Pipeline Development",
    description: "Scalable data pipelines for ETL processes, real-time streaming, and data warehouse management.",
    icon: Database,
    price: "Starting at $3,000",
    duration: "3-6 weeks",
    features: [
      "ETL pipeline design",
      "Real-time data streaming",
      "Data quality monitoring",
      "Cloud infrastructure setup"
    ],
    popular: false
  },
  {
    id: 4,
    title: "AI Application Development",
    description: "End-to-end AI applications including NLP, computer vision, and conversational AI systems.",
    icon: Zap,
    price: "Starting at $4,000",
    duration: "4-8 weeks",
    features: [
      "Custom AI model integration",
      "API development",
      "User interface design",
      "Deployment & maintenance"
    ],
    popular: false
  },
  {
    id: 5,
    title: "Data Strategy Consulting",
    description: "Strategic guidance on data architecture, technology stack, and implementation roadmap.",
    icon: Target,
    price: "Starting at $1,000",
    duration: "1-2 weeks",
    features: [
      "Data maturity assessment",
      "Technology recommendations",
      "Implementation roadmap",
      "Team training guidance"
    ],
    popular: false
  },
  {
    id: 6,
    title: "Custom Data Tools",
    description: "Bespoke data analysis tools, automation scripts, and workflow optimization solutions.",
    icon: Code,
    price: "Starting at $800",
    duration: "1-2 weeks",
    features: [
      "Automation script development",
      "Custom analysis tools",
      "Workflow optimization",
      "Integration support"
    ],
    popular: false
  }
];

export const ServicesSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Freelance Services
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Professional data science and machine learning services to help your business leverage the power of data.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={service.id}
            className={`group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 relative ${
              service.popular ? 'ring-2 ring-primary/20' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="bg-gradient-primary text-white shadow-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="p-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing and Duration */}
              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center gap-1 text-primary font-medium">
                  <DollarSign className="w-4 h-4" />
                  <span>{service.price}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-primary text-white py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-12 p-8 bg-gradient-card rounded-xl border border-border/50">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Need Something Custom?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't see exactly what you're looking for? I'd love to discuss your specific requirements and create a tailored solution for your business.
        </p>
        <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};