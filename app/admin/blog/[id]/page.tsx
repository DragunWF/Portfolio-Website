import { notFound } from "next/navigation";
import { getBlogById } from "@/app/actions/blog";
import BlogEditor from "@/app/_components/admin/BlogEditor";
import { Suspense } from "react";
import { ManaCoreLoader } from "@/app/_components/ui/Loaders";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  return (
    <Suspense fallback={<ManaCoreLoader />}>
      <EditBlogContent params={params} />
    </Suspense>
  );
}

async function EditBlogContent({ params }: EditBlogPageProps) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <BlogEditor
      initialData={{
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        content: blog.content ?? "",
        status: blog.status,
        imageUrl: blog.imageUrl ?? null,
      }}
    />
  );
}
