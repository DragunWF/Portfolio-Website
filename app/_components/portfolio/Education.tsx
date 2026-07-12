import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import CompanyLogo from "./CompanyLogo";
import { Calendar, Trophy, Award, Info } from "lucide-react";
import { calculateDuration } from "../../_utils/helpers";

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
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-all hover:border-slate-700 hover:shadow-emerald-500/5 w-full text-left"
          >
            {/* Header Layout */}
            <div className="flex items-start gap-4">
              {/* Logo container */}
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 overflow-hidden">
                <CompanyLogo
                  logoUrl={edu.logoUrl}
                  companyName={edu.institution}
                />
              </div>

              {/* Info block (Right of logo) */}
              <div className="flex flex-col mt-0.5 w-full">
                {/* Main Header: Institution title */}
                <div className="flex justify-between items-start w-full">
                  <h3 className="text-slate-100 text-lg font-bold leading-tight">
                    {edu.institution}
                  </h3>
                </div>
                {/* Subheader: Degree name */}
                <span className="text-slate-300 text-sm font-medium mt-1">
                  {edu.degree}
                </span>
                {/* Inline Metadata Row */}
                <div className="flex items-center text-slate-400 text-xs font-mono gap-1.5 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Spotlight Grade Pill */}
            {edu.grade && (
              <div className="border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-medium text-sm rounded-full py-1.5 px-4 inline-flex items-center gap-2 mt-6 transition-all hover:bg-emerald-500/15 hover:border-emerald-500/40 w-fit">
                🏅 Latin Honors: {edu.grade.honor}
              </div>
            )}

            {/* List Layout Columns (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Left Column: Competitions */}
              <div>
                <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2 text-base border-b border-slate-800/80 pb-2">
                  <Trophy className="w-4 h-4 text-emerald-500" />
                  Key Competitions & Achievements
                </h4>
                <div className="flex flex-col">
                  {edu.achievements?.map((ach) => (
                    <div
                      key={ach.id}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed mb-4"
                    >
                      <span className="flex-shrink-0 text-base leading-tight mt-0.5">
                        {ach.emoji}
                      </span>
                      <span>
                        <strong className="text-slate-200 font-bold">
                          {ach.title}
                        </strong>{" "}
                        — {ach.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Recognitions */}
              <div>
                <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2 text-base border-b border-slate-800/80 pb-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  Academic & Leadership Recognition
                </h4>
                <div className="flex flex-col">
                  {edu.leadership?.map((lead) => (
                    <div
                      key={lead.id}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed mb-4"
                    >
                      <span className="flex-shrink-0 text-base leading-tight mt-0.5">
                        {lead.emoji}
                      </span>
                      <span>
                        <strong className="text-slate-200 font-bold">
                          {lead.role}
                        </strong>{" "}
                        {lead.organization}{" "}
                        <span className="text-slate-400">
                          ({lead.duration})
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note Banner */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-lg flex items-start md:items-center gap-3 text-sm text-slate-400 mt-8 hover:border-slate-700 transition-colors">
              <Info className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 md:mt-0" />
              <span>
                Note: For a comprehensive breakdown of all competition rankings,
                please refer to the Honors & Awards section on this profile.
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
