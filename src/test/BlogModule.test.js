import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";

/* sources: https://www.npmjs.com/package/@testing-library/jest-dom
            jestjs.io/docs/expect 
            https://www.w3.org/TR/wai-aria/#role_definitions
            https://testing-library.com/docs/react-testing-library/cheatsheet/ 
            https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/*/

// * BLOG MODULE TESTING *
/*Test 1 - Test render blog navbar elements on screen (user not logged)*/
test("renders blog navbar elements (user not logged)", () => {
  render(
    <Router>
      <BlogNavBar />
    </Router>
  );

  const loginLink = screen.getByRole("link", { name: "Log in" });
  const blogLink = screen.getByRole("link", { name: "Blog" });
  expect(loginLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();

  //expect(screen.getByText(/blog/i)).toBeInTheDocument();
  //expect(screen.getByText(/log in/i)).toBeInTheDocument();
});

/*Test 2 - Test render blog navbar element: "Create Post" is NOT on screen (user not logged)- 
This test should fail 
test("renders blog navbar elements:createpost (user not logged)", () => {
  render(
    <Router>
      <BlogNavBar />
    </Router>
  );
  const createpostLink = screen.getByRole("link", { name: "Create post" });
  expect(createpostLink).toBeInTheDocument();
  //expect(screen.getByText(/create post/i)).toBeInTheDocument();
});
*/
