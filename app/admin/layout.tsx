import Link from "next/link";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Lock,
  FileText,
  PenTool,
  Image,
  Upload,
  Search,
  LogOut,
} from "lucide-react";

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
        <nav className="flex-1 overflow-y-auto py-4">
          {/* Group 1: Portfolio Data (Locked) */}
          <h3 className="px-6 text-xs font-mono text-slate-500 mb-2">
            PORTFOLIO DATA
          </h3>

          <ul className="space-y-0.5">
            {[
              { label: "Skills Matrix", icon: Terminal },
              { label: "Professional Experience", icon: Briefcase },
              { label: "Education", icon: GraduationCap },
              { label: "Achievements", icon: Trophy },
              { label: "Volunteering", icon: Users },
            ].map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 px-6 py-2 text-slate-600 opacity-60 cursor-not-allowed"
              >
                <Icon size={16} />
                <span className="flex-1">{label}</span>
                <Lock size={12} className="ml-auto" />
              </li>
            ))}
          </ul>

          {/* Group 2: Blog */}
          <h3 className="px-6 text-xs font-mono text-slate-500 mt-6 mb-2">
            BLOG
          </h3>

          <ul className="space-y-0.5">
            {/* All Blog Posts – Active */}
            <li>
              <Link
                href="/admin/blog"
                className="flex items-center gap-3 px-6 py-2 bg-slate-900 border-l-2 border-emerald-500 text-emerald-500"
              >
                <FileText size={16} />
                <span>All Posts</span>
              </Link>
            </li>
            {/* Write New Post – Inactive */}
            <li>
              <Link
                href="/admin/blog/new"
                className="flex items-center gap-3 px-6 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-l-2 border-transparent transition-colors"
              >
                <PenTool size={16} />
                <span>Write New Post</span>
              </Link>
            </li>
          </ul>

          {/* Group 3: Media Vault */}
          <h3 className="px-6 text-xs font-mono text-slate-500 mt-6 mb-2">
            MEDIA VAULT
          </h3>

          <ul className="space-y-0.5">
            <li>
              <Link
                href="/admin/gallery"
                className="flex items-center gap-3 px-6 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-l-2 border-transparent transition-colors"
              >
                <Image size={16} />
                <span>Event Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/upload"
                className="flex items-center gap-3 px-6 py-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-l-2 border-transparent transition-colors"
              >
                <Upload size={16} />
                <span>Bulk Upload</span>
              </Link>
            </li>
          </ul>
        </nav>

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
