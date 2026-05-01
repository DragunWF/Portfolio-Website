import { PORTFOLIO_DATA } from "@/app/_constants";
import { Gamepad2, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/app/_components/icons/GithubIcon";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  // LAYOUT TWEAK: Adjust max-width here (e.g., max-w-5xl, max-w-6xl, max-w-7xl) to control desktop margins
  return (
    <section id="projects" className="max-w-7xl mx-auto w-full px-6 md:px-8 py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => {
          const isGithub = proj.platform === "github";
          const Icon = isGithub ? GitHubIcon : Gamepad2;

          return (
            <div
              key={proj.id}
              className="flex flex-col p-8 bg-slate-900/60 border border-slate-800 rounded-2xl transition-all duration-300 hover:border-slate-600 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-emerald-500 transition-colors group-hover:bg-slate-800">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-100">
                  {proj.title}
                </h4>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed grow">
                {proj.description}
              </p>

              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-colors border border-slate-700"
              >
                {proj.buttonText}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
