import Link from "next/link";
import { getGalleryItems } from "@/app/actions/gallery";
import { Suspense } from "react";
import { GallerySkeleton } from "@/app/_components/ui/Skeletons";
import GalleryGrid from "@/app/_components/portfolio/GalleryGrid";

export const metadata = {
  title: "Marc Plarisan | Event Gallery",
  description:
    "A masonry gallery of my past events, hackathons, and speaking engagements.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Sticky Header — Sticked below Navbar (h-16) */}
      <header className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-500 hover:text-emerald-500 transition-colors text-sm font-medium mb-6"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Event Gallery
          </h1>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[...Array(6)].map((_, i) => (
              <GallerySkeleton
                key={i}
                className="mb-6"
                style={{ aspectRatio: "4/3" }}
              />
            ))}
          </div>
        }
      >
        <GalleryContent />
      </Suspense>
    </main>
  );
}

async function GalleryContent() {
  const galleryItems = await getGalleryItems();

  return (
    /* Masonry Grid */
    <GalleryGrid items={galleryItems} layout="full" />
  );
}
