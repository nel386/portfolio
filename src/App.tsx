import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";

const App = () => {
  const sections = ["home", "about", "skills", "projects", "contact", "footer"];

  const handleScroll = (e: WheelEvent) => {
    const currentSection = sections.reduce((current, id) => {
      const element = document.getElementById(id);
      return element &&
        element.getBoundingClientRect().top < window.innerHeight / 2
        ? id
        : current;
    }, "home");

    const currentIndex = sections.indexOf(currentSection);

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      scroll.scrollTo(
        document.getElementById(sections[currentIndex + 1])!.offsetTop ,
        {
          duration: 800,
          smooth: "easeInOutCubic",
        }
      );
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scroll.scrollTo(
        document.getElementById(sections[currentIndex - 1])!.offsetTop ,
        {
          duration: 800,
          smooth: "easeInOutCubic",
        }
      );
    } else if (e.deltaY > 0 && currentIndex === sections.length - 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleWheelEvent = (e: WheelEvent) => handleScroll(e);
    window.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
