import Link from "next/link";
import SidebarNav from "@/app/_components/admin/SidebarNav";
import { Search, LogOut } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Plarisan | Admin Dashboard",
  description: "Admin Dashboard for Marc Plarisan's Portfolio Website.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden text-sm font-sans text-slate-300">
      {/* ── Sidebar ── */}
      <aside className="flex flex-col w-64 h-full border-r border-slate-800 bg-slate-950 shrink-0">
        {/* Sidebar Header */}
        <div className="p-6">
          <p className="font-bold text-emerald-500">DragunWF Admin</p>
          <Link
            href="/"
            className="text-slate-500 hover:text-slate-300 transition-colors text-xs mt-1 inline-block"
          >
            ← View Live Portfolio
          </Link>
        </div>

        {/* Scrollable Nav */}
        <SidebarNav />

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-800 mt-auto">
          {/* System Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-500">Supabase: Connected</span>
          </div>
          {/* Logout */}
          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-slate-500 hover:text-red-400 transition-colors"
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main Workspace ── */}
      <main className="flex-1 flex flex-col h-full bg-slate-900/30">
        {/* Top HUD */}
        <header className="h-16 w-full border-b border-slate-800 flex items-center justify-between px-8 shrink-0">
          {/* Left: Breadcrumbs */}
          <span className="text-slate-500 font-mono">
            Admin / System / Ready
          </span>

          {/* Center: Command Palette Search */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search or jump to... (Cmd + K)"
              className="bg-slate-900 border border-slate-800 rounded-md py-1.5 pl-9 pr-4 w-64 text-slate-400 focus:border-emerald-500/50 outline-none placeholder:text-slate-600 text-xs"
            />
          </div>

          {/* Right: Contextual Actions Placeholder */}
          <div />
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto relative">{children}</div>
      </main>
    </div>
  );
}
