import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalleryForm from "@/app/_components/admin/GalleryForm";
import { prisma } from "@/app/_utils/prisma";

interface EditGalleryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditGalleryPage({
  params,
}: EditGalleryPageProps) {
  const { id } = await params;

  const item = await prisma.gallery.findUnique({
    where: { id },
  });

  if (!item) {
    notFound();
  }

  return (
    <div className="p-8 max-w-3xl mx-auto w-full flex flex-col gap-6">
      <header>
        <Link
          href="/admin/gallery"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>
        <h1 className="text-3xl font-bold text-slate-200">Edit Milestone</h1>
        <p className="text-slate-400 mt-1">
          Update the details and image for this milestone.
        </p>
      </header>

      <GalleryForm initialData={item} />
    </div>
  );
}
