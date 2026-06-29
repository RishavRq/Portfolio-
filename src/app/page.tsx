import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GithubShowcase } from "@/components/sections/GithubShowcase";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <GithubShowcase />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
