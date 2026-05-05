import Link from "next/link";
import { Plus, BookOpen } from "lucide-react";
import { getBlogs } from "@/app/actions/blog";
import BlogTable from "./BlogTable";

const TABLE_COLUMNS = ["Title", "Status", "Date Created", "Actions"];

export default async function BlogDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const page = parseInt((resolvedParams.page as string) ?? "1") || 1;
  const { blogs, totalPages, currentPage } = await getBlogs(page, 10);

  const tableData = blogs.map((blog) => ({
    id: blog.id,
    title: blog.title,
    status: blog.status === "PUBLISHED" ? "Published" : "Draft",
    date: blog.createdAt.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    }),
  }));

  const publishedCount = blogs.filter((b) => b.status === "PUBLISHED").length;
  const draftCount = blogs.filter((b) => b.status === "DRAFT").length;

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <BookOpen className="text-emerald-500" size={22} />
          <h1 className="text-2xl font-semibold text-slate-200">Blog Posts</h1>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-2 rounded-lg hover:bg-emerald-500/20 transition-all text-sm font-medium"
        >
          <Plus size={16} />
          Write New Post
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Total Posts</p>
          <p className="text-2xl font-semibold text-slate-200">{blogs.length}</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Published</p>
          <p className="text-2xl font-semibold text-emerald-500">{publishedCount}</p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Drafts</p>
          <p className="text-2xl font-semibold text-slate-400">{draftCount}</p>
        </div>
      </div>

      {/* Data Table Wrapper (Client Component) */}
      <BlogTable columns={TABLE_COLUMNS} data={tableData} totalPages={totalPages} currentPage={currentPage} />
    </div>

  );
}
