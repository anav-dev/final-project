import React from "react";
import Form from "../components/ContactForm/Form";
import "../components/ContactForm/Form.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import imageBackg from "../img/background.jpg";
import Background from "../components/Background/BackgroundSection";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
      </div>
      <div>
        <Background
          src={imageBackg}
          background_message={"Contact"}
          show_btn={false}
          btn_link={""}
          btn_text={""}
          text={
            "Have a question?Thinking about booking a private session? Please do not hesitate to reach out for any reason -- email, call, text, or just fill out the form below and hit submit.email: email@email.com phone: (000) 123-4567"
          }
        />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
