import React, { useState } from "react";
import "./Form.css";
import { Formik } from "formik";

/*Sources:
https://formik.org/docs/overview
https://formik.org/docs/api/formik
https://formik.org/docs/tutorial
https://reactjs.org/docs/render-props.html
https://www.tacchistudios.com/articles/building-better-react-forms-with-formik/ */

/*
Regex name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
Regex mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

source: https://github.com/falconmasters/
*/

/* "render props" pattern used bellow*/

function Form() {
  const [btnVisibility, setBtnVisibility] = useState(true);

  const [formSent, setFormSent] = useState(false);

  return (
    <Formik
      /* initialValues property of Formik that is an object that contains initial/default input values */
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      /*validate the form with Formik property: validate */
      validate={(userValues) => {
        let formErrors = {};

        // * name validation *
        if (!userValues.name) {
          //console.log("No value entered in name field");
          formErrors.name = "Error: Please enter a name";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userValues.name)) {
          formErrors.name = "Name can only contain letters and spaces.";
        }
        // * email validation *
        if (!userValues.email) {
          //console.log("No value entered in name field");
          formErrors.email = "Error: Please enter an email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            userValues.email
          )
        ) {
          formErrors.email = "Email format: 'email@hotmail.com' ";
        }
        // * subject validation *
        if (!userValues.subject) {
          //console.log("No value entered in name field");
          formErrors.subject = "Error: Please enter a subject";
        }
        // * message validation *
        if (!userValues.message) {
          //console.log("No value entered in name field");
          formErrors.message = "Error: Please type a message";
        }

        return formErrors;
      }}
      onSubmit={(userValues, { resetForm }) => {
        //to clean the form
        resetForm();
        //console.log("value entered for name: " + userValues.name);
        //console.log("Form sent");
        setBtnVisibility(false);
        setFormSent(true);
        setTimeout(() => setFormSent(false), 5000);
      }}
    >
      {/* importing Formik functions: { values, handleSubmit...etc }; 
      properties from 'props' object*/}
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        // defining a form within <Formik />
        <form className="form-container" onSubmit={handleSubmit}>
          {/* handleSubmit is a Formik function in charge of sending the form */}
          {/* console.log(props) */}
          <h2 className="form-title">Contact us</h2>
          <div>
            <label className="form-label">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              className="input-field"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              //onBlur = function to validate fields
            />
            {/*if errors object have the property name, means there is an error*/}
            {touched.name && errors.name && (
              <div className="form-error" data-testid="error-msg-name">
                {errors.name}
              </div>
            )}
          </div>
          <label className="form-label">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@gmail.com"
            className="input-field"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="form-error" data-testid="error-msg">
              {errors.email}
            </div>
          )}
          <label className="form-label">Subject: </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="input-field"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.subject && errors.subject && (
            <div className="form-error" data-testid="error-msg">
              {errors.subject}
            </div>
          )}
          <label className="form-label">Message: </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Your message"
            className="input-field"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <div className="form-error" data-testid="error-msg">
              {errors.message}
            </div>
          )}

          {btnVisibility && (
            <button id="button-form" className="button-form" type="submit">
              Send
            </button>
          )}

          {/*show success message after form is sent (btn is clicked)*/}
          {formSent && (
            <p className="form-sent-msg" name="success-msg">
              Form sent successfully!
            </p>
          )}
        </form>
      )}
    </Formik>
  );
}
export default Form;
