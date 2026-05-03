"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, Save, Settings } from "lucide-react";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("DRAFT");

  const slug = generateSlug(title);

  const handleSave = () => {
    // Supabase / Prisma save logic will go here
    console.log("Saving blog post:", { title, slug, content, status });
  };

  const toggleStatus = () => {
    setStatus((prev) => (prev === "DRAFT" ? "PUBLISHED" : "DRAFT"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 flex flex-col font-sans">
      {/* ── Top HUD ── */}
      <header className="sticky top-0 z-10 h-16 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8">
        {/* Left: Back */}
        <Link
          href="/admin/blog"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Status Toggle */}
          <button
            type="button"
            onClick={toggleStatus}
            className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium border transition-all ${
              status === "PUBLISHED"
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20"
                : "bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-slate-300"
            }`}
          >
            {status === "PUBLISHED" ? "● Published" : "○ Draft"}
          </button>

          {/* Save Button */}
          <button
            type="button"
            onClick={handleSave}
            className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-1.5 rounded-md hover:bg-emerald-500/20 transition-all flex items-center gap-2 text-sm font-medium"
          >
            <Save size={15} />
            Save Changes
          </button>
        </div>
      </header>

      {/* ── Zen Canvas ── */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="max-w-3xl mx-auto w-full py-12 px-6 flex flex-col gap-8">
          {/* Cover Image Dropzone */}
          <div className="w-full h-48 rounded-xl border-2 border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center text-slate-500 hover:border-emerald-500/50 hover:bg-slate-900/40 transition-all cursor-pointer group">
            <ImageIcon
              size={28}
              className="mb-2 group-hover:text-emerald-500/60 transition-colors"
            />
            <p className="text-sm group-hover:text-slate-400 transition-colors">
              Drag & Drop Cover Image
            </p>
            <p className="text-xs text-slate-700 mt-1">
              PNG, JPG or WEBP — max 4MB
            </p>
          </div>

          {/* Title Input */}
          <div className="flex flex-col gap-3">
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled Post"
              autoFocus
              rows={2}
              className="text-4xl md:text-5xl font-bold bg-transparent outline-none placeholder:text-slate-700 w-full text-slate-200 resize-none leading-tight"
            />

            {/* Slug Display */}
            <div className="flex items-center gap-2 text-sm font-mono text-slate-600">
              <span>slug:</span>
              <span className="text-emerald-500/70">
                /blog/{slug || "your-title-here"}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-slate-800" />

          {/* Content Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing... (Markdown supported)"
            className="w-full min-h-[500px] bg-transparent outline-none resize-none placeholder:text-slate-700 text-lg leading-relaxed text-slate-300 font-serif"
          />
        </div>
      </main>
    </div>
  );
}
