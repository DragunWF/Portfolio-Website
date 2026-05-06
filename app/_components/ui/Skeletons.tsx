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
