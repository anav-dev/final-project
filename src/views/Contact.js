import React from "react";
import Form from "../components/ContactForm/Form";
import "../components/ContactForm/Form.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
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
