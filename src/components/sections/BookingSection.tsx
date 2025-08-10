import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  Video, 
  MessageSquare, 
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building,
  Target
} from 'lucide-react';

const meetingTypes = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    duration: '30 minutes',
    price: 'Free',
    description: 'Discuss your project requirements and explore how I can help.',
    features: [
      'Project scope discussion',
      'Technical feasibility assessment',
      'Timeline and budget estimation',
      'Q&A session'
    ],
    popular: true
  },
  {
    id: 'technical',
    title: 'Technical Deep Dive',
    duration: '60 minutes',
    price: '$150',
    description: 'In-depth technical discussion about ML models, data architecture, or implementation.',
    features: [
      'Detailed technical review',
      'Architecture recommendations',
      'Code review and feedback',
      'Best practices guidance'
    ],
    popular: false
  },
  {
    id: 'strategy',
    title: 'Data Strategy Session',
    duration: '90 minutes',
    price: '$200',
    description: 'Strategic guidance on data initiatives, roadmap planning, and organizational alignment.',
    features: [
      'Data maturity assessment',
      'Strategic roadmap creation',
      'Technology stack planning',
      'Team structure recommendations'
    ],
    popular: false
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
];

export const BookingSection = () => {
  const [selectedType, setSelectedType] = useState<string>('consultation');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', {
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
      ...bookingData
    });
    // Handle booking submission
  };

  const selectedMeetingType = meetingTypes.find(type => type.id === selectedType);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Book a Meeting
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Schedule a call to discuss your data science needs. Choose the meeting type that best fits your requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Meeting Types */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Choose Meeting Type</h2>
          
          <div className="space-y-4">
            {meetingTypes.map((type, index) => (
              <Card
                key={type.id}
                className={`p-6 cursor-pointer transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-subtle ${
                  selectedType === type.id ? 'ring-2 ring-primary/20 border-primary/50' : ''
                }`}
                onClick={() => setSelectedType(type.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedType === type.id ? 'bg-primary/20' : 'bg-muted/50'
                    }`}>
                      {type.id === 'consultation' && <MessageSquare className="w-5 h-5 text-primary" />}
                      {type.id === 'technical' && <Video className="w-5 h-5 text-primary" />}
                      {type.id === 'strategy' && <Target className="w-5 h-5 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{type.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{type.duration}</span>
                        </div>
                        <span className="font-medium text-primary">{type.price}</span>
                      </div>
                    </div>
                  </div>
                  {type.popular && (
                    <Badge className="bg-gradient-primary text-white">
                      Popular
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{type.description}</p>

                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          {selectedType && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold">Booking Details</h3>
              
              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    value={bookingData.name}
                    onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    value={bookingData.phone}
                    onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    value={bookingData.company}
                    onChange={(e) => setBookingData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium mb-2">Project Description *</label>
                <Textarea
                  value={bookingData.projectDescription}
                  onChange={(e) => setBookingData(prev => ({ ...prev, projectDescription: e.target.value }))}
                  placeholder="Tell me about your project or challenge..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Goals & Expectations</label>
                <Textarea
                  value={bookingData.goals}
                  onChange={(e) => setBookingData(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="What do you hope to achieve from this meeting?"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Book Meeting
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Meeting Summary */}
          {selectedMeetingType && (
            <Card className="p-6 border-border/50 bg-gradient-card">
              <h3 className="font-semibold mb-4 text-primary">Meeting Summary</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Type</div>
                  <div className="font-medium">{selectedMeetingType.title}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-medium">{selectedMeetingType.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Price</div>
                  <div className="font-medium text-primary">{selectedMeetingType.price}</div>
                </div>
                {selectedDate && selectedTime && (
                  <div>
                    <div className="text-sm text-muted-foreground">Scheduled</div>
                    <div className="font-medium">
                      {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Contact Info */}
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>birbalk99@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-7220972090</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Fri, 9AM-6PM IST</span>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold mb-4">Quick FAQ</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium text-primary">How do I prepare?</div>
                <p className="text-muted-foreground">Have your project details, data samples, and specific questions ready.</p>
              </div>
              <div>
                <div className="font-medium text-primary">Can I reschedule?</div>
                <p className="text-muted-foreground">Yes, with 24 hours notice. Contact me to reschedule.</p>
              </div>
              <div>
                <div className="font-medium text-primary">What platform?</div>
                <p className="text-muted-foreground">We'll use Google Meet or Zoom, link provided after booking.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};