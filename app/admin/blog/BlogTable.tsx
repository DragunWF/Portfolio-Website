"use client";

import DataTable from "@/app/_components/admin/DataTable";
import { deleteBlog, updateBlogStatus } from "@/app/actions/blog";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface BlogTableProps {
  columns: string[];
  data: any[];
}

export default function BlogTable({ columns, data }: BlogTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleEdit = (id: string) => {
    router.push(`/admin/blog/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    startTransition(async () => {
      await deleteBlog(id);
      router.refresh();
    });
  };

  return (
    <div className={isPending ? "opacity-50 pointer-events-none transition-opacity" : ""}>
      <DataTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
