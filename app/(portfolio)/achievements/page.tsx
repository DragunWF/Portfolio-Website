import Link from "next/link";
import { PORTFOLIO_DATA } from "../../_constants";
import {
  FeaturedAchievements,
  HonorsVictories,
  FinalistTrials,
} from "../../_components/portfolio/ArchiveTiers";

export const metadata = {
  title: "Marc Plarisan | Achievements",
  description:
    "A complete chronicle of my competitive hackathons, programming placements, and finalist honors.",
};

export default function AchievementsPage() {
  const { achievements } = PORTFOLIO_DATA;

  // Categorize the achievements based on tiers and features
  const pinnacleConquests = achievements.filter((a) => a.isFeatured);
  const honorsVictories = achievements.filter(
    (a) => a.tier === 1 && !a.isFeatured,
  );
  const finalistTrials = achievements.filter(
    (a) => a.tier === 2 && !a.isFeatured,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-12 px-6 md:px-8 max-w-5xl mx-auto">
      {/* Sticky Header — Sticked below Navbar (h-16) */}
      <header className="sticky top-16 z-40 bg-slate-950/90 backdrop-blur-md pt-4 pb-6 border-b border-slate-800/60 mb-12">
        <Link
          href="/"
          className="inline-block text-slate-500 hover:text-emerald-500 transition-colors text-sm font-medium mb-6"
        >
          &larr; Return to Home Page
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            Hackathons & Competitions
          </h1>
        </div>
      </header>

      {/* Render the sections */}
      {pinnacleConquests.length > 0 && (
        <FeaturedAchievements achievements={pinnacleConquests} />
      )}

      {honorsVictories.length > 0 && (
        <HonorsVictories achievements={honorsVictories} />
      )}

      {finalistTrials.length > 0 && (
        <FinalistTrials achievements={finalistTrials} />
      )}
    </main>
  );
}
