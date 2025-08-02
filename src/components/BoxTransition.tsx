import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from "framer-motion";



interface BoxTransitionProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElement?: HTMLElement | null;
  title?: string;
}

const boxDropVariants = {
  initial: { y: 0, scale: 1, borderRadius: "1rem", opacity: 0 },
  open: {
    y: "40vh",
    scale: 1,
    borderRadius: "1.5rem",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14
    }
  },
  splash: {
    y: "40vh",
    scale: 1.1,
    borderRadius: "2rem",
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14
    }
  }
};


export const BoxTransition: React.FC<BoxTransitionProps> = ({
  isOpen,
  onClose,
  children,
  triggerElement,
  title
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (isOpen && triggerElement) {
      const rect = triggerElement.getBoundingClientRect();
      setTriggerRect(rect);
      setIsAnimating(true);
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, triggerElement]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500",
          isAnimating ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <motion.div
        initial={{
          top:"50%",
          left:"50%",
          width: 50,
          height: 50,
          scale: 0.5,
          opacity: 0,
          borderRadius: "50%",
          position: "absolute"
        }}
        variants={boxDropVariants}
        animate={{
          top: "50%",
          left: "50%",
          width: "90vw",
          height: "90vh",
          scale: 1,
          opacity: 1,
          borderRadius: "1rem",
          x: "-50%",
          y: "-50%",
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 12
          }
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
          transition: { duration: 0.3 }
        }}
        className="absolute bg-background border border-border rounded-xl shadow-glow w-[90vw] max-w-6xl max-h-[90vh] overflow-hidden z-50 flex flex-col"
        style={{
          transformOrigin: triggerRect
            ? `${triggerRect.left + triggerRect.width / 2}px ${triggerRect.top + triggerRect.height / 2}px`
            : 'center center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
          {title && (
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto flex-1">
          <div 
            className={cn(
              "transition-all duration-500 delay-300",
              isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && modalContent}
    </AnimatePresence>,
    document.body
  );
  };

// Hook for managing box transitions
export const useBoxTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const openBox = (element?: HTMLElement) => {
    if (element) {
      setTriggerElement(element);
    }
    setIsOpen(true);
  };

  const closeBox = () => {
    setIsOpen(false);
    setTimeout(() => setTriggerElement(null), 300);
  };

  return {
    isOpen,
    triggerElement,
    openBox,
    closeBox
  };
};