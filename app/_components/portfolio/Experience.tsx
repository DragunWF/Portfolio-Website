import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { Award, Diamond, Calendar, MapPin, ExternalLink } from "lucide-react";
import CompanyLogo from "./CompanyLogo";
import { calculateCompanyDuration } from "../../_utils/helpers";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="experience" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Professional Experience
      </h3>
      <div className="flex flex-col gap-8">
        {experience.map((expGroup) => (
          <div
            key={expGroup.id}
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full"
          >
            {/* Company Header Block */}
            <div className="flex items-start gap-4 mb-6">
              {/* Logo / Fallback */}
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 overflow-hidden">
                <CompanyLogo
                  logoUrl={expGroup.logoUrl}
                  companyName={expGroup.company}
                />
              </div>

              {/* Company Info */}
              <div className="flex flex-col mt-0.5">
                <h3 className="text-slate-200 text-xl font-bold leading-tight">
                  {expGroup.company}
                </h3>
                <div className="flex flex-wrap items-center text-slate-400 text-sm font-mono gap-x-2 gap-y-1 mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{calculateCompanyDuration(expGroup.roles)}</span>
                  </div>
                  {expGroup.location && (
                    <>
                      <span className="text-slate-600">•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        <span>{expGroup.location}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Nested Roles Timeline */}
            <div className="relative mt-4">
              {/* Vertical Connector Line */}
              <div className="absolute left-[15px] top-3.5 bottom-6 w-[1.5px] bg-slate-800"></div>

              <div className="flex flex-col gap-8">
                {expGroup.roles.map((role, index) => {
                  const isActive = index === 0; // Assuming first is most recent/active

                  return (
                    <div
                      key={role.id}
                      className="relative pl-10 w-full text-left"
                    >
                      {/* Timeline Bullet */}
                      <div className="absolute left-[15px] top-3.5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        {isActive ? (
                          <div className="relative flex items-center justify-center">
                            {/* Glowing outer ring */}
                            <div className="absolute w-4 h-4 rounded-full border border-emerald-500 bg-emerald-500/20 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                            {/* Inner dot */}
                            <div className="w-2 h-2 bg-emerald-500 rounded-full z-10"></div>
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 bg-slate-900 border border-slate-700 rounded-full hover:border-emerald-500/50 transition-colors"></div>
                        )}
                      </div>

                      {/* Role Header Info */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div className="flex flex-col">
                          <h4 className="text-slate-200 text-lg font-bold leading-tight">
                            {role.role}
                          </h4>
                          {/* Employment & Location details in green with green dot */}
                          <div className="flex items-center text-emerald-450 text-sm font-semibold gap-2 mt-1">
                            {role.employmentType && (
                              <span>{role.employmentType}</span>
                            )}
                            {role.employmentType && role.locationType && (
                              <span className="text-emerald-500/40 font-bold">
                                •
                              </span>
                            )}
                            {role.locationType && (
                              <span>{role.locationType}</span>
                            )}
                          </div>
                        </div>

                        {/* Date Pill */}
                        <div className="shrink-0 md:mt-0.5">
                          <span className="px-3.5 py-1 bg-slate-950/80 text-slate-350 text-xs font-mono rounded-full border border-slate-800 tracking-wider">
                            {role.startDate} — {role.endDate}
                          </span>
                        </div>
                      </div>

                      {/* Role Descriptions */}
                      {role.description && role.description.length > 0 && (
                        <ul className="text-slate-300 text-sm leading-relaxed mb-4 list-disc list-outside ml-4 space-y-1.5 marker:text-slate-500">
                          {role.description.map((desc, i) => (
                            <li key={i} className="pl-1">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skill Badges */}
                      {role.skills && role.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-5">
                          {role.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 select-none hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Skills/Details render block ends here */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
