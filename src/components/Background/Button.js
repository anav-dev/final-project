import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div>
      <Link to={props.btn_link}>
        <button type="submit" className="background-btn" name="background-btn">
          <h3>{props.btn_text}</h3>
        </button>
      </Link>
    </div>
  );
}

export default Button;
