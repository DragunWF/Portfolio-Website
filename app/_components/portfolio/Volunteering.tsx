import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import CompanyLogo from "./CompanyLogo";
import { Calendar } from "lucide-react";
import { calculateDuration } from "../../_utils/helpers";

export default function Volunteering() {
  const { volunteering } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="volunteering" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Volunteering Organizations
      </h3>
      <div className="flex flex-col gap-6">
        {volunteering.map((vol) => (
          <div
            key={vol.id}
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full text-left mb-4"
          >
            {/* Header Layout */}
            <div className="flex items-start gap-4 mb-4">
              {/* Logo container */}
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 overflow-hidden">
                <CompanyLogo
                  logoUrl={vol.logoUrl}
                  companyName={vol.organization}
                />
              </div>

              {/* Info block (Right of logo) */}
              <div className="flex flex-col mt-0.5">
                {/* Main Header: Role / position title */}
                <h3 className="text-slate-200 text-lg font-bold leading-tight">
                  {vol.role}
                </h3>
                {/* Subheader: Organization name */}
                <span className="text-emerald-450 text-sm font-semibold mt-1">
                  {vol.organization}
                </span>
                {/* Inline Metadata Row */}
                <div className="flex items-center text-slate-400 text-xs font-mono gap-1.5 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {vol.startDate} — {vol.endDate}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span>{calculateDuration(vol.startDate, vol.endDate)}</span>
                </div>
              </div>
            </div>

            {/* Indented Descriptions */}
            <div className="pl-16">
              {Array.isArray(vol.description) ? (
                <ul className="text-slate-300 text-sm leading-relaxed list-disc list-outside ml-4 space-y-1.5 marker:text-slate-500">
                  {vol.description.map((desc, i) => (
                    <li key={i} className="pl-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-300 text-sm leading-relaxed">
                  {vol.description}
                </p>
              )}

              {/* Skill Badges */}
              {vol.skills && vol.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {vol.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 select-none hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
