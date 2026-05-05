import { Image as ImageIcon, ChevronRight } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import Link from "next/link";
import Image from "next/image";
import { getGalleryItems } from "@/app/actions/gallery";

export default async function Gallery() {
  const galleryItems = await getGalleryItems();
  const previewItems = galleryItems.slice(0, 5);

  return (
    <SectionContainer id="gallery" className="py-8 scroll-mt-20">
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

      {/* Grid Layout mimicking Masonry with varied heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {previewItems.map((item, index) => {
          const isLarge = index === 0;
          return (
            <div
              key={item.id}
              className={`bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden relative group cursor-pointer
                ${isLarge ? "col-span-1 sm:col-span-2 sm:row-span-2 min-h-[250px] md:min-h-[300px]" : "min-h-[200px] md:min-h-[142px]"}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-sm font-medium text-white px-2 text-center drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/gallery"
        className="sm:hidden w-full mt-6 flex items-center justify-center gap-1 py-3 text-sm font-medium text-emerald-500 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/10 transition-colors"
      >
        View All Pictures <ChevronRight className="w-4 h-4" />
      </Link>
    </SectionContainer>
  );
}
