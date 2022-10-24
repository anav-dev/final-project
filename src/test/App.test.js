import React from "react";
import { render, screen, container } from "@testing-library/react";

//import Mocktest from "./Mocktest";
import Home from "../views/Home";
import Blog from "../views/Blog";
import Contact from "../views/Contact";

import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import Button from "../components/Background/Button";

/*Test 1 - Test render landing page*/
test("renders the landing page", () => {
  render(<App />);
});

/*Test 2 - Test Button.js (-->Background) component and if a button exists*/
test("renders button component", () => {
  render(
    <Router>
      <Button />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

/*Test 3 - Test render blog page */
test("renders blog page", () => {
  render(
    <Router>
      <Blog />
    </Router>
  );
});

/*Test 4 - Test render contact page*/
test("renders contact page", () => {
  render(
    <Router>
      <Contact />
    </Router>
  );
});

/* NEXT TEST TO RUN -- EDITARLO -- Test 5 -> Component -> Contact form -> FormFormik.js 
- Test error message is not visible 

test("render FormFormik and error message is not be visible", () => {
  render(<FormFormik />);
  expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();

  const subject = screen.getByText("subject");
  expect(subject).toBeInTheDocument();
});

*/
