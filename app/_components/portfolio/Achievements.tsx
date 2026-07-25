import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import AchievementsGrid from "./AchievementsGrid";

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;
  const featuredAchievements = achievements.filter((a) => a.isFeatured);

  return (
    <SectionContainer id="achievements" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Hackathons / Competitions
      </h3>

      <AchievementsGrid achievements={featuredAchievements} />

      {/* Action Button */}
      <div className="flex justify-center mt-8">
        <Link href="/achievements">
          <button className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-medium transition-all hover:border-emerald-500/40 hover:text-emerald-400">
            Explore All 10+ Hackathons & Competition Placements
            <ChevronRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </SectionContainer>
  );
}
