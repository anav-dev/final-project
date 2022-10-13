import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * nested routes *
import CreatePost from "../components/Blog/PostsList/CreatePost/CreatePost";
import Login from "../components/Blog/PostsList/Login/Login";
import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";
import PostsList from "../components/Blog/PostsList/PostList";
import Navbar from "../components/Navbar/Navbar";

function Blog() {
  //create variable to determine if user is auth or not
  //setIsAuth will be passed to the Login comp as props
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Navbar />
      <BlogNavBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="" element={<PostsList isAuth={isAuth} />} />
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </div>
  );
}

export default Blog;
