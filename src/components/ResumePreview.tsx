// components/ResumePreview.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const ResumePreview = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex justify-center items-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-zinc-900 shadow-xl rounded-xl overflow-hidden w-full max-w-4xl h-[90vh]"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/60 transition"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Birbal_DataScientist_Resume.pdf"
              title="Resume Preview"
              className="w-full h-full"
              frameBorder="0"
            />

            {/* Download Button */}
            <div className="absolute bottom-4 left-4">
              <a
                href="/Birbal_DataScientist_Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-white/10 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition backdrop-blur-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
