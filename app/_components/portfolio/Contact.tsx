"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import Image from "next/image";
import SectionContainer from "../layout/SectionContainer";
import { sendContactMessage } from "@/app/actions/contact";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await sendContactMessage({ name, email, message });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
  };

  return (
    <SectionContainer id="contact" className="py-16 mb-12 scroll-mt-20">
      <div className="p-8 md:p-12 bg-slate-900/80 border border-slate-800 rounded-3xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle glow behind the form */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-2xl mx-auto text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-100 mb-4 tracking-tight">
            Let's Build Something
          </h3>
          <p className="text-slate-400 text-lg">
            Whether it's an enterprise backend or an indie game, I'm always open
            to discussing new projects.
          </p>
        </div>

        {error && (
          <div className="max-w-xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-300 ml-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300 ml-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 disabled:opacity-50"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-300 ml-1"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              rows={4}
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none disabled:opacity-50"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success Modal Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full flex flex-col items-center text-center shadow-2xl shadow-emerald-500/10">
            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50">
              <Image
                src="/mail-received.webp"
                alt="Arcane Mage receiving a letter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3 tracking-tight">
              Message Delivered!
            </h3>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              Thanks for reaching out. I've received your missive and will
              respond soon.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 py-3 rounded-lg font-medium hover:bg-emerald-500/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
