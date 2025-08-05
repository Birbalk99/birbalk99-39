import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, MessageSquare, Calendar, Briefcase } from "lucide-react";
import { BoxTransition, useBoxTransition } from './BoxTransition';
import { ArticlesSection } from './sections/ArticlesSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { BookingSection } from './sections/BookingSection';
import { ServicesSection } from './sections/ServicesSection';
import { motion, AnimatePresence } from "framer-motion";
import { ResumePreview } from "@/components/ResumePreview";
import { useMemo } from "react";
import { CoolMode } from "@/components/magicui/cool-mode";



// --- NAV ITEMS ANIMATION VARIANTS ---
const navItemVariants = {
  initial: { y: -24, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.08 * i,
      type: "spring" as const,
      stiffness: 400,
      damping: 32,
    },
  }),
  exit: { y: -24, opacity: 0, transition: { duration: 0.2 } },
};

const navUnderlineVariants = {
  initial: { scaleX: 0, opacity: 0.6 },
  hover: { scaleX: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  active: {
    scaleX: 1,
    opacity: 1,
    boxShadow: "0 0 16px 4px var(--primary-glow)",
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const navBeamFlicker = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0.7, 1, 0.8, 1],
    boxShadow: [
      "0 0 0px 0px var(--primary-glow)",
      "0 0 16px 4px var(--primary-glow)",
      "0 0 8px 2px var(--primary-glow)",
      "0 0 20px 8px var(--primary-glow)",
      "0 0 12px 3px var(--primary-glow)",
      "0 0 0px 0px var(--primary-glow)",
    ],
    transition: { duration: 0.5, ease: "anticipate" },
  },
};

// --- BOX ITEMS ANIMATION VARIANTS ---
const boxDropVariants = {
  initial: {
    y: 0,
    scale: 1,
    borderRadius: "1rem",
    boxShadow: "0 2px 12px 0 var(--box-shadow)"
  },
  morph: {
    y: 120,
    scale: 0.7,
    borderRadius: "50%",
    boxShadow: "0 0 32px 8px var(--primary-glow)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  },
  open: {
    y: "40vh",
    scale: 1,
    borderRadius: "1.5rem",
    boxShadow: "0 12px 64px 0 var(--primary-glow)",
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
    },
  },
  splash: {
    y: "40vh",
    scale: 1.05,
    borderRadius: "2rem",
    boxShadow: "0 8px 48px 0 var(--box-shadow)",
    transition: {
      type: "spring",
      stiffness: 35,
      damping: 18,
    },
  }
};


const boxIconVariants = {
  initial: { rotate: 0, filter: "brightness(1)" },
  hover: {
    rotate: 18,
    filter: "brightness(1.3) drop-shadow(0 0 8px var(--primary-glow))",
    transition: { type: "spring" as const, stiffness: 300 }
  },
  tap: {
    rotate: -12,
    filter: "brightness(1.5)",
    transition: { type: "spring" as const, stiffness: 400 }
  }
};

const boxRippleVariants = {
  initial: { scale: 1, opacity: 0 },
  animate: {
    scale: 2.2,
    opacity: 0.18,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const  // ✅ Type-safe fix
    }
  }
}

const boxContentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, type: "spring" as const, stiffness: 120, damping: 18 },
  }),
};

// --- THEME TOGGLE ANIMATION ---
const themeIconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.8 },
  animate: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, rotate: 90, scale: 0.8, transition: { duration: 0.2 } }
};


// --- DATA ---
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

const logoOptions = [
  "/logo.gif",
  "/logo-1.gif",
  "/logo-3.gif"
];

// --- UTILS ---
function getActiveSection() {
  // Simple scrollspy logic (customize as needed)
  const sections = navItems.map(item => item.href.replace("#", ""));
  let active = "";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        active = id;
        break;
      }
    }
  }
  return active;
}

// --- CSS VARIABLES FOR GLOW/SHADOWS (add to global CSS) ---
// :root {
//   --primary-glow: #7dd3fc88;
//   --box-shadow: #0ea5e988;
// }

// --- ANIMATION HELPERS (for Navigation component) ---
export {
  navItemVariants,
  navUnderlineVariants,
  navBeamFlicker,
  boxDropVariants,
  boxIconVariants,
  boxRippleVariants,
  boxContentVariants,
  themeIconVariants,
  navItems,
  boxItems,
  getActiveSection,
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [showResume, setShowResume] = useState(false);
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

  // Random logo selection
  const logoOptions = ["/logo.gif", "/logo-1.gif", "/logo-2.gif"];
  const randomLogo = useMemo(() => {
    const index = Math.floor(Math.random() * logoOptions.length);
    return logoOptions[index];
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-subtle" : "bg-transparent"
    }`}>
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={randomLogo}
              alt="Logo"
              className="w-14 h-12 object-contain animate-spin-slow"
            />
            <CoolMode>
              <span className="text-xl font-bold gradient-text">
                The Birbal Studio
              </span>
            </CoolMode>
          </div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Group 1: Navigate */}
            <div className="flex items-center space-x-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  variants={navItemVariants}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-foreground hover:text-primary transition-colors relative group font-medium"
                >
                  {item.name}
                  <motion.span
                    variants={navUnderlineVariants}
                    initial="initial"
                    whileHover="hover"
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                  />
                </motion.button>
              ))}
            </div>
            {/* Divider */}
            <div className="h-6 border-l border-border mx-4" />
            {/* Group 2: Explore */}
            <div className="flex items-center space-x-4">
              {boxItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={(e) => handleBoxOpen(item.name, e)}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={boxIconVariants}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary transition-colors font-medium overflow-hidden"
                >
                  {/* Ripple on click */}
                  <motion.span
                    variants={boxRippleVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 rounded-full bg-primary opacity-10"
                  />
                  <item.icon className="w-4 h-4 z-10" />
                  <span className="z-10">{item.name}</span>
                </motion.button>
              ))}

            </div>
            {/* Resume Button */}
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-6"
              onClick={() => setShowResume(true)}
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
            <div className="px-2 pt-2 pb-3 space-y-4 bg-background/95 backdrop-blur-lg rounded-lg mt-2 border border-border">
              {/* Navigate Group */}
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-1">Navigate</div>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* Explore Group */}
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-1">Explore</div>
                <div className="space-y-1">
                  {boxItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleBoxOpen(item.name, e);
                      }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors w-full text-left font-medium"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Resume Button */}
              <div className="px-3 pt-2">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-6"
                  onClick={() => setShowResume(true)}
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Box Transition Modal */}
      <AnimatePresence mode="wait">
        {isBoxOpen && (
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
        )}
      </AnimatePresence>
      <ResumePreview isOpen={showResume} onClose={() => setShowResume(false)} />
    </nav>
  );
};