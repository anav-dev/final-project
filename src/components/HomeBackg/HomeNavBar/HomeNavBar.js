import React from "react";
import HomeNavBarStyle from "./HomeNavBar.css";
import { Link } from "react-router-dom";

function HomeNavBar() {
  return (
    <nav>
      <div className="home-navbar-container">
        <ul className="home-nav-menu">
          <li className="home-nav-item">
            <Link to="/portfolio" className="home-nav-links">
              Portfolio
            </Link>
          </li>
          <li className="home-nav-item">
            <Link to="/blog" className="home-nav-links">
              Blog
            </Link>
          </li>
          <li className="home-nav-item">
            <Link to="/contact" className="home-nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavBar;
