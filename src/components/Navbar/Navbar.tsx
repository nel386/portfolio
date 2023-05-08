import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { MdClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import "./navbar.scss";
import { SvgLogo } from "../../utils/Svgs";

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
      <div className="navbar-logo"><SvgLogo/></div>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={handleMenuStateChange}
        customBurgerIcon={<RiMenu3Line size={36} color="#373a47" />}
        customCrossIcon={
          <MdClose size={36} color="#bdc3c7" onClick={() => closeMenu()} />
        }
      >
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

      <ScrollIndicator menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
