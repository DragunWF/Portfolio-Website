"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Gallery } from "@prisma/client";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Gallery[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNext,
  onPrev,
}: ImageModalProps) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 bg-slate-900/50 hover:bg-emerald-500/20 text-slate-400 cursor-pointer hover:text-emerald-400 rounded-full transition-colors border border-transparent hover:border-emerald-500/50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 z-50 p-2 sm:p-3 bg-slate-900/50 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 rounded-full transition-colors border border-transparent hover:border-emerald-500/50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 z-50 p-2 sm:p-3 bg-slate-900/50 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 rounded-full transition-colors border border-transparent hover:border-emerald-500/50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Image Container */}
          <motion.div
            key={currentItem.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden border border-emerald-500/50 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] bg-slate-900 flex flex-col justify-between"
          >
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Caption Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
              <h4 className="text-xl font-bold text-emerald-500 mb-1">
                {currentItem.title}
              </h4>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
