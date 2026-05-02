import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="experience" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Professional Experience
      </h3>
      <div className="flex flex-col gap-8">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full text-left gap-1 mb-4"
          >
            {/* Top Row: Title (Left) and Dates (Right) */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
              <h3 className="text-slate-200 text-xl font-bold flex items-center gap-2">
                {exp.role}
              </h3>
              <span className="text-slate-400 text-sm font-mono tracking-widest uppercase shrink-0 mt-1">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            {/* Subtitle: Company */}
            <p className="text-emerald-500 text-base mb-2">{exp.company}</p>

            {/* Description */}
            {exp.description && (
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
            )}

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {exp.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-transparent text-emerald-500 text-xs font-medium rounded-full border border-emerald-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
