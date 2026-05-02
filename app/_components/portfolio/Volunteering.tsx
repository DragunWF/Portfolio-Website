import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";

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
            className="flex flex-col p-6 bg-slate-900/80 rounded-xl border border-slate-800 transition-colors hover:border-slate-700 w-full text-left gap-1 mb-4"
          >
            {/* Top Row: Title (Left) and Dates (Right) */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
              <h3 className="text-slate-200 text-xl font-bold flex items-center gap-2">
                {vol.role}
              </h3>
              <span className="text-slate-400 text-sm font-mono tracking-widest uppercase shrink-0 mt-1">
                {vol.startDate} - {vol.endDate}
              </span>
            </div>

            {/* Subtitle: Organization */}
            <p className="text-emerald-500 text-base mb-2">
              {vol.organization}
            </p>

            {/* Description: Handle both String and Array (Bulleted List) */}
            <div className="text-slate-400 text-sm mt-2">
              {Array.isArray(vol.description) ? (
                <ul className="list-disc list-inside space-y-1">
                  {vol.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{vol.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
