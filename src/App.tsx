import BackgroundEffects from "./components/BackgroundEffects";
import Footer from "./components/Footer";

import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden relative">
      <BackgroundEffects />

      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
