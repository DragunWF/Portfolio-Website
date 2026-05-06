"use client";

import { useState } from "react";
import { AlertTriangle, Trash2 } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  title?: string;
  description?: string;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Deletion",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
}: DeleteModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
    } catch (error) {
      console.error("[DeleteModal] Error during deletion:", error);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-xl shadow-2xl max-w-sm w-full relative overflow-hidden">
        {/* Ambient red glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Icon */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
          <AlertTriangle size={20} className="text-red-500" />
        </div>

        {/* Text */}
        <h2 className="text-slate-200 font-semibold text-base mb-1 relative">
          {title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed relative">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 mt-6 relative">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={isDeleting}
            className="px-4 py-2 text-sm bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeleting ? (
              <>
                <span className="h-3.5 w-3.5 rounded-full border-2 border-red-500/30 border-t-red-500 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={14} />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
