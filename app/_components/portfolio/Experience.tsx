import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { Award, Diamond } from "lucide-react";
import CompanyLogo from "./CompanyLogo";

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
                <span className="text-slate-400 text-sm font-mono mt-1">
                  {expGroup.duration}
                  {expGroup.location && ` • ${expGroup.location}`}
                </span>
              </div>
            </div>

            {/* Nested Roles Timeline */}
            <div className="relative pl-6 ml-[1.125rem]">
              {/* Vertical Connector Line */}
              <div className="absolute left-[1.125rem] top-2 bottom-6 w-[1.5px] bg-slate-800"></div>

              <div className="flex flex-col gap-8">
                {expGroup.roles.map((role, index) => {
                  const isActive = index === 0; // Assuming first is most recent/active

                  return (
                    <div key={role.id} className="relative z-10">
                      {/* Timeline Bullet */}
                      <div className="absolute -left-[1.55rem] top-1.5 flex items-center justify-center w-3 h-3">
                        {isActive ? (
                          <>
                            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-pulse opacity-50"></div>
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
                          </>
                        ) : (
                          <div className="w-2.5 h-2.5 bg-slate-900 border border-slate-500 rounded-full"></div>
                        )}
                      </div>

                      {/* Role Header Info */}
                      <div className="flex flex-col mb-3">
                        <h4 className="text-slate-200 text-lg font-bold">
                          {role.role}
                        </h4>
                        <div className="flex flex-wrap items-center text-slate-400 text-sm font-mono gap-2 mt-1">
                          {role.employmentType && (
                            <span>{role.employmentType}</span>
                          )}
                          {role.employmentType && <span>•</span>}
                          <span>
                            {role.startDate} - {role.endDate}
                          </span>
                          {role.locationType && <span>•</span>}
                          {role.locationType && (
                            <span>{role.locationType}</span>
                          )}
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
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                          {role.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              {i > 0 && (
                                <Diamond className="w-1.5 h-1.5 text-slate-600 fill-slate-600" />
                              )}
                              <span className="text-emerald-500 text-xs font-mono">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Holographic Certificate Sub-Card */}
                      {role.certificate && (
                        <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-lg flex items-center gap-3 hover:border-emerald-500/20 max-w-lg mt-4 transition-colors">
                          <div className="p-2 bg-purple-500/10 rounded-md border border-purple-500/20 shrink-0">
                            <Award className="w-5 h-5 text-purple-400" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-slate-300 text-sm font-medium truncate">
                              {role.certificate.title}
                            </span>
                            {role.certificate.url &&
                              role.certificate.url !== "#" && (
                                <a
                                  href={role.certificate.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-emerald-500 hover:text-emerald-400 text-xs mt-0.5 inline-flex"
                                >
                                  View Credential
                                </a>
                              )}
                          </div>
                        </div>
                      )}
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
