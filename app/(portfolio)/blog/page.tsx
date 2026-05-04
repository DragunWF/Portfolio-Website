import Link from "next/link";
import { Clock } from "lucide-react";
import { getPublishedBlogs } from "@/app/actions/blog";

export const metadata = {
  title: "Blog | Marc Plarisan",
  description:
    "Technical deep-dives, post-mortems, and engineering lessons learned.",
};

function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getExcerpt(content: string, maxChars = 120): string {
  const plain = content.replace(/[#*`_>\-\[\]()!]/g, "").trim();
  return plain.length > maxChars ? plain.slice(0, maxChars).trimEnd() + "…" : plain;
}

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

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
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="flex flex-col bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-emerald-500 group cursor-pointer overflow-hidden"
          >
            {/* Edge-to-edge Cover Image */}
            <div className="relative w-full h-48 overflow-hidden bg-slate-950">
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                  <span className="text-slate-700 text-sm font-mono">No cover image</span>
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              {/* Top Row: Date */}
              <div className="flex justify-between items-center text-xs font-mono uppercase text-slate-500">
                <span>
                  {post.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>
                  Updated:{" "}
                  {post.updatedAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-500 transition-colors">
                {post.title}
              </h3>

              {/* Read Time */}
              <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
                <Clock size={14} />
                <span>{getReadTime(post.content ?? "")}</span>
              </div>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                {getExcerpt(post.content ?? "")}
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
