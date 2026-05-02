import { Mail } from "lucide-react";
import { GitHubIcon } from "@/app/_components/icons/GithubIcon";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { FOOTER_LINKS } from "@/app/_constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-sm mt-auto relative z-10">
      <div className="px-6 md:px-8 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 font-medium">
          &copy; 2026 Marc Plarisan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={FOOTER_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-500 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={FOOTER_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${FOOTER_LINKS.email}`}
            className="text-slate-500 hover:text-emerald-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
