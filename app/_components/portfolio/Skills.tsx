import { PORTFOLIO_DATA } from "../../_constants";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="px-6 max-w-5xl mx-auto py-8">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Technical Arsenal
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group flex items-center justify-center p-4 bg-slate-900/60 border border-slate-800 rounded-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-sm cursor-default"
          >
            <span className="font-medium text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
