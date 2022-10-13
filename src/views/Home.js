import React from "react";
import "../App.css";
import BackgroundSection from "../components/Background/BackgroundSection";
import Footer from "../components/Footer/Footer";
import imagenbackground from "../img/background.jpg";

/* Video source: https://www.youtube.com/watch?v=OksPN8TLzoA&t=6936s&ab_channel=EarthRelaxation*/

function Home() {
  return (
    <>
      <div>
        <BackgroundSection
          src={imagenbackground}
          background_message={"The Art of Analog"}
          show_btn={true}
          btn_link={"portfolio"}
          btn_text={"EXPLORE PORTFOLIO"}
        />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
