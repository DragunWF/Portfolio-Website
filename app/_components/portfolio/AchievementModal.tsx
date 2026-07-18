"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AchievementData } from "../../_types";

interface AchievementModalProps {
  achievement: AchievementData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AchievementModal({
  achievement,
  isOpen,
  onClose,
}: AchievementModalProps) {
  const [activeAchievement, setActiveAchievement] =
    useState<AchievementData | null>(null);

  // Sync active achievement when modal opens
  useEffect(() => {
    if (achievement) {
      setActiveAchievement(achievement);
    }
  }, [achievement]);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restore body scroll
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && activeAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md"
        >
          {/* Backdrop click area */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-[0_0_50px_rgba(16,185,129,0.1)] z-10 max-h-[90vh]"
          >
            {/* Left Side: Image */}
            <div className="md:w-1/2 h-64 md:h-auto w-full relative shrink-0 bg-slate-950/40 overflow-hidden">
              {activeAchievement.imageUrl ? (
                <>
                  {/* Blurred background to fill aspect ratio */}
                  <Image
                    src={activeAchievement.imageUrl}
                    alt=""
                    fill
                    className="object-cover blur-lg opacity-25 select-none pointer-events-none"
                    sizes="10vw"
                  />
                  {/* Main non-cropped image */}
                  <Image
                    src={activeAchievement.imageUrl}
                    alt={activeAchievement.title}
                    fill
                    className="object-contain relative z-10 p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
                  No Image Available
                </div>
              )}
            </div>

            {/* Right Side: Info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col text-left overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="cursor-pointer absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-100 bg-slate-900/50 hover:bg-slate-800 rounded-full transition-colors z-20 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {activeAchievement.badgeText && (
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    {activeAchievement.badgeText}
                  </span>
                )}
                <span className="px-3 py-1 rounded-md bg-slate-950/70 border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                  {activeAchievement.date}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
                {activeAchievement.title}
              </h3>

              <p className="text-sm font-medium text-emerald-400 mb-6">
                {activeAchievement.event}
              </p>

              <div className="prose prose-invert prose-slate prose-sm max-w-none text-slate-300">
                <p className="leading-relaxed">
                  {activeAchievement.description || "More details coming soon."}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
