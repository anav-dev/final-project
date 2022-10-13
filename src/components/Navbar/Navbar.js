import React from "react";
import { Link } from "react-router-dom";
import Navbarstyle from "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TRANSIENT.IE
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links">
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
