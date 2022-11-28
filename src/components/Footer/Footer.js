import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

/* reference source: https://react-icons.github.io/react-icons/*/

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="github-logo">
          <a
            href="https://github.com/anaes0/final-project"
            target="_blank"
            rel="noopener noreferrer" //avoid security risk
          >
            Website Code:
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
