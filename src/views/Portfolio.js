import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/BackgroundSection";
import imagePortfolio from "../img/background.jpg";

function Portfolio() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
      </div>
      <div>
        <Background
          src={imagePortfolio}
          background_message={"Portfolio"}
          show_btn={true}
          btn_link={"/blog"}
          btn_text={"Go to blog"}
        />
      </div>
    </>
  );
}

export default Portfolio;
