import { PORTFOLIO_DATA } from "../../_constants";
import { Users } from "lucide-react";

export default function Volunteering() {
  const { volunteering } = PORTFOLIO_DATA;

  // LAYOUT TWEAK: Adjust max-width here (e.g., max-w-5xl, max-w-6xl, max-w-7xl) to control desktop margins
  return (
    <section
      id="volunteering"
      className="max-w-7xl mx-auto w-full px-6 md:px-8 py-8 scroll-mt-20"
    >
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Volunteering Organizations
      </h3>
      <div className="flex flex-col gap-6">
        {volunteering.map((vol) => (
          <div
            key={vol.id}
            className="flex flex-col md:flex-row gap-6 p-6 lg:p-8 bg-slate-900/40 border border-slate-800/60 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-slate-700 relative overflow-hidden"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="md:w-1/4 shrink-0 flex items-start">
              <p className="text-sm font-semibold text-emerald-500 tracking-wider uppercase mb-1">
                {vol.role}
              </p>
            </div>

            <div className="md:w-3/4 flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <h4 className="text-xl font-bold text-slate-100 leading-snug">
                  {vol.organization}
                </h4>
              </div>

              <div className="pl-9 text-slate-400">
                {Array.isArray(vol.description) ? (
                  <ul className="list-disc list-outside ml-4 space-y-2">
                    {vol.description.map((item, index) => (
                      <li key={index} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed">{vol.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
