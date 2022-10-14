import React from "react";
import "../App.css";
import HomeBackg from "../components/HomeBackg/HomeBackg";
import Footer from "../components/Footer/Footer";
import HomeStyle from "./Home.css";
import FooterBackg from "../components/HomeBackg/FooterBackg/FooterBackg";

function Home() {
  return (
    <>
      <div id="homepage">
        <div>
          <HomeBackg />
        </div>
        <div>
          <FooterBackg />
        </div>
      </div>
    </>
  );
}

export default Home;
