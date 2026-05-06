"use client";

import Image from "next/image";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 overflow-hidden">
      {/* Background Layer: Massive glowing 404 text */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-black text-[15rem] md:text-[25rem] text-emerald-950/40 animate-pulse leading-none"
        style={{
          textShadow:
            "0 0 60px rgba(16, 185, 129, 0.2), 0 0 120px rgba(16, 185, 129, 0.1)",
        }}
      >
        404
      </span>

      {/* Foreground Layer: Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Image Container with aura glow */}
        <div
          className="relative w-full max-w-4xl"
          style={{
            filter: "drop-shadow(0 0 100px rgba(16, 185, 129, 0.15))",
          }}
        >
          <Image
            src="/page-not-found.webp"
            alt="A hooded wizard standing in a dungeon — the arcane gatekeeper of a lost pathway."
            width={1200}
            height={800}
            priority
            className="rounded-xl border border-slate-800/50 w-full h-auto"
          />
        </div>

        {/* Narrative Text & CTA */}
        <p className="text-emerald-500 font-mono text-xl tracking-widest uppercase mt-12 mb-4">
          LOST PATHWAY: 404
        </p>

        <p className="text-slate-400 font-mono text-sm max-w-xl text-center uppercase tracking-wider leading-relaxed">
          THE ARCANE ARCHIVE IS AS PUZZLED AS YOU ARE. THE FRACTURED SIGILS
          INDICATE THIS PATH NO LONGER EXISTS, OR WAS NEVER MEANT TO BE
          TRAVERSED. WE RECOMMEND RECASTING YOUR SPELL.
        </p>

        <Link
          href="/"
          className="mt-10 px-8 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 font-mono hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
        >
          <Terminal className="inline-block mr-2 h-4 w-4" aria-hidden="true" />
          RETURN TO COMMAND CENTER (HOME)
        </Link>
      </div>
    </main>
  );
}
