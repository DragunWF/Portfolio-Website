"use client";

import { X, Mail } from "lucide-react";
import Link from "next/link";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

interface MessageDetailModalProps {
  message: ContactMessage | null;
  onClose: () => void;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export default function MessageDetailModal({
  message,
  onClose,
}: MessageDetailModalProps) {
  if (!message) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-slate-900/80 border border-emerald-500/20 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-emerald-500">
            <Mail size={16} />
            <span className="text-sm font-mono font-medium uppercase tracking-wider">
              Message Detail
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close message detail"
            className="text-slate-500 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Sender meta */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                Name
              </p>
              <p className="text-sm text-slate-200 font-medium">
                {message.name}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${message.email}`}
                className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2"
              >
                {message.email}
              </a>
            </div>
          </div>

          {/* Date */}
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
              Received
            </p>
            <p className="text-sm text-slate-400">
              {formatDate(message.createdAt)}
            </p>
          </div>

          {/* Message body */}
          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              Message
            </p>
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-mono">
                {message.message}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-2 px-4 py-2 text-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 rounded-lg transition-all"
          >
            <Mail size={14} />
            Reply via Email
          </Link>
        </div>
      </div>
    </div>
  );
}
