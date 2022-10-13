import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socialmedia-logo">
          <p id="social-media">
            Visit us on{" "}
            <a href="" target="_blank">
              <i class="fa-brands fa-facebook-square"></i>
            </a>
            <a href="" target="_blank">
              <i class="fa-brands fa-instagram-square"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
