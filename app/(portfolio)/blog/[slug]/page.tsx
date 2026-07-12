import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from "@/app/actions/blog";
import { getReadTime } from "@/app/_utils/helpers";
import { PORTFOLIO_DATA } from "@/app/_constants";
import { MarkdownCodeBlock } from "@/app/_components/portfolio/MarkdownCodeBlock";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero Header (Edge-to-Edge) */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-end">
        {/* Background Image */}
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="object-cover w-full h-full absolute inset-0"
          />
        ) : (
          <div className="absolute inset-0 bg-slate-900" />
        )}
        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full pt-8 px-6 md:px-12 z-20">
          <Link
            href="/blog"
            className="group flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-8 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-emerald-500 font-mono text-sm">
            <span>By Marc Plarisan</span>
            <span>&bull;</span>
            <span>
              {post.createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>&bull;</span>
            <span>{getReadTime(post.content ?? "")}</span>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <article className="prose prose-invert prose-slate mx-auto max-w-3xl px-6 md:px-12 lg:px-0 py-16 prose-headings:text-slate-100 prose-a:text-emerald-500 hover:prose-a:text-emerald-400 prose-strong:text-slate-100 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-900/30 prose-blockquote:py-2 prose-blockquote:pr-4">
        <ReactMarkdown
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const isInline = !match;

              if (!isInline) {
                return (
                  <MarkdownCodeBlock
                    language={match[1]}
                    value={String(children).replace(/\n$/, "")}
                  />
                );
              }

              return (
                <code
                  className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[0.9em]"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            // Remove default pre styling since MarkdownCodeBlock handles its own container
            pre({ children }) {
              return <>{children}</>;
            },
          }}
        >
          {post.content ?? ""}
        </ReactMarkdown>
      </article>

      {/* Author Bio Footer */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8 pb-24">
        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center md:items-start transition-colors hover:border-slate-700">
          <div className="w-20 h-20 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border-2 border-emerald-500/30 overflow-hidden">
            {/* Fallback avatar shape if no image is provided */}
            <span className="text-slate-400 font-mono text-2xl font-bold tracking-widest">
              MP
            </span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              {PORTFOLIO_DATA.hero.name}
            </h3>
            <p className="text-emerald-500 text-sm font-medium mb-3">
              {PORTFOLIO_DATA.hero.title}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {PORTFOLIO_DATA.hero.about}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
