import Link from "next/link";
import { Clock } from "lucide-react";
import { BLOG_POSTS } from "../../_constants";

export const metadata = {
  title: "Blog | Marc Plarisan",
  description:
    "Technical deep-dives, post-mortems, and engineering lessons learned.",
};

export default function BlogPage() {
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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex flex-col bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-emerald-500 group cursor-pointer overflow-hidden"
          >
            {/* Edge-to-edge Cover Image */}
            <div className="relative w-full h-48 overflow-hidden bg-slate-950">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              {/* Top Row: Dates */}
              <div className="flex justify-between items-center text-xs font-mono uppercase text-slate-500">
                <span>{post.dateCreated}</span>
                <span>Updated: {post.dateUpdated}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-500 transition-colors">
                {post.title}
              </h3>

              {/* Read Time */}
              <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-16 pt-8 border-t border-slate-800/50">
        <button className="text-slate-400 hover:text-emerald-500 transition-colors font-medium text-sm">
          &larr; Prev
        </button>
        <span className="text-slate-500 text-sm font-mono">Page 1 of 3</span>
        <button className="text-slate-400 hover:text-emerald-500 transition-colors font-medium text-sm">
          Next &rarr;
        </button>
      </div>
    </main>
  );
}
