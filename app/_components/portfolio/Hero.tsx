import { PORTFOLIO_DATA } from "../../_constants";

export default function Hero() {
  const { name, title, about } = PORTFOLIO_DATA.hero;

  return (
    <section className="max-w-5xl mx-auto w-full px-6 pt-32 pb-16 flex flex-col items-start">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100">
        {name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-emerald-500 font-medium mt-4">
        {title}
      </h2>
      <p className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
        {about}
      </p>
    </section>
  );
}
