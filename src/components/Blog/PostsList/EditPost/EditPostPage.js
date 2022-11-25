import React, { useEffect, useState } from "react";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { database, auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NULL } from "sass";

toast.configure();
//se necesita usuario auth y el post id
function EditPostPage({ isAuth, id }) {
  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [errorNotFound, setErrorNotFound] = useState(false);

  //Get a specific doc from database by its id
  const getPostById = async (id) => {
    console.log("Getting post " + id);
    try {
      var postId = "";
      const postsCollectionRef = collection(database, "posts");
      const docsSnap = await getDocs(postsCollectionRef);
      docsSnap.forEach((doc) => {
        if (doc.id == id) {
          postId = id;
        }
      });
      // If reference is null-> Post not found. Throw error to be catched
      if (postId == "") {
        throw new Error("Not found");
      }
      console.log("Post id: " + postId);
      // Get doc content (title and text)
      const docRefSingle = doc(database, "posts", postId);
      const docsSnapSingle = await getDoc(docRefSingle);

      setPostId(docsSnapSingle.id);
      setPostTitle(docsSnapSingle.data().title); //postTitle
      setPostText(docsSnapSingle.data().postText);

      //console.log("DocRef" + docRefSingle);
      //console.log("DocData" + docsSnapSingle.data().postText);
    } catch (error) {
      console.log(error);
    }
  };

  const notifyToast = () => {
    // inbuilt-notification
    toast.success("Post edited successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  /* functions to grab the value of the user input in the Title 
  and Text section. Whenever is a change, the state will be updated */
  function handleChangeTitle(event) {
    event.preventDefault();
    setPostTitle(event.target.value);
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

  const editPost = async () => {
    console.log("trying to update post");
    // If empty title or text, error.
    if (postTitle.trim().length !== 0 && postText.trim().length !== 0) {
      console.log("Input value: not empty");

      // Update one document using docRef
      const docRef = doc(database, "posts", postId);

      const data = {
        title: postTitle,
        postText: postText,
      };

      updateDoc(docRef, data)
        .then((docRef) => {
          console.log("Value of an Existing Document Field has been updated");
        })
        .catch((error) => {
          console.log(error);
        });
      notifyToast();
      navigate("/blog");
    } else {
      console.log("Input value: empty");
    }
  };

  /* useEffect */
  useEffect(() => {
    console.log("Enter useEffect (id: " + id + ")");
    id = "2NtsPkH5YxaUjxHLv1zn";
    getPostById(id);
  }, []);

  return (
    <div className="createPost">
      <div className="createPost-container">
        <h2 className="createPost-h2"> Create a Post</h2>
        <div className="input-group">
          <label>Title2</label>
          <input
            placeholder="Post Title..."
            onChange={handleChangeTitle}
            value={postTitle}
          />
        </div>
        <div className="input-group">
          <label>Post</label>
          <textarea
            placeholder="Post text ..."
            onChange={handleChangeText}
            value={postText}
          />
        </div>
        <button className="submitPost-btn" onClick={editPost}>
          Edit Post
        </button>
      </div>
    </div>
  );
}

export default EditPostPage;
