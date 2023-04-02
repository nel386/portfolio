import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/your_username" target="_blank" rel="noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://twitter.com/your_username" target="_blank" rel="noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="footer-icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Your Name. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
