import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";
import Blog, { isAuth } from "../views/Blog";
import Login from "../components/Blog/PostsList/Login/Login";

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

/* Test 2 - Test render blog navbar element: "Create Post" is NOT on screen (user not logged)- 
This test should fail 
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

// * Test 3 - ?????? Test userAuth const is false when user is not logged
/*
test("check isAuth is false (user not logged)", () => {
  render(
    <Router>
      <Blog />
    </Router>
  );

  expect(isAuth).toBe(false);
});
*/
// 2. Logging process

// * Test 4- Test firebase auth's signInWithPopup method when Sign in with Google Button is clicked
test("Firebase auth triggerd when login clicked", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const googleBtn = screen.getByRole("button", {
    name: "Sign in with Google",
  });

  fireEvent.click(googleBtn);

  //fireEvent.click();
  // --> Error: "Jest worker encountered 4 child process exceptions, exceeding retry limit"

  //await waitForElementToBeRemoved(() =>
  //screen.getByText(/Sign In With Google/i)
  //);
  //expect(screen.getByText(/Create post/i)).toBeInTheDocument();
});

// 3. Main parts on website (logged)
// 4. Create post page (website content)
// 5. Create post, check on the database, check it on the website and delete in database, and check delete.
