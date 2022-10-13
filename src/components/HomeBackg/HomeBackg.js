import React from "react";
import HomeNavBar from "./HomeNavBar/HomeNavBar";
import HomeStyle from "./HomeBackg.css";

function HomeBackg() {
  return (
    <>
      <div className="home-logo">
        <h4 className="home-artist">TRANSIENT.IE</h4>
        <HomeNavBar />
      </div>

      <div className="home-title-container">
        <h2 className="home-title"> The Art Of Analog</h2>
        <h4 className="home-title2">PHOTOGRAPHY</h4>
      </div>
    </>
  );
}

export default HomeBackg;
