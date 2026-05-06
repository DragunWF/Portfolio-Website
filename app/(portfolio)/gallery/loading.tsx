import Link from "next/link";
import { GallerySkeleton } from "../../_components/ui/Skeletons";

export default function GalleryLoading() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-500 hover:text-emerald-500 transition-colors text-sm font-medium mb-6"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Event Gallery
          </h1>
        </div>
      </header>

      {/* Masonry Grid Fallback */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-12 space-y-6">
        {[...Array(6)].map((_, i) => (
          <GallerySkeleton
            key={i}
            className="break-inside-avoid mb-6"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>
    </main>
  );
}
