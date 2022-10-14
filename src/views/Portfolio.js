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
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus."
          }
        />
      </div>
    </>
  );
}

export default Portfolio;
