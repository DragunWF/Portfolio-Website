"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
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
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-emerald-500 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-slate-950/95 border-b border-slate-800/60 backdrop-blur-md grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
