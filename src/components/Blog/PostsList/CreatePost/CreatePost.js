import React, { useEffect, useState } from "react";
import CreatePostStyle from "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { database, auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  //const for post validation
  const [errorTitle, setErrorTitle] = useState("");
  const [errorText, setErrorText] = useState("");

  /* function to grab the value of the user input in the Title 
  and Text section. Whenever is a change, the state will be updated */

  function handleChangeTitle(event) {
    event.preventDefault();
    setTitle(event.target.value);
    //console.log(title);
  }

  function handleChangeText(event) {
    event.preventDefault();
    setPostText(event.target.value);
    //console.log(postText);
  }

  /* function to submit date to Firestore in the database */
  const postsCollectionRef = collection(database, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    /*validate input - avoid empty title*/
    /*  trim() used to removed whitespace from title string without changing it
    Source: https://www.w3schools.com/jsref/jsref_trim_string.asp#:~:text=The%20trim()%20method%20removes,not%20change%20the%20original%20string..*/
    if (title.trim().length !== 0 && postText.trim().length !== 0) {
      console.log("Input value: not empty");
      setErrorTitle(""); //error will be empty because no error needed to be displayed
      setErrorText("");

      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      navigate("/blog");
    } else {
      console.log("Input value: empty");
      setErrorTitle("Please enter a post title");
      setErrorText("Please type some text");
    }
  };

  /* Protect create post route -> redirect to /blog/login page
  -- check if person isAuth when this component is rendered */
  useEffect(() => {
    if (!isAuth) {
      navigate("/blog/login");
    }
  }, []);

  return (
    <div className="createPost">
      <div className="createPost-container">
        <h2 className="createPost-h2"> Create a Post</h2>
        <div className="input-group">
          <label>Title</label>
          <input placeholder="Post Title..." onChange={handleChangeTitle} />
          {errorTitle && <h4 className="error-msg"> {errorTitle}</h4>}
        </div>
        <div className="input-group">
          <label>Post</label>
          <textarea placeholder="Post text ..." onChange={handleChangeText} />
          {errorText && <h4 className="error-msg"> {errorText}</h4>}
        </div>
        <button className="submitPost-btn" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
