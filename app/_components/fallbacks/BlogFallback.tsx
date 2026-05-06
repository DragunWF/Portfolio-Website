import SectionContainer from "../layout/SectionContainer";
import { BlogSkeleton } from "../ui/Skeletons";
import { ChevronRight } from "lucide-react";

export default function BlogFallback() {
  return (
    <SectionContainer id="blog" className="py-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Blogs
        </h3>
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-500 opacity-50">
          View All Blogs <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
