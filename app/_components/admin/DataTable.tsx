"use client";

import { useState } from "react";
import { AlertTriangle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

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
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirmDelete = async () => {
    if (!deletingId) return;
    setIsDeleting(true);
    try {
      await onDelete(deletingId);
    } catch (err) {
      console.error("[DataTable] onDelete threw an error:", err);
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  };

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
                        className="text-slate-500 hover:text-emerald-500 transition-colors"
                      >
                        <Edit size={15} />
                      </button>
                      <button
                        onClick={() => setDeletingId(row.id as string)}
                        aria-label={`Delete row ${row.id}`}
                        className="text-slate-500 hover:text-red-400 transition-colors"
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
      {deletingId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-xl shadow-2xl max-w-sm w-full relative overflow-hidden">
            {/* Ambient red glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Icon */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <AlertTriangle size={20} className="text-red-500" />
            </div>

            {/* Text */}
            <h2 className="text-slate-200 font-semibold text-base mb-1 relative">
              Confirm Deletion
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed relative">
              Are you sure you want to delete this item?{" "}
              <span className="text-slate-300">
                This action cannot be undone.
              </span>
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 mt-6 relative">
              <button
                onClick={() => setDeletingId(null)}
                disabled={isDeleting}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-sm bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeleting ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-red-500/30 border-t-red-500 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={14} />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
