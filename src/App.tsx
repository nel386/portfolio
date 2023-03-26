import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About"
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
