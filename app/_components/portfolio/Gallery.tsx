import { PORTFOLIO_DATA } from "../../_constants";
import { Image as ImageIcon, ChevronRight } from "lucide-react";

export default function Gallery() {
  const { gallery } = PORTFOLIO_DATA;

  return (
    <section className="px-6 max-w-5xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
          Event Gallery
        </h3>
      </div>

      {/* Grid Layout mimicking Masonry with varied heights */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {gallery.map((item, index) => {
          const isLarge = index === 0;
          return (
            <div
              key={item.id}
              className={`bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden relative group cursor-pointer
                ${isLarge ? 'col-span-2 row-span-2 min-h-[250px] md:min-h-[300px]' : 'min-h-[120px] md:min-h-[142px]'}`}
            >
              <ImageIcon className="w-8 h-8 text-slate-600 opacity-50 group-hover:opacity-100 transition-opacity group-hover:text-emerald-500" />
              <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-sm font-medium text-white px-2 text-center">{item.altText}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-slate-300 border border-slate-700 rounded-lg font-medium transition-all hover:border-emerald-500 hover:text-emerald-400">
          View Full Gallery <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
