import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AvailabilityBadge from "./components/AvailabilityBadge";

export default function Home() {
  return (
    <>
      <Navbar />
      <AvailabilityBadge />
      <main style={{ paddingTop: "64px" }}>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
