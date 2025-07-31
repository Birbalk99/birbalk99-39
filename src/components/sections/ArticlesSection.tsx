import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Advanced Machine Learning Techniques for Time Series Forecasting",
    excerpt: "Exploring LSTM, Prophet, and state-of-the-art models for accurate time series predictions in real-world scenarios.",
    category: "Machine Learning",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    views: 1240,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Building Scalable Data Pipelines with Python and Apache Airflow",
    excerpt: "A comprehensive guide to creating robust, maintainable data pipelines that scale with your business needs.",
    category: "Data Engineering",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    views: 856,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Data Visualization Best Practices: From Insight to Impact",
    excerpt: "Learn how to create compelling visualizations that tell a story and drive decision-making in your organization.",
    category: "Visualization",
    readTime: "6 min read",
    publishDate: "2024-01-05",
    views: 923,
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Deep Dive into Neural Networks: Understanding Transformer Architecture",
    excerpt: "Demystifying the transformer architecture that powers modern AI applications like GPT and BERT.",
    category: "Deep Learning",
    readTime: "15 min read",
    publishDate: "2024-01-01",
    views: 1567,
    image: "/api/placeholder/400/250"
  }
];

const categoryColors = {
  "Machine Learning": "bg-primary/20 text-primary border-primary/30",
  "Data Engineering": "bg-accent/20 text-accent border-accent/30",
  "Visualization": "bg-secondary/20 text-secondary border-secondary/30",
  "Deep Learning": "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border-primary/30"
};

export const ArticlesSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Latest Articles
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on data science, machine learning, and everything in between.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Card 
            key={article.id}
            className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Article Image */}
            <div className="aspect-video bg-gradient-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute bottom-4 left-4">
                <Badge 
                  variant="secondary"
                  className={categoryColors[article.category as keyof typeof categoryColors]}
                >
                  {article.category}
                </Badge>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center text-primary group-hover:text-primary-glow transition-colors">
                <span className="font-medium">Read Article</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
          Load More Articles
        </button>
      </div>
    </div>
  );
};