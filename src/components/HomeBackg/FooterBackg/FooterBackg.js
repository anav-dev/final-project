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
            <a
              className="socialmedia-insta"
              href="https://www.instagram.com/transient.ie/"
              target="_blank"
              rel="noopener noreferrer" // avoid security risk
            >
              <FaInstagram />
            </a>
          </li>
          <li className="socialmedia-item">
            <a
              className="socialmedia-tumblr"
              href="https://ietransient.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer" // avoid security risk
            >
              <FaTumblr />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterBackg;
