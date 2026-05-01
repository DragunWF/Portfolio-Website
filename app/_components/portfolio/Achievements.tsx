import { PORTFOLIO_DATA } from "../../_constants";
import { Trophy, Award, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;
  const tier1 = achievements.filter((a) => a.tier === 1);
  const tier2 = achievements.filter((a) => a.tier === 2);

  return (
    <section id="achievements" className="px-6 max-w-5xl mx-auto py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Achievements
      </h3>
      
      {/* Tier 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tier1.map((ach) => (
          <div
            key={ach.id}
            className="flex flex-col p-6 bg-slate-900/60 border border-slate-700/60 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-sm"
          >
            <Trophy className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-bold text-slate-100 mb-2">
              {ach.title}
            </h4>
            <p className="text-lg font-medium text-emerald-400 mb-1">
              {ach.event}
            </p>
            {ach.project && (
              <p className="text-sm text-slate-400 mt-auto pt-4 border-t border-slate-800/50">
                {ach.project}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Tier 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {tier2.map((ach) => (
          <div
            key={ach.id}
            className="flex items-start gap-3 p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl"
          >
            <Award className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-200">
                {ach.title}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {ach.event}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
        <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg font-medium transition-all hover:bg-emerald-500 hover:text-slate-950 w-full sm:w-auto justify-center">
          <ImageIcon className="w-4 h-4" />
          View Achievement Gallery
        </button>
        <a
          href="https://linkedin.com/in/marc-plarisan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg font-medium transition-all hover:bg-slate-700 hover:text-slate-100 w-full sm:w-auto justify-center"
        >
          <ExternalLink className="w-4 h-4" />
          View Certifications on LinkedIn
        </a>
      </div>
    </section>
  );
}
