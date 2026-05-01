"use client";

import { Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission logic placeholder
  };

  return (
    <section className="px-6 max-w-5xl mx-auto py-16 mb-12">
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
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
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
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
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
              rows={4}
              className="bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors duration-300"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
