import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
