import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;
  const featuredAchievements = achievements.filter((a) => a.isFeatured);

  return (
    <SectionContainer id="achievements" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Hackathons / Competitions
      </h3>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {featuredAchievements.map((ach) => (
          <div
            key={ach.id}
            className="relative w-full aspect-[4/3] rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group"
          >
            {/* Background Image */}
            {ach.imageUrl && (
              <Image
                src={ach.imageUrl}
                alt={ach.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Text Layout */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
              <h4 className="text-xl font-bold text-slate-50">{ach.title}</h4>
              <p className="text-sm font-medium text-emerald-400 mt-1">
                {ach.event}
              </p>
              {ach.badgeText && (
                <span className="self-start mt-3 px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                  {ach.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-8">
        <Link href="/achievements">
          <button className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-medium transition-all hover:border-emerald-500/40 hover:text-emerald-400">
            Explore All Hackathons & Competition Placements
            <ChevronRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </SectionContainer>
  );
}
