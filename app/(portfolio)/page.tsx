import Hero from "../_components/portfolio/Hero";
import Socials from "../_components/portfolio/Socials";
import Skills from "../_components/portfolio/Skills";
import Experience from "../_components/portfolio/Experience";
import Education from "../_components/portfolio/Education";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pb-24">
      <Hero />
      <Socials />
      <div className="flex flex-col gap-4">
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
