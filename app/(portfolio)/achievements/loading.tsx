import Link from "next/link";
import {
  PinnacleSkeleton,
  HonorsSkeleton,
  FinalistSkeleton,
} from "../../_components/ui/Skeletons";

export default function AchievementsLoading() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-5xl mx-auto">
      {/* Sticky Header */}
      <header className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-500 hover:text-emerald-500 transition-colors text-sm font-medium mb-6"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Hackathons & Competitions
          </h1>
        </div>
        <p className="mt-4 text-slate-400 text-sm max-w-2xl leading-relaxed">
          A detailed chronicle of my competitive programming placements,
          hackathons, and technical honors.{" "}
          <span className="text-emerald-400/90 font-medium">
            Click on any achievement to inspect details and descriptions.
          </span>
        </p>
      </header>

      {/* Pinnacle Conquests Tier */}
      <section className="mb-16">
        <div className="h-6 w-48 bg-slate-900 border-l-2 border-emerald-500 rounded-r mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <PinnacleSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Honors & Victories Tier */}
      <section className="mb-16">
        <div className="h-6 w-48 bg-slate-900 border-l-2 border-emerald-500/60 rounded-r mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <HonorsSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Finalist Trials Tier */}
      <section className="mb-16">
        <div className="h-6 w-48 bg-slate-900 border-l-2 border-emerald-500/30 rounded-r mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <FinalistSkeleton key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
