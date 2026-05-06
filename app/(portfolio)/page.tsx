import { Suspense } from "react";
import Hero from "../_components/portfolio/Hero";
import Highlights from "../_components/portfolio/Highlights";
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
import BlogFallback from "../_components/fallbacks/BlogFallback";
import GalleryFallback from "../_components/fallbacks/GalleryFallback";
import ScrollReveal from "../_components/ui/ScrollReveal";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-16">
        <ScrollReveal delay={0.2} yOffset={30}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Highlights />
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <ScrollReveal>
            <Experience />
          </ScrollReveal>
          <ScrollReveal>
            <Education />
          </ScrollReveal>
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal>
            <Achievements />
          </ScrollReveal>
          <ScrollReveal>
            <Volunteering />
          </ScrollReveal>
          <ScrollReveal>
            <Suspense fallback={<BlogFallback />}>
              <Blog />
            </Suspense>
          </ScrollReveal>
          <ScrollReveal>
            <Suspense fallback={<GalleryFallback />}>
              <Gallery />
            </Suspense>
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
