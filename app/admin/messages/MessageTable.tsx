"use client";

import { useState } from "react";
import DataTable, { Column } from "@/app/_components/admin/DataTable";
import MessageDetailModal from "@/app/_components/admin/MessageDetailModal";
import { deleteContactMessage } from "@/app/actions/contact";

interface MessageRow {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date)); // new Date() guards serialised Date from RSC
}

const MESSAGE_COLUMNS: Column<MessageRow>[] = [
  {
    header: "Name",
    accessor: "name",
    className: "font-medium",
  },
  {
    header: "Email",
    render: (row) => <span className="text-slate-400">{row.email}</span>,
  },
  {
    header: "Date Received",
    render: (row) => (
      <span className="text-slate-400 tabular-nums">
        {formatDate(row.createdAt)}
      </span>
    ),
  },
];

interface MessageTableProps {
  data: MessageRow[];
  totalPages?: number;
  currentPage?: number;
}

export default function MessageTable({
  data,
  totalPages,
  currentPage,
}: MessageTableProps) {
  const [selectedMessage, setSelectedMessage] = useState<MessageRow | null>(
    null,
  );

  return (
    <>
      <DataTable<MessageRow>
        columns={MESSAGE_COLUMNS}
        data={data}
        onView={setSelectedMessage}
        onDelete={deleteContactMessage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <MessageDetailModal
        message={selectedMessage}
        onClose={() => setSelectedMessage(null)}
      />
    </>
  );
}
