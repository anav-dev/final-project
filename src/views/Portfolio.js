import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/BackgroundSection";
import imagePortfolio from "../img/background.jpg";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Footer from "../components/Footer/Footer";

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
          text={
            "Here it is shown the artist's portfolio, his edited collection of this artist's best artwork intended to showcase his style, method of work, and how this analog photographer tries to show his point of view about the world. Scroll down to see different samples of his current work, which reflects the artist's depth in film photography."
          }
        />
      </div>
      <div>
        <ImageCarousel />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
