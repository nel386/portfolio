import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./scrollIndicator.scss";

interface ScrollIndicatorProps {
  menuItems: { id: string; text: string }[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ menuItems }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      if (footerRect.top <= window.innerHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-indicator ${
        isFooterVisible ? "scroll-indicator--hidden" : ""
      }`}
    >
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
