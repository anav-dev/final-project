import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";
import Blog from "../views/Blog";
import Login from "../components/Blog/PostsList/Login/Login";

import { waitForElementToBeRemoved, prettyDOM } from "@testing-library/react";

/* sources: https://testing-library.com/docs/queries/about/
            https://www.w3.org/TR/wai-aria/#role_definitions
            https://testing-library.com/docs/react-testing-library/cheatsheet/ 
            https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/*/

// * BLOG MODULE TESTING *
// 1. Main parts on website (not logged)

/* Test 1 - Test render blog navbar elements on screen (user not logged)*/
test("renders blog navbar elements (user not logged)", () => {
  render(
    <Router>
      <BlogNavBar />
    </Router>
  );

  const loginLink = screen.getByRole("link", { name: "Log in" });
  const blogLink = screen.getByRole("link", { name: "Blog" });

  expect(loginLink).toBeInTheDocument(); //expect(screen.getByText(/blog/i)).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument(); //expect(screen.getByText(/log in/i)).toBeInTheDocument();
});

/* Test 2 - Test render blog navbar element: "Create Post" is NOT on screen (user not logged) This test should fail */

/*
test("renders blog navbar elements:createpost (user not logged)", () => {
  render(
    <Router>
      <BlogNavBar />
    </Router>
  );
  const createpostLink = screen.getByRole("link", { name: "Create post" });
  expect(createpostLink).toBeInTheDocument(); //expect(screen.getByText(/create post/i)).toBeInTheDocument();
});
*/

/* 2. Logging process 
STEPS:
a) Check page loads
b) Check elements displayed (user not logged)
c) Loggin process
d) Check elements displayed (user logged)
*/

// * Test 3- Test elements displayed when Sign in with Google Button is clicked
test("After log in btn clicked, some elements are displayed and routing is correct", async () => {
  render(
    <Router>
      <Blog />
    </Router>
  );
  //console.log("Loging page (not logged)\n:" + prettyDOM(document));
  //TODO: Check that the elements are correct as not logged

  // Login process
  const loginBtn = screen.getByRole("link", { name: "Log in" });
  fireEvent.click(loginBtn);
  expect(window.location.pathname).toBe("/blog/login");
  console.log("Path document after click: " + window.location);
  // The path is ok, render loging page before checking
  render(
    <Router>
      <Login />
    </Router>
  );
  const gogSignText = screen.getByRole("button", {
    name: "Sign in with Google",
  });

  expect(gogSignText).toBeInTheDocument();
  console.log("Loging page (after click)\n:" + prettyDOM(document));

  return;

  //expect(screen.getByText(/Create post/i)).toBeInTheDocument();
});

// 3. Main parts on website (logged)
// 4. Create post page (website content)

// 5. Create post, check on the database, check it on the website and delete in database, and check delete.
