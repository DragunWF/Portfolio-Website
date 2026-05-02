import { BLOG_POSTS } from "../../_constants";
import { ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";

export default function Blog() {
  // Only display the two most recent posts on the home page
  const recentBlogs = BLOG_POSTS.slice(0, 2);

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

      <Link
        href="/blog"
        className="sm:hidden w-full mt-6 flex items-center justify-center gap-1 py-3 text-sm font-medium text-emerald-500 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-colors"
      >
        View All Blogs <ChevronRight className="w-4 h-4" />
      </Link>
    </SectionContainer>
  );
}
