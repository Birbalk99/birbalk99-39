import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BoxTransitionProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  triggerElement?: HTMLElement | null;
  title?: string;
}

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
      
      {/* Box Container */}
      <div
        className={cn(
          "relative bg-background border border-border rounded-xl shadow-glow transition-all duration-700 ease-out overflow-hidden",
          isAnimating 
            ? "w-[90vw] h-[90vh] max-w-6xl opacity-100 scale-100" 
            : "opacity-0 scale-50"
        )}
        style={{
          transformOrigin: triggerRect 
            ? `${triggerRect.left + triggerRect.width / 2}px ${triggerRect.top + triggerRect.height / 2}px`
            : 'center center'
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
        <div className="p-6 h-full overflow-auto">
          <div 
            className={cn(
              "transition-all duration-500 delay-300",
              isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
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