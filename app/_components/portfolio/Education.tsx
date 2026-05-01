import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="education" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Education
      </h3>
      <div className="flex flex-col gap-6">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full text-left gap-1 mb-4">
            
            {/* Top Row: Title (Left) and Dates (Right) */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
              <h3 className="text-slate-200 text-xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-500" />
                {edu.institution}
              </h3>
              <span className="text-slate-400 text-sm font-mono tracking-widest uppercase shrink-0 mt-1">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>

            {/* Subtitle: Degree */}
            <p className="text-slate-300 text-base mb-2">
              {edu.degree}
            </p>
            
            {/* Description / Placeholder */}
            <p className="text-slate-400 text-sm italic mt-2">
              {edu.details}
            </p>

          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
