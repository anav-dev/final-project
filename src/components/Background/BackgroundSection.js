import React from "react";
import "./BackgroundSection.css";
import Button from "./Button";

//This component will be resused as background in all pages
function BackgroundSection(props) {
  return (
    <>
      <div className="img-backg-container">
        <img className="web-backg-img" src={props.src}></img>
      </div>
      <div>
        {props.show_btn && (
          <Button btn_link={props.btn_link} btn_text={props.btn_text} />
        )}
      </div>
      <div className="title-backg-container">
        <h1>{props.background_message}</h1>
      </div>
      <div className="text-backg-container">
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default BackgroundSection;
