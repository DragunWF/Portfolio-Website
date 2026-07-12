import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { GraduationCap, Sparkles, Trophy, Award, ArrowRight } from "lucide-react";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="education" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Education
      </h3>
      <div className="flex flex-col gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full text-left gap-1 mb-4"
          >
            {/* Top Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
              <h3 className="text-slate-200 text-xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-500" />
                {edu.institution}
              </h3>
              <span className="text-slate-400 text-sm font-mono tracking-widest uppercase shrink-0 mt-1">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>

            {/* Degree */}
            <p className="text-slate-300 text-base mb-4">{edu.degree}</p>

            {/* Grade / Honor Attunement Box */}
            {edu.grade && (
              <div className="flex flex-col p-4 mb-6 rounded-lg bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all">
                <h4 className="text-emerald-500 font-bold text-lg mb-1">
                  🏅 {edu.grade.honor}
                </h4>
                <p className="text-emerald-400/80 text-sm">
                  {edu.grade.details}
                </p>
              </div>
            )}

            {/* Divider: Trials & Achievements */}
            {edu.achievements && edu.achievements.length > 0 && (
              <>
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                  <Sparkles className="w-4 h-4 text-emerald-500/50" />
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                </div>

                <div className="mb-2">
                  <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-emerald-500" />
                    Trials & Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {edu.achievements.map((ach) => (
                      <div key={ach.id} className="flex gap-3">
                        <div className="mt-1">
                          <Trophy className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-200 font-medium text-sm">
                            {ach.title}
                          </span>
                          <span className="text-slate-400 text-xs mt-1 leading-relaxed">
                            {ach.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Divider: Guild Allegiances (Leadership) */}
            {edu.leadership && edu.leadership.length > 0 && (
              <>
                <div className="flex items-center justify-center gap-4 my-6">
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                  <Award className="w-4 h-4 text-emerald-500/50" />
                  <div className="flex-1 h-[1px] bg-slate-800"></div>
                </div>

                <div className="mb-2">
                  <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-500" />
                    Guild Allegiances
                  </h4>
                  <div className="flex flex-col gap-4">
                    {edu.leadership.map((lead) => (
                      <div key={lead.id} className="flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800/50">
                        <div className="flex flex-col mb-2 md:mb-0">
                          <span className="text-slate-200 font-medium text-sm">
                            {lead.role}
                          </span>
                          <span className="text-emerald-500/80 text-xs mt-0.5">
                            {lead.organization}
                          </span>
                        </div>
                        <span className="text-slate-500 font-mono text-xs">
                          {lead.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Footnote Anchor */}
            <div className="mt-8 pt-4 border-t border-slate-800/50 text-center">
              <a 
                href="#achievements" 
                className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <span className="group-hover:underline">Note: For a comprehensive breakdown of all competition rankings, please refer to the Honors & Awards section on this profile.</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
