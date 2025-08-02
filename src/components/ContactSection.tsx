import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "birbalk99@gmail.com",
    href: "mailto:birbalk99@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7220972090",
    href: "tel:+917220972090"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.app.goo.gl/varL8ZHgcq4SFGAW8"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/birbalk99/",
    color: "text-blue-400"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Birbalk99",
    color: "text-primary"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/birbalkr99",
    color: "text-blue-400"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating on data science projects or discussing 
            opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-background-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  placeholder="Project collaboration" 
                  className="bg-background-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-background-secondary border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-primary animate-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center hover:scale-110 transition-transform ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Available for</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-time opportunities</li>
                <li>• Consulting projects</li>
                <li>• Research collaborations</li>
                <li>• Speaking engagements</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};