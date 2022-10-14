import React from "react";
import { Link } from "react-router-dom";
import BlogNavBarStyle from "./BlogNavBar.css";
import BackgroundSection from "../../Background/BackgroundSection";
import backgroundimage3 from "../../../img/background3.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
/*use useNavigate hook to redirect user after logout to blog page
-- useNavigate(path/route where you want to go)*/
import { useNavigate } from "react-router-dom";

function BlogNavBar({ isAuth, setIsAuth }) {
  //Log user out arrow function that will use sign Out function from firebase

  let navigate = useNavigate();

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("login");
    });
  };
  return (
    <>
      <nav className="blog-navbar">
        <div className="blog-navbar-container">
          <ul className="blog-nav-menu">
            <li className="blog-nav-item">
              <Link to="/blog" className="blog-nav-links">
                Blog
              </Link>
            </li>
            <li className="blog-nav-item">
              {!isAuth ? (
                <Link to="/blog/login" className="blog-nav-links">
                  {" "}
                  Log in{" "}
                </Link>
              ) : (
                <>
                  <button onClick={logOut} className="logout-btn">
                    {" "}
                    Log Out{" "}
                  </button>
                  <Link to="/blog/createpost" className="blog-nav-links">
                    Create Post
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BlogNavBar;
