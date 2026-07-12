import Link from "next/link";
import { RunicDecryptor } from "@/app/_components/ui/Loaders";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-7xl mx-auto flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 flex-none">
        <Link
          href="/"
          className="inline-block text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
        >
          &larr; Return to Home Page
        </Link>
      </header>

      {/* Loading Content */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh]">
        <RunicDecryptor />
        <div className="mt-12 flex items-center text-emerald-500/90 font-mono text-sm tracking-widest uppercase">
          <span className="animate-pulse">DECRYPTING_ANCIENT_WRITING</span>
          <span className="animate-[pulse_1s_infinite] ml-1 font-bold">_</span>
        </div>
      </div>
    </main>
  );
}
