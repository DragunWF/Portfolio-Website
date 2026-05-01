import { PORTFOLIO_DATA } from "../../_constants";
import { Code, Keyboard, Trophy, Newspaper } from "lucide-react";
import { LinkedinIcon } from "../icons/LinkedinIcon";

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
    <section className="max-w-5xl mx-auto w-full px-6 pb-20">
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
