"use client";

import { Edit, Trash2 } from "lucide-react";

interface DataTableProps {
  columns: string[];
  data: Record<string, unknown>[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
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
}: DataTableProps) {
  return (
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
                key={row.id as number}
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
                      onClick={() => onEdit(row.id as number)}
                      aria-label={`Edit row ${row.id}`}
                      className="text-slate-500 hover:text-emerald-500 transition-colors"
                    >
                      <Edit size={15} />
                    </button>
                    <button
                      onClick={() => onDelete(row.id as number)}
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
  );
}
