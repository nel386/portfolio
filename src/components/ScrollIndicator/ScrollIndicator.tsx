import React from "react";
import { Link } from "react-scroll";
import "./scrollIndicator.scss";

interface ScrollIndicatorProps {
  menuItems: { id: string; text: string }[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ menuItems }) => {
  return (
    <div className="scroll-indicator">
      {menuItems.map((item, index) => (
        <Link
          key={item.id}
          className="scroll-indicator-item"
          to={item.id}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass="active"
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
