import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, MessageSquare, Calendar, Briefcase } from "lucide-react";
import { BoxTransition, useBoxTransition } from './BoxTransition';
import { ArticlesSection } from './sections/ArticlesSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { BookingSection } from './sections/BookingSection';
import { ServicesSection } from './sections/ServicesSection';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const boxItems = [
  { name: 'Articles', icon: BookOpen, component: ArticlesSection },
  { name: 'Services', icon: Briefcase, component: ServicesSection },
  { name: 'Feedback', icon: MessageSquare, component: FeedbackSection },
  { name: 'Book Meeting', icon: Calendar, component: BookingSection },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const { isOpen: isBoxOpen, triggerElement, openBox, closeBox } = useBoxTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleBoxOpen = (sectionName: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentSection(sectionName);
    openBox(event.currentTarget);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-subtle" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text">
            DataSci Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            
            {/* Box Items */}
            {boxItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleBoxOpen(item.name, e)}
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-primary transition-colors relative group rounded-lg"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
            
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Box Items */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="space-y-2">
                  {boxItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleBoxOpen(item.name, e);
                      }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors w-full text-left"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="px-3 pt-2">
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Box Transition Modal */}
      <BoxTransition
        isOpen={isBoxOpen}
        onClose={closeBox}
        triggerElement={triggerElement}
        title={currentSection}
      >
        {currentSection && (() => {
          const selectedItem = boxItems.find(item => item.name === currentSection);
          if (selectedItem) {
            const Component = selectedItem.component;
            return <Component />;
          }
          return null;
        })()}
      </BoxTransition>
    </nav>
  );
};