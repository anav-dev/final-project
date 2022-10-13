import React from "react";
import Form from "../components/ContactForm/Form";
import "../components/ContactForm/Form.css";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
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
