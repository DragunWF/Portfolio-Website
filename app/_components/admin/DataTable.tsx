"use client";

import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteModal from "./DeleteModal";

interface DataTableProps {
  columns: string[];
  data: Record<string, unknown>[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => Promise<unknown> | void;
  totalPages?: number;
  currentPage?: number;
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

export default function DataTable({
  columns,
  data,
  onEdit,
  onDelete,
  totalPages,
  currentPage,
}: DataTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  return (
    <>
      {/* ── Table ── */}
      <div className="w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/30">
        <table className="w-full">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-xs uppercase font-mono text-slate-500 text-left">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 font-medium tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-8 text-center text-slate-500 text-sm"
                >
                  No entries found.
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={row.id as string}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group last:border-0"
                >
                  <td className="p-4 text-sm text-slate-300 font-medium max-w-xs truncate">
                    {row.title as string}
                  </td>
                  <td className="p-4 text-sm text-slate-300">
                    <StatusBadge status={row.status as string} />
                  </td>
                  <td className="p-4 text-sm text-slate-400">
                    {row.date as string}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onEdit(row.id as string)}
                        aria-label={`Edit row ${row.id}`}
                        className="text-slate-500 hover:text-emerald-500 transition-colors cursor-pointer"
                      >
                        <Edit size={15} />
                      </button>
                      <button
                        onClick={() => setDeletingId(row.id as string)}
                        aria-label={`Delete row ${row.id}`}
                        className="text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      {totalPages !== undefined &&
        currentPage !== undefined &&
        totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-slate-400 font-medium">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={currentPage === 1 ? "#" : `?page=${currentPage - 1}`}
                className={`px-3 py-1.5 text-sm font-medium rounded-md border border-slate-800 transition-colors ${
                  currentPage === 1
                    ? "text-slate-500 opacity-50 cursor-not-allowed bg-slate-900/20"
                    : "text-slate-300 hover:text-emerald-500 hover:border-emerald-500/50 bg-slate-900/50"
                }`}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
              >
                Prev
              </Link>
              <Link
                href={
                  currentPage === totalPages ? "#" : `?page=${currentPage + 1}`
                }
                className={`px-3 py-1.5 text-sm font-medium rounded-md border border-slate-800 transition-colors ${
                  currentPage === totalPages
                    ? "text-slate-500 opacity-50 cursor-not-allowed bg-slate-900/20"
                    : "text-slate-300 hover:text-emerald-500 hover:border-emerald-500/50 bg-slate-900/50"
                }`}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
              >
                Next
              </Link>
            </div>
          </div>
        )}

      {/* ── Delete Confirmation Modal ── */}
      <DeleteModal
        isOpen={deletingId !== null}
        onClose={() => setDeletingId(null)}
        onConfirm={async () => {
          if (deletingId) {
            await onDelete(deletingId);
          }
          setDeletingId(null);
        }}
      />
    </>
  );
}
