import React, { useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import { animateScroll as scroll } from "react-scroll";
import Footer from "./views/Footer/Footer";

const App = () => {
  const sections = ["home", "about", "skills", "projects", "contact", "footer"];

  const handleScroll = (e: WheelEvent) => {
    const currentIndex = sections.findIndex((id) => {
      const element = document.getElementById(id);
      return element && element.getBoundingClientRect().top >= 0;
    });

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      scroll.scrollTo(
        document.getElementById(sections[currentIndex + 1])!.offsetTop,
        {
          duration: 800,
          smooth: "easeInOutCubic",
        }
      );
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scroll.scrollTo(
        document.getElementById(sections[currentIndex - 1])!.offsetTop,
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
