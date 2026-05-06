"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";

export default function Skills() {
  const [view, setView] = useState<"focus" | "archive">("focus");

  const { currentFocus, fullArchive } = PORTFOLIO_DATA.skills;
  const displayedSkills = view === "focus" ? currentFocus : fullArchive;

  return (
    <SectionContainer id="skills" className="py-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Tech Stack
        </h3>
        <div className="bg-slate-900 border border-slate-800 p-1 rounded-full flex">
          <button
            onClick={() => setView("focus")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              view === "focus"
                ? "bg-emerald-500/10 text-emerald-500"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Current Focus
          </button>
          <button
            onClick={() => setView("archive")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              view === "archive"
                ? "bg-emerald-500/10 text-emerald-500"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Full Archive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayedSkills.map((skill, index) => {
          // If we're expanding to the archive, reset the delay for the new items so they animate immediately
          const isNewItem = view === "archive" && index >= currentFocus.length;
          const staggerDelay = isNewItem
            ? (index - currentFocus.length) * 30
            : index * 30;

          return (
            <div
              key={skill}
              style={{ animationDelay: `${staggerDelay}ms` }}
              className="px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-center text-slate-300 text-sm hover:border-emerald-500 transition-colors select-none flex items-center justify-center animate-fade-in-up"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
