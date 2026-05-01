"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Volunteering", href: "#volunteering" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tight text-slate-100 hover:text-emerald-500 transition-colors"
        >
          DragunWF
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Icon (Visual Only for now) */}
        <button className="md:hidden text-slate-300 hover:text-emerald-500 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
