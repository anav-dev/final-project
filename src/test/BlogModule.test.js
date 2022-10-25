import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";

/* sources: https://www.npmjs.com/package/@testing-library/jest-dom
            jestjs.io/docs/expect 
            https://testing-library.com/docs/react-testing-library/cheatsheet/ */

// * BLOG MODULE TESTING *
/*Test 1 - Test render blog navbar elements on screen (user not logged)*/
test("renders blog navbar elements (user not logged)", () => {
  render(
    <Router>
      <BlogNavBar />
    </Router>
  );
  expect(screen.getByText(/blog/i)).toBeInTheDocument();
  expect(screen.getByText(/log in/i)).toBeInTheDocument();
});
