"use client";

import DataTable from "@/app/_components/admin/DataTable";
import { deleteBlog } from "@/app/actions/blog";
import { useRouter } from "next/navigation";

interface BlogTableProps {
  columns: string[];
  data: any[];
}

export default function BlogTable({ columns, data }: BlogTableProps) {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/admin/blog/${id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      onEdit={handleEdit}
      onDelete={deleteBlog}
    />
  );
}
