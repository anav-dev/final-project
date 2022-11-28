import React, { useEffect, useState } from "react";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { database } from "../../../../firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* source:
https://stackoverflow.com/questions/71279542/how-to-read-the-data-from-a-sub-collection-from-firestore-database-in-react
https://stackoverflow.com/questions/70612424/firebase-9-get-single-document-from-nested-collections-react
https://www.educative.io/answers/how-to-use-the-uselocation-hook-in-react
*/

toast.configure();
//isAuth and post id are needed
function EditPostPage({ isAuth, idPostGen }) {
  // If the Id is not passed by parameter, check by location:
  if (idPostGen === undefined) {
    const location = useLocation();
    idPostGen = location.state.postIdState;
    //console.log("Post Id to edit by location: " + idPostGen);
  }

  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  //Get a specific doc from database by its id
  const getPostById = async (id) => {
    //console.log("Getting post " + id);
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
      //console.log("Found id: " + postId);
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
  let navigate = useNavigate();

  const editPost = async () => {
    //console.log("Enter edit post function");
    // If empty title or text, error.
    if (postTitle.trim().length !== 0 && postText.trim().length !== 0) {
      //console.log("Input value: not empty");

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
      //console.log("Input value: empty");
    }
  };

  useEffect(() => {
    getPostById(idPostGen);
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
