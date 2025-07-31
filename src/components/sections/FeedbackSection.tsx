import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Star, 
  MessageCircle, 
  User, 
  Calendar,
  ThumbsUp,
  Quote
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    rating: 5,
    date: "2024-01-20",
    feedback: "Exceptional work on our ML recommendation system. The model accuracy exceeded our expectations and the implementation was seamless. Highly recommend for any data science project!",
    likes: 12,
    project: "Recommendation Engine"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    rating: 5,
    date: "2024-01-15",
    feedback: "Outstanding data pipeline development. The solution is robust, scalable, and well-documented. Our data processing time improved by 300%. Professional and efficient work.",
    likes: 8,
    project: "Data Pipeline"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Analytics Director",
    company: "Growth Metrics",
    rating: 5,
    date: "2024-01-10",
    feedback: "The dashboard and insights provided transformed how we make decisions. Clear visualizations and actionable recommendations that directly impacted our business growth.",
    likes: 15,
    project: "Analytics Dashboard"
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "AI Startup",
    rating: 5,
    date: "2024-01-05",
    feedback: "Delivered a complex NLP solution on time and within budget. The model performance is excellent and the code quality is top-notch. Will definitely work together again.",
    likes: 6,
    project: "NLP Solution"
  }
];

export const FeedbackSection = () => {
  const [newFeedback, setNewFeedback] = useState({
    name: '',
    email: '',
    company: '',
    rating: 5,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', newFeedback);
    // Reset form
    setNewFeedback({
      name: '',
      email: '',
      company: '',
      rating: 5,
      message: ''
    });
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-muted-foreground'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => setNewFeedback(prev => ({ ...prev, rating: star })) : undefined}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Client Feedback
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          What clients say about working with me. Your feedback helps me improve and deliver better results.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-primary" />
            Testimonials
          </h2>

          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-6 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-subtle"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {testimonial.project}
                </Badge>
              </div>

              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-4">
                {renderStars(testimonial.rating)}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(testimonial.date)}</span>
                </div>
              </div>

              {/* Feedback */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                <p className="text-muted-foreground italic ml-4">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Likes */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{testimonial.likes}</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Leave Feedback
          </h2>

          <Card className="p-6 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    value={newFeedback.name}
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={newFeedback.email}
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={newFeedback.company}
                  onChange={(e) => setNewFeedback(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company name (optional)"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium mb-2">Rating *</label>
                <div className="flex items-center gap-2">
                  {renderStars(newFeedback.rating, true)}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({newFeedback.rating} star{newFeedback.rating !== 1 ? 's' : ''})
                  </span>
                </div>
              </div>

              {/* Feedback Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Feedback *</label>
                <Textarea
                  value={newFeedback.message}
                  onChange={(e) => setNewFeedback(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Share your experience working with me..."
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Submit Feedback
              </button>
            </form>
          </Card>

          {/* Additional Info */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="font-semibold mb-2 text-primary">Why Your Feedback Matters</h3>
            <p className="text-sm text-muted-foreground">
              Your honest feedback helps me improve my services and assists future clients in making informed decisions. 
              All feedback is greatly appreciated and helps build trust in our professional community.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};