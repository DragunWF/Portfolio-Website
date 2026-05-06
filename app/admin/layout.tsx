import Link from "next/link";
import SidebarNav from "@/app/_components/admin/SidebarNav";
import AdminBreadcrumbs from "@/app/_components/admin/AdminBreadcrumbs";
import { Search, LogOut } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Marc Plarisan",
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
          <AdminBreadcrumbs />

          {/* Right: Contextual Actions Placeholder */}
          <div />
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto relative">{children}</div>
      </main>
    </div>
  );
}
