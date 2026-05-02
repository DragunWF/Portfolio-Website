import { notFound } from "next/navigation";
import Link from "next/link";
import { PORTFOLIO_DATA, BLOG_POSTS } from "../../../_constants";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero Header (Edge-to-Edge) */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-end">
        {/* Background Image */}
        <img
          src={post.coverImage}
          alt={post.title}
          className="object-cover w-full h-full absolute inset-0"
        />
        {/* Darkening Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full pt-8 px-6 md:px-12 z-20">
          <Link
            href="/blog"
            className="text-slate-300 hover:text-emerald-500 transition-colors relative z-10 font-medium"
          >
            &larr; Back to Notes
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-emerald-500 font-mono text-sm">
            <span>By Marc Plarisan</span>
            <span>&bull;</span>
            <span>{post.dateCreated}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Article Body (Placeholder) */}
      <article className="max-w-3xl mx-auto px-6 py-16 text-slate-300 font-serif text-lg leading-relaxed space-y-8">
        {/* Lead Paragraph */}
        <p className="text-xl text-slate-400 italic mb-12">{post.excerpt}</p>

        {/* Hardcoded Placeholder Structure */}
        <h2 className="text-2xl font-sans font-bold text-slate-100 mt-12 mb-4">
          Introduction to the Architecture
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Praesent elementum
          facilisis leo vel fringilla est ullamcorper eget. Nulla facilisi etiam
          dignissim diam quis enim lobortis.
        </p>

        <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 italic text-slate-400 bg-slate-900/30 py-4 pr-4 rounded-r-lg">
          "The true mark of a robust system is not how well it operates under
          normal conditions, but how gracefully it handles the impossible."
        </blockquote>

        <h2 className="text-2xl font-sans font-bold text-slate-100 mt-12 mb-4">
          Implementation Details
        </h2>
        <p>
          Here is a snippet of the core configuration that drives the underlying
          infrastructure. Notice how the separation of concerns is maintained
          throughout the module.
        </p>

        {/* Arcane Code Block */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 font-mono text-sm overflow-x-auto shadow-lg">
          <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              typescript
            </span>
            <button className="text-slate-400 hover:text-emerald-500 text-xs font-medium transition-colors">
              Copy Code
            </button>
          </div>
          <pre className="text-slate-300">
            <code className="block leading-loose">
              <span className="text-emerald-400">export</span>{" "}
              <span className="text-blue-400">const</span> initSystem{" "}
              <span className="text-slate-100">=</span>{" "}
              <span className="text-emerald-400">async</span> (){" "}
              <span className="text-slate-100">=&gt;</span> {"{"}
              {"\n  "}
              <span className="text-blue-400">const</span> config{" "}
              <span className="text-slate-100">=</span>{" "}
              <span className="text-yellow-200">await</span>{" "}
              loadEnvironmentVariables();
              {"\n  "}
              <span className="text-slate-500">
                {"// Initialize the clean core services"}
              </span>
              {"\n  "}
              <span className="text-yellow-200">return</span>{" "}
              <span className="text-blue-200">new</span> CoreEngine(config);
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>

        <p>
          As demonstrated above, isolating the initialization logic ensures that
          our testing environments can easily mock the dependencies without
          altering the core application flow.
        </p>
      </article>

      {/* Author Bio Footer */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center md:items-start transition-colors hover:border-slate-700">
          <div className="w-20 h-20 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border-2 border-emerald-500/30 overflow-hidden">
            {/* Fallback avatar shape if no image is provided */}
            <span className="text-slate-400 font-mono text-2xl font-bold tracking-widest">
              MP
            </span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              Marc Plarisan
            </h3>
            <p className="text-emerald-500 text-sm font-medium mb-3">
              Software Engineer
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              I am a software developer who builds websites, mobile apps, and
              video games. When I'm not coding, you'll find me lost in a good
              book or jotting down my thoughts in my journal, balancing personal
              growth with technical curiosity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
