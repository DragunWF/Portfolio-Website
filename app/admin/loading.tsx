export default function AdminLoading() {
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
