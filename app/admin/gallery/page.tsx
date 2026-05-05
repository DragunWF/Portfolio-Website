import React from "react";
import { getGalleryItems } from "@/app/actions/gallery";
import EventGrid from "@/app/_components/admin/EventGrid";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function GalleryAdminPage() {
  const items = await getGalleryItems();

  return (
    <main className="p-8 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Event Gallery</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your milestones and achievements.
          </p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Milestone</span>
        </Link>
      </header>

      <section>
        <EventGrid initialItems={items} />
      </section>
    </main>
  );
}
