import SectionContainer from "../layout/SectionContainer";
import { GallerySkeleton } from "../ui/Skeletons";
import { ChevronRight } from "lucide-react";

export default function GalleryFallback() {
  return (
    <SectionContainer id="gallery" className="py-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Event Gallery
        </h3>
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-500 opacity-50">
          View All Pictures <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, i) => (
          <GallerySkeleton key={i} style={{ aspectRatio: "4/3" }} />
        ))}
      </div>
    </SectionContainer>
  );
}
