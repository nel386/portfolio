import { Link } from "react-scroll";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TuLogo</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Inicio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            Acerca de
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Habilidades
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
