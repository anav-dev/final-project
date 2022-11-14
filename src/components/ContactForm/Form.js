import React, { useState } from "react";
import "./Form.css";
import BackgroundSection from "../Background/BackgroundSection";
import backgroundimage2 from "../../img/background2.jpg";
import { Formik } from "formik";

function Form() {
  return (
    <Formik>
      <form className="form-container">
        <h2 className="form-title">Contact us</h2>
        <div>
          <label className="form-label">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            className="input-field"
          />
        </div>

        <label className="form-label">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@gmail.com"
          className="input-field"
        />
        <label className="form-label">Subject: </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          className="input-field"
        />

        <label className="form-label">Message: </label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Your message"
          className="input-field"
        />

        <button type="submit" className="button-form button-done">
          Send
        </button>
      </form>
    </Formik>
  );
}

export default Form;
