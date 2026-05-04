import { notFound } from "next/navigation";
import { getBlogById } from "@/app/actions/blog";
import BlogEditor from "@/app/_components/admin/BlogEditor";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
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
