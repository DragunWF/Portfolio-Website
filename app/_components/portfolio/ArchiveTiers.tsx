"use client";

import { useState } from "react";
import Image from "next/image";
import { AchievementData } from "../../_types";
import AchievementModal from "./AchievementModal";

export function FeaturedAchievements({
  achievements,
}: {
  achievements: AchievementData[];
}) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementData | null>(null);

  return (
    <section className="mb-16">
      <h3 className="text-xl font-bold tracking-tight text-slate-100 mb-6 border-l-2 border-emerald-500 pl-3">
        Featured Achievements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setSelectedAchievement(ach)}
            className="relative w-full aspect-[4/3] rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group cursor-pointer"
          >
            {ach.imageUrl && (
              <Image
                src={ach.imageUrl}
                alt={ach.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
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

      <AchievementModal
        achievement={selectedAchievement}
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}

export function HonorsVictories({
  achievements,
}: {
  achievements: AchievementData[];
}) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementData | null>(null);

  return (
    <section className="mb-16">
      <h3 className="text-xl font-bold tracking-tight text-slate-100 mb-6 border-l-2 border-emerald-500/60 pl-3">
        Honors & Victories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setSelectedAchievement(ach)}
            className="flex flex-col p-5 bg-slate-900/80 border border-slate-800/80 rounded-2xl transition-colors hover:border-emerald-500/30 cursor-pointer group"
          >
            <div className="h-40 w-full relative rounded-xl border border-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.03)] overflow-hidden mb-4 shrink-0">
              {ach.imageUrl ? (
                <Image
                  src={ach.imageUrl}
                  alt={ach.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-500 text-xs">No Image</span>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <h4 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                {ach.title}
              </h4>
              <p className="text-sm text-slate-400 mt-1 mb-3">{ach.event}</p>
              {ach.badgeText && (
                <span className="mt-auto self-start px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  {ach.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <AchievementModal
        achievement={selectedAchievement}
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}

export function FinalistTrials({
  achievements,
}: {
  achievements: AchievementData[];
}) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementData | null>(null);

  return (
    <section className="mb-16">
      <h3 className="text-xl font-bold tracking-tight text-slate-100 mb-6 border-l-2 border-emerald-500/30 pl-3">
        Finalist Trials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setSelectedAchievement(ach)}
            className="flex flex-col sm:flex-row bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden transition-all hover:border-emerald-500/20 p-4 gap-4 cursor-pointer group"
          >
            <div className="sm:w-5/12 h-32 relative rounded-lg border border-slate-800 overflow-hidden shrink-0">
              {ach.imageUrl ? (
                <Image
                  src={ach.imageUrl}
                  alt={ach.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-500 text-xs">No Image</span>
                </div>
              )}
            </div>
            <div className="sm:w-7/12 flex flex-col justify-center">
              <h4 className="text-base font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                {ach.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 mb-2">{ach.event}</p>
              {ach.badgeText && (
                <span className="self-start px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[9px] font-bold uppercase tracking-wider">
                  {ach.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <AchievementModal
        achievement={selectedAchievement}
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}
