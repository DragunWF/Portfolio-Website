"use client";

import { useState } from "react";
import Image from "next/image";
import { AchievementData } from "../../_types";
import AchievementModal from "./AchievementModal";

interface AchievementsGridProps {
  achievements: AchievementData[];
}

export default function AchievementsGrid({
  achievements,
}: AchievementsGridProps) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementData | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setSelectedAchievement(ach)}
            className="relative w-full aspect-[4/3] rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group cursor-pointer"
          >
            {/* Background Image */}
            {ach.imageUrl && (
              <Image
                src={ach.imageUrl}
                alt={ach.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
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
              <div className="flex flex-wrap gap-2 mt-3">
                {ach.badgeText && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                    {ach.badgeText}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                  {ach.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal */}
      <AchievementModal
        achievement={selectedAchievement}
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </>
  );
}
