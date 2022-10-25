import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

//import Mocktest from "./Mocktest";
import Blog from "../views/Blog";
import Contact from "../views/Contact";
import App from "../App";
import Button from "../components/Background/Button";

//source: https://reactjs.org/docs/testing-recipes.html

// * INITIAL TESTING *
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
