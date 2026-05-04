import { ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import { getPublishedBlogs } from "@/app/actions/blog";

function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getExcerpt(content: string, maxChars = 120): string {
  const plain = content.replace(/[#*`_>\-\[\]()!]/g, "").trim();
  return plain.length > maxChars ? plain.slice(0, maxChars).trimEnd() + "…" : plain;
}

export default async function Blog() {
  const recentBlogs = await getPublishedBlogs(2);

  return (
    <SectionContainer id="blog" className="py-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Blogs
        </h3>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          View All Blogs <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentBlogs.map((post) => (
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

      <Link
        href="/blog"
        className="sm:hidden w-full mt-6 flex items-center justify-center gap-1 py-3 text-sm font-medium text-emerald-500 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-colors"
      >
        View All Blogs <ChevronRight className="w-4 h-4" />
      </Link>
    </SectionContainer>
  );
}
