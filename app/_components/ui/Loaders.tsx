import React from "react";

export function ManaCoreLoader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[60vh]">
      {/* The Spin Wrapper */}
      <div className="relative w-12 h-12 animate-spin [animation-duration:4s]">
        {/* The Core */}
        <div className="absolute inset-0 bg-emerald-500 rounded-sm rotate-45 animate-pulse shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          {/* The Inner Glow */}
          <div className="absolute inset-1 bg-slate-950 rounded-sm" />
        </div>
      </div>

      {/* The Status Text */}
      <div className="mt-8 text-emerald-500/70 font-mono text-xs tracking-widest uppercase animate-pulse">
        Processing Core...
      </div>
    </div>
  );
}

export function RunicDecryptor() {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Outer Hexagon (Slow, Clockwise, Dashed) */}
      <div className="absolute inset-0 animate-spin [animation-duration:8s]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,2 91.5,26 91.5,74 50,98 8.5,74 8.5,26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className="text-emerald-500/30"
          />
          <circle cx="50" cy="2" r="2.5" className="fill-emerald-400" />
          <circle cx="91.5" cy="74" r="2.5" className="fill-emerald-400" />
          <circle cx="8.5" cy="74" r="2.5" className="fill-emerald-400" />
        </svg>
      </div>

      {/* Inner Hexagon (Fast, Counter-Clockwise, Solid) */}
      <div className="absolute inset-4 animate-spin [animation-duration:3s] [animation-direction:reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,2 91.5,26 91.5,74 50,98 8.5,74 8.5,26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/50"
          />
          <circle cx="50" cy="98" r="2" className="fill-emerald-400" />
        </svg>
      </div>

      {/* Central Core */}
      <div className="absolute w-4 h-4 bg-emerald-500 rotate-45 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
    </div>
  );
}
