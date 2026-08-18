import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TechStack from "@/sections/TechStack";
import Contact from "@/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GlobalBackground from "@/components/ui/GlobalBackground";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
