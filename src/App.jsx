import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <Experience />
      <Skills />
      <Projects />
      <Publication />
      <Certificates />
      <Footer />
    </>
  );
}

export default App;