import Hero from "../_components/portfolio/Hero";
import Socials from "../_components/portfolio/Socials";
import Skills from "../_components/portfolio/Skills";
import Experience from "../_components/portfolio/Experience";
import Education from "../_components/portfolio/Education";
import Volunteering from "../_components/portfolio/Volunteering";
import Achievements from "../_components/portfolio/Achievements";
import Projects from "../_components/portfolio/Projects";
import Blog from "../_components/portfolio/Blog";
import Gallery from "../_components/portfolio/Gallery";
import Contact from "../_components/portfolio/Contact";
import Footer from "../_components/layout/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-16">
        <Hero />
        <Socials />
        <div className="flex flex-col gap-4">
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Volunteering />
          <Blog />
          <Gallery />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
