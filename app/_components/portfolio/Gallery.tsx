import { Image as ImageIcon, ChevronRight } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import Link from "next/link";
import { getGalleryItems } from "@/app/actions/gallery";
import ScrollReveal from "../ui/ScrollReveal";
import GalleryGrid from "./GalleryGrid";

export default async function Gallery() {
  const galleryItems = await getGalleryItems();
  const previewItems = galleryItems.slice(0, 3);

  return (
    <SectionContainer id="gallery" className="py-8 scroll-mt-20">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
            Event Gallery
          </h3>
          <Link
            href="/gallery"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            View All Pictures <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Evenly Sized Grid Layout */}
      <GalleryGrid items={previewItems} layout="preview" />

      <ScrollReveal delay={0.2}>
        <Link
          href="/gallery"
          className="sm:hidden w-full mt-6 flex items-center justify-center gap-1 py-3 text-sm font-medium text-emerald-500 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-colors"
        >
          View All Pictures <ChevronRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </SectionContainer>
  );
}
