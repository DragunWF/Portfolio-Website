import { PORTFOLIO_DATA } from "../../_constants";
import { Code, Keyboard, Trophy, Newspaper } from "lucide-react";
import { LinkedInIconHighlight } from "../icons/LinkedinIcon";
import SectionContainer from "../layout/SectionContainer";

const IconMap: Record<string, React.ElementType> = {
  linkedin: LinkedInIconHighlight,
  code: Code,
  keyboard: Keyboard,
  trophy: Trophy,
  newspaper: Newspaper,
};

export default function Highlights() {
  const { highlights } = PORTFOLIO_DATA;

  return (
    <SectionContainer className="pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {highlights.map((item) => {
          const Icon = IconMap[item.iconName] || Trophy;

          const content = (
            <>
              <Icon className="w-6 h-6 text-emerald-500 mb-3" />
              <span className="text-slate-200 font-semibold text-sm sm:text-base mb-1">
                {item.label}
              </span>
              <span className="text-slate-400 text-xs sm:text-xs">
                {item.value}
              </span>
            </>
          );

          const className =
            "flex flex-col items-center justify-center text-center p-6 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors";

          if (item.url) {
            return (
              <a
                key={item.id}
                href={item.url}
                target={item.url.startsWith("https") ? "_blank" : "_self"}
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
    </SectionContainer>
  );
}
