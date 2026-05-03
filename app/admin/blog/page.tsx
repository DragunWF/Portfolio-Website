"use client";

import Link from "next/link";
import { Plus, BookOpen } from "lucide-react";
import DataTable from "@/app/_components/admin/DataTable";

const mockBlogs = [
  {
    id: 1,
    title: "Architecting BasaBuddy: Lessons from Readers Rising",
    status: "Published",
    date: "Mar 10, 2026",
  },
  {
    id: 2,
    title: "SAP ABAP & Clean Core: Enterprise Strategies",
    status: "Draft",
    date: "Mar 18, 2026",
  },
];

const TABLE_COLUMNS = ["Title", "Status", "Date Created", "Actions"];

export default function BlogDashboardPage() {
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
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            Total Posts
          </p>
          <p className="text-2xl font-semibold text-slate-200">
            {mockBlogs.length}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            Published
          </p>
          <p className="text-2xl font-semibold text-emerald-500">
            {mockBlogs.filter((b) => b.status === "Published").length}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            Drafts
          </p>
          <p className="text-2xl font-semibold text-slate-400">
            {mockBlogs.filter((b) => b.status === "Draft").length}
          </p>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        columns={TABLE_COLUMNS}
        data={mockBlogs}
        onEdit={(id) => console.log("Edit blog:", id)}
        onDelete={(id) => console.log("Delete blog:", id)}
      />
    </div>
  );
}
