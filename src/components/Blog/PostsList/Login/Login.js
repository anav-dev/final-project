import React from "react";
import LoginStyle from "./Login.css";
//use exported variables from the firebaseConfig file
import { auth, provider } from "../../../../firebaseConfig";
//use function from the firebase authentication package
import { signInWithPopup } from "firebase/auth";
/*use useNavigate hook to redirect user after login to blog page
-- useNavigate(path/route where you want to go)*/
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  //arrow function to sign with Google
  const signInWithGoogle = () => {
    //result will contain the info of the user logged in
    //then() method source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then && https://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/

    signInWithPopup(auth, provider).then((result) => {
      //in case user closes the tab, still will be logged in using localStorage
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blog");
    });
  };

  return (
    <div className="login-page">
      <p>Sign In with Google to continue:</p>
      <button className="login-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
