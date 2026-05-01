import { PORTFOLIO_DATA } from "../../_constants";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="max-w-5xl mx-auto w-full px-6 py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Education
      </h3>
      <div className="flex flex-col gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col md:flex-row gap-6 p-6 lg:p-8 bg-slate-900/40 border border-slate-800/60 rounded-2xl backdrop-blur-sm"
          >
            <div className="md:w-1/4 shrink-0 flex items-start">
              <p className="text-sm font-semibold text-emerald-500 tracking-wider uppercase mb-1">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>

            <div className="md:w-3/4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-emerald-500" />
                <h4 className="text-xl font-bold text-slate-100">
                  {edu.institution}
                </h4>
              </div>
              <p className="text-lg text-slate-400 mb-4 pl-9">
                {edu.degree}
              </p>
              
              <div className="pl-9">
                <p className="text-sm text-slate-500 italic border-l-2 border-slate-700 pl-4 py-1">
                  {edu.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
