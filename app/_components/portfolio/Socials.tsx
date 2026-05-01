import { PORTFOLIO_DATA } from "../../_constants";
import { Code, Keyboard, Trophy, Newspaper } from "lucide-react";

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconMap: Record<string, React.ElementType> = {
  linkedin: LinkedinIcon,
  code: Code,
  keyboard: Keyboard,
  trophy: Trophy,
  newspaper: Newspaper,
};

export default function Socials() {
  const { highlights } = PORTFOLIO_DATA;

  return (
    <section className="px-6 max-w-5xl mx-auto pb-20">
      <div className="flex flex-wrap gap-4">
        {highlights.map((item) => {
          const Icon = IconMap[item.iconName] || Trophy;

          const content = (
            <>
              <Icon className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {item.value}
                </span>
              </div>
            </>
          );

          const className =
            "flex items-center gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-4 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-sm";

          if (item.url) {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={item.id} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
