import Link from "next/link";
import Image from "next/image";
import { getGalleryItems } from "@/app/actions/gallery";

export const metadata = {
  title: "Event Gallery | Marc Plarisan",
  description:
    "A masonry gallery of my past events, hackathons, and speaking engagements.",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-500 hover:text-emerald-500 transition-colors text-sm font-medium mb-6"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4">
          {/* Signature green line prefix */}
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Event Gallery
          </h1>
        </div>
      </header>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-12">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 group break-inside-avoid mb-6 transition-colors duration-300 hover:border-emerald-500"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Default Overlay - opaque until hovered */}
            <div className="absolute inset-0 bg-slate-950/80 transition-opacity duration-300 group-hover:opacity-0" />

            {/* Caption Slide-up */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-emerald-500 font-bold mb-1">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {new Date(item.date).toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
