import { PORTFOLIO_DATA } from "../../_constants";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section className="px-6 max-w-5xl mx-auto py-8">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Professional Experience
      </h3>
      <div className="flex flex-col gap-8">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row gap-6 p-6 lg:p-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl transition-all duration-300 hover:border-slate-700 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Subtle glow effect behind the card for visual depth */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="md:w-1/4 shrink-0">
              <p className="text-sm font-semibold text-emerald-500 tracking-wider uppercase mb-1">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            
            <div className="md:w-3/4 flex flex-col">
              <h4 className="text-xl font-bold text-slate-100">
                {exp.role}
              </h4>
              <p className="text-lg text-slate-400 mt-1 mb-6">
                {exp.company}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-slate-950/50 text-slate-300 border border-slate-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
