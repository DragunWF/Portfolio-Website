"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

const portfolioLinks = [
  { label: "Skills Matrix", icon: Terminal },
  { label: "Professional Experience", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "Achievements", icon: Trophy },
  { label: "Volunteering", icon: Users },
];

const blogLinks = [
  { href: "/admin/blog", label: "All Posts", icon: FileText },
  { href: "/admin/blog/new", label: "Write New Post", icon: PenTool },
];

const mediaLinks = [
  { href: "/admin/gallery", label: "Event Gallery", icon: Image },
  { href: "/admin/gallery/new", label: "Upload Image", icon: Upload },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-4">
      {/* NOTE: Feature to be considered for implementation (tentative) */}
      {/* Group 1: Portfolio Data (Locked) */}
      {/* <h3 className="px-6 text-xs font-mono text-slate-500 mb-2 uppercase">
        Portfolio Data
      </h3>
      <ul className="space-y-0.5 mb-6">
        {portfolioLinks.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-3 px-6 py-2 text-slate-600 opacity-60 cursor-not-allowed"
          >
            <Icon size={16} />
            <span className="flex-1">{label}</span>
            <Lock size={12} className="ml-auto" />
          </li>
        ))}
      </ul> */}

      {/* Group 2: Blog */}
      <h3 className="px-6 text-xs font-mono text-slate-500 mb-2 uppercase">
        Blog
      </h3>
      <ul className="space-y-0.5 mb-6">
        {blogLinks.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/admin/blog"
              ? pathname.startsWith("/admin/blog") &&
                pathname !== "/admin/blog/new"
              : pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-6 py-2 transition-colors border-l-2 ${
                  isActive
                    ? "bg-slate-900 border-emerald-500 text-emerald-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-transparent"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Group 3: Media Vault */}
      <h3 className="px-6 text-xs font-mono text-slate-500 mb-2 uppercase">
        Media Vault
      </h3>
      <ul className="space-y-0.5">
        {mediaLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-6 py-2 transition-colors border-l-2 ${
                  isActive
                    ? "bg-slate-900 border-emerald-500 text-emerald-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-transparent"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
