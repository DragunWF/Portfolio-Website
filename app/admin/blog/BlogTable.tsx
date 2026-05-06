"use client";

import DataTable, { Column } from "@/app/_components/admin/DataTable";
import { deleteBlog } from "@/app/actions/blog";
import { useRouter } from "next/navigation";

interface BlogRow {
  id: string;
  title: string;
  status: string;
  date: string;
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Published") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
        Published
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
      Draft
    </span>
  );
}

const BLOG_COLUMNS: Column<BlogRow>[] = [
  {
    header: "Title",
    accessor: "title",
    className: "font-medium max-w-xs truncate",
  },
  {
    header: "Status",
    render: (row) => <StatusBadge status={row.status} />,
  },
  {
    header: "Date Created",
    accessor: "date",
    className: "text-slate-400",
  },
];

interface BlogTableProps {
  data: BlogRow[];
  totalPages?: number;
  currentPage?: number;
}

export default function BlogTable({
  data,
  totalPages,
  currentPage,
}: BlogTableProps) {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/admin/blog/${id}`);
  };

  return (
    <DataTable<BlogRow>
      columns={BLOG_COLUMNS}
      data={data}
      onEdit={handleEdit}
      onDelete={deleteBlog}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
}
