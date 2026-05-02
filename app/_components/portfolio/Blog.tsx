import { PORTFOLIO_DATA } from "../../_constants";
import { ChevronRight } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";

export default function Blog() {
  const { blogs } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="blog" className="py-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Blogs
        </h3>
        <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
          View All Blogs <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] group cursor-pointer"
          >
            {/* Thumbnail Placeholder Area */}
            <div
              className={`h-48 w-full relative flex items-center justify-center border-b border-slate-800 ${index === 0 ? "bg-gradient-to-br from-slate-800 to-slate-900" : "bg-gradient-to-bl from-slate-800 to-slate-900"}`}
            >
              <span className="text-slate-600 font-medium tracking-widest uppercase text-xs">
                Thumbnail Area
              </span>
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors mb-2">
                {blog.title}
              </h4>
              <p className="text-sm text-slate-500">Read article &rarr;</p>
            </div>
          </div>
        ))}
      </div>

      <button className="sm:hidden w-full mt-6 flex items-center justify-center gap-1 py-3 text-sm font-medium text-emerald-500 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-colors">
        View All Blogs <ChevronRight className="w-4 h-4" />
      </button>
    </SectionContainer>
  );
}
