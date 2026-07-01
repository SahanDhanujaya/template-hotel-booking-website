import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define strict types for the component levels/props
export type AlertLevel = "success" | "error" | "warning" | "info";

interface AlertProps {
  message: string;
  level: AlertLevel;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDuration?: number; // Optional auto-hide timer (in milliseconds)
}

const Alert: React.FC<AlertProps> = ({
  message,
  level,
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}) => {
  // Automatically trigger close if a duration is passed
  useEffect(() => {
    if (isOpen && autoCloseDuration) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDuration, onClose]);

  // Style configurations mapped perfectly to your soft aesthetic
  const levelStyles: Record<AlertLevel, { bg: string; text: string; border: string; accent: string }> = {
    success: {
      bg: "bg-[#F4FBF7]",
      text: "text-emerald-800",
      border: "border-emerald-100",
      accent: "bg-emerald-400",
    },
    error: {
      bg: "bg-[#FDF6F6]",
      text: "text-rose-800",
      border: "border-rose-100",
      accent: "bg-rose-400",
    },
    warning: {
      bg: "bg-[#FCFAF2]",
      text: "text-amber-800",
      border: "border-amber-100",
      accent: "bg-amber-400",
    },
    info: {
      bg: "bg-[#F5F9FC]",
      text: "text-sky-800",
      border: "border-sky-100",
      accent: "bg-sky-400", // Matches your existing sky-400 theme accents
    },
  };

  const currentStyle = levelStyles[level];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-6 right-6 z-9999 flex items-center max-w-md w-full sm:w-96 p-4 rounded-sm border shadow-[0_10px_30px_rgba(0,0,0,0.02)] ${currentStyle.bg} ${currentStyle.border} ${currentStyle.text}`}
        >
          {/* Visual Color Tag Left Accent bar */}
          <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-sm ${currentStyle.accent}`} />

          {/* Alert Content Node */}
          <div className="flex-1 pl-2 text-xs font-light tracking-wide leading-relaxed">
            {message}
          </div>

          {/* Interactive Dismissal Trigger Button */}
          <button
            onClick={onClose}
            type="button"
            className="ml-4 p-1 rounded-sm opacity-40 hover:opacity-100 transition-opacity outline-none"
            aria-label="Close alert"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;