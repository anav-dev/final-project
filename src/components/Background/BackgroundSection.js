import React from "react";
import "./BackgroundSection.css";
import Button from "./Button";

//This component will be resused as background in all pages
function BackgroundSection(props) {
  return (
    <div className="Background-container">
      <img className="web-backg-img" src={props.src}></img>
      <h1>{props.background_message}</h1>
      {props.show_btn && (
        <Button btn_link={props.btn_link} btn_text={props.btn_text} />
      )}
    </div>
  );
}

export default BackgroundSection;
