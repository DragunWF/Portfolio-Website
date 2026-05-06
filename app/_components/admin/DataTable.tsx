"use client";

import { useState } from "react";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteModal from "./DeleteModal";

// ── Types ──────────────────────────────────────────────────────────────────

export interface Column<T> {
  header: string;
  accessor?: keyof T;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  onDelete: (id: string) => Promise<unknown> | void;
  onView?: (item: T) => void;
  onEdit?: (id: string) => void;
  totalPages?: number;
  currentPage?: number;
}

// ── Component ──────────────────────────────────────────────────────────────

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  onDelete,
  onView,
  onEdit,
  totalPages,
  currentPage,
}: DataTableProps<T>) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const hasActions = Boolean(onView || onEdit || onDelete);

  return (
    <>
      {/* ── Table ── */}
      <div className="w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/30">
        <table className="w-full">
          <thead className="border-b border-slate-800 bg-slate-900/50 text-xs uppercase font-mono text-slate-500 text-left">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.header}
                  className={`px-4 py-3 font-medium tracking-wider ${col.className ?? ""}`}
                >
                  {col.header}
                </th>
              ))}
              {hasActions && (
                <th className="px-4 py-3 font-medium tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="p-8 text-center text-slate-500 text-sm"
                >
                  No entries found.
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group last:border-0"
                >
                  {columns.map((col) => (
                    <td
                      key={col.header}
                      className={`p-4 text-sm text-slate-300 ${col.className ?? ""}`}
                    >
                      {col.render
                        ? col.render(row)
                        : col.accessor !== undefined
                          ? String(row[col.accessor] ?? "")
                          : null}
                    </td>
                  ))}

                  {hasActions && (
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {onView && (
                          <button
                            onClick={() => onView(row)}
                            aria-label={`View row ${row.id}`}
                            className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
                          >
                            <Eye size={15} />
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(row.id)}
                            aria-label={`Edit row ${row.id}`}
                            className="text-slate-500 hover:text-emerald-500 transition-colors cursor-pointer"
                          >
                            <Edit size={15} />
                          </button>
                        )}
                        <button
                          onClick={() => setDeletingId(row.id)}
                          aria-label={`Delete row ${row.id}`}
                          className="text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  )}
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
