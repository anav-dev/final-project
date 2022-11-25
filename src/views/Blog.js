import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * nested routes *
import CreatePost from "../components/Blog/PostsList/CreatePost/CreatePost";
import EditPost from "../components/Blog/PostsList/EditPost/EditPostPage";
import Login from "../components/Blog/PostsList/Login/Login";
import BlogNavBar from "../components/Blog/BlogNavBar/BlogNavBar";
import PostsList from "../components/Blog/PostsList/PostList";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/BackgroundSection";
import imageBackg from "../img/background2.jpg";
import Footer from "../components/Footer/Footer";

function Blog() {
  //create variable to determine if user is auth or not
  //setIsAuth will be passed to the Login comp as props
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
      </div>
      <div>
        <Background
          src={imageBackg}
          background_message={"Blog"}
          show_btn={true}
          btn_link={"/contact"}
          btn_text={"Contact us"}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus."
        />
        <br />
        <br />
        <br />
      </div>
      <div>
        <BlogNavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="" element={<PostsList isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="editpost" element={<EditPost isAuth={isAuth} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
