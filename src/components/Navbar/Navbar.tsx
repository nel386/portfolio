import React, { useState } from "react";
import { Link } from "react-scroll";
import { stack as Menu } from "react-burger-menu";
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state: {
    isOpen: boolean | ((prevState: boolean) => boolean);
  }) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { id: "home", text: "Inicio" },
    { id: "about", text: "Acerca de" },
    { id: "skills", text: "Habilidades" },
    { id: "projects", text: "Proyectos" },
    { id: "contact", text: "Contacto" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <Menu right isOpen={menuOpen} onStateChange={handleMenuStateChange}>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            className="menu-item"
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
          >
            {item.text}
          </Link>
        ))}
      </Menu>
    </nav>
  );
};

export default Navbar;
