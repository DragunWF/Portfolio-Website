import React from "react";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function BlogSkeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl p-6 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer" />
      <div className="h-6 w-3/4 bg-slate-800 rounded mb-4" />
      <div className="h-4 w-1/4 bg-slate-800/50 rounded mb-4" />
      <div className="h-4 w-full bg-slate-800/40 mt-2" />
      <div className="h-4 w-full bg-slate-800/40 mt-2" />
      <div className="h-4 w-4/5 bg-slate-800/40 mt-2" />
    </div>
  );
}

export function GallerySkeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl aspect-video ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer" />
      <div className="absolute bottom-4 left-4 h-4 w-1/3 bg-slate-800 rounded" />
    </div>
  );
}

export function PinnacleSkeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-2xl aspect-[4/3] ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer" />
      <div className="absolute bottom-6 left-6 right-6 space-y-2">
        <div className="h-5 w-2/3 bg-slate-800 rounded" />
        <div className="h-4 w-1/2 bg-slate-800/60 rounded" />
        <div className="h-3 w-1/4 bg-slate-800/40 rounded mt-3" />
      </div>
    </div>
  );
}

export function HonorsSkeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900/80 border border-slate-800/80 rounded-2xl p-5 flex flex-col ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer" />
      <div className="h-40 w-full bg-slate-850 border border-slate-800 rounded-xl mb-4 shrink-0" />
      <div className="h-5 w-3/4 bg-slate-800 rounded mb-2" />
      <div className="h-4 w-1/2 bg-slate-800/60 rounded mb-3" />
      <div className="h-3 w-1/3 bg-slate-800/40 rounded mt-auto" />
    </div>
  );
}

export function FinalistSkeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-shimmer" />
      <div className="sm:w-5/12 h-32 bg-slate-850 border border-slate-800 rounded-lg shrink-0" />
      <div className="sm:w-7/12 flex flex-col justify-center space-y-2">
        <div className="h-4 w-5/6 bg-slate-800 rounded" />
        <div className="h-3 w-1/2 bg-slate-800/60 rounded" />
        <div className="h-3 w-1/3 bg-slate-800/40 rounded mt-2" />
      </div>
    </div>
  );
}
