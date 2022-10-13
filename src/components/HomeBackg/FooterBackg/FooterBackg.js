import React from "react";
import FooterBackgStyle from "./FooterBackg.css";
import { FaInstagram, FaTumblr } from "react-icons/fa";

/* reference source: https://react-icons.github.io/react-icons/*/

function FooterBackg() {
  return (
    <>
      <div>
        <ul className="socialmedia-list">
          <li className="socialmedia-item">
            <a href="https://www.instagram.com/transient.ie/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="socialmedia-item">
            <a href="https://ietransient.tumblr.com/" target="_blank">
              <FaTumblr />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterBackg;
