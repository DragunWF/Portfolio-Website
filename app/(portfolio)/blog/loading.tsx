import Link from "next/link";
import { BlogSkeleton } from "../../_components/ui/Skeletons";

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4 mt-8 mb-2">
          <div className="w-8 h-[2px] bg-emerald-500"></div>
          <h2 className="text-3xl font-bold text-emerald-500">Blog Posts</h2>
        </div>
      </header>

      {/* Grid Layout Fallback */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
