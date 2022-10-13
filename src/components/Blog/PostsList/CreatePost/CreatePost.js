import React, { useEffect, useState } from "react";
import CreatePostStyle from "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { database, auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  /* function to grab the value of the user input in the Title 
  and Text section. Whenever is a change, the state will be updated */

  function handleChangeTitle(event) {
    event.preventDefault();
    setTitle(event.target.value);
    console.log(title);
  }

  function handleChangeText(event) {
    event.preventDefault();
    setPostText(event.target.value);
    console.log(postText);
  }

  /* function to submit date to Firestore in the database */
  const postsCollectionRef = collection(database, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/blog");
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
        </div>
        <div className="input-group">
          <label>Post</label>
          <textarea placeholder="..." onChange={handleChangeText} />
        </div>
        <button className="createPost-btn" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
