import { Image as ImageIcon, ChevronRight } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";
import Link from "next/link";
import Image from "next/image";
import { getGalleryItems } from "@/app/actions/gallery";

export default async function Gallery() {
  const galleryItems = await getGalleryItems();
  const previewItems = galleryItems.slice(0, 3);

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

      {/* Evenly Sized Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {previewItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden relative group cursor-pointer transition-colors hover:border-emerald-500"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              <span className="text-sm font-bold text-emerald-500 drop-shadow-md">
                {item.title}
              </span>
            </div>
          </div>
        ))}
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
