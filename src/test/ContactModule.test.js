import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { prettyDOM } from "@testing-library/react";

import ContactForm from "../components/ContactForm/Form";

/*sources: 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles 
https://testing-library.com/docs/queries/about/#priority
*/

// * CONTACT MODULE TESTING *

/* Test 1 - Test check contact form elements displayed (form not sent)  */
test("check contact form elements displayed (form not sent)", () => {
  render(
    <Router>
      <ContactForm />
    </Router>
  );

  // 1.1 Check elements in contact form loaded (form not sent)
  //console.log("Contact form content\n:" + prettyDOM(document));
  const sendBtn = screen.getByRole("button", { name: /send/i });
  const formTitle = screen.getByRole("heading", { name: /contact us/i });

  expect(sendBtn).toBeInTheDocument();
  expect(formTitle).toBeInTheDocument();
});

/* Test 2 - Test elements displayed when Send button is clicked (form sent)  */
test("After send btn is clicked, check elements displayed", async () => {
  render(
    <Router>
      <ContactForm />
    </Router>
  );

  // 2.1 Send form process
  const sendBtn = screen.getByRole("button", { name: /send/i });
  fireEvent.click(sendBtn);

  console.log("Contact form (after click)\n:" + prettyDOM(document));

  // 2.2 After click send btn, check elements displayed (success msg should be visible)
});
