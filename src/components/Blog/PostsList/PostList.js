import React, { useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import PostListStyle from "./PostList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

/* reference sources: 
https://softauthor.com/firebase-firestore-get-documents-data-in-collection/ 
https://softauthor.com/firebase-firestore-update-document-data-updatedoc/
https://www.npmjs.com/package/react-toastify
https://www.geeksforgeeks.org/reactjs-toast-notification/
https://reactnavigation.org/docs/params/
*/

toast.configure();
function PostList({ isAuth }) {
  //isAuth = true;
  //console.log("Entering BlogPage");
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(database, "posts");
  const docRef = doc(database, "posts", "2NtsPkH5YxaUjxHLv1zn");

  const notifyToast = () => {
    // inbuilt-notification
    toast.success("Post deleted successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    //console.log("Trying to delete post " + id);
    //If user clicks OK after window.confirm
    if (window.confirm("Are you sure you want to delete it?")) {
      const postDoc = doc(database, "posts", id);
      //console.log(postDoc);
      await deleteDoc(postDoc);
      notifyToast();
      //console.log("Post deleted")
    }
  };

  useEffect(() => {
    //console.log("UseEffect");
    //getDocument(); // To get a document
    getPosts(); // To get all post
  }, [handleDelete]);

  const getPosts = async () => {
    //console.log("Getting post");
    try {
      const docsSnap = await getDocs(postsCollectionRef);
      docsSnap.forEach((doc) => {
        //console.log(doc.data());
      });
      setPostList(
        docsSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  /* 
  //Function to get a document defined by "docRef"
  const getDocument = async () => {
    //console.log("Getting docRec");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  */

  // Function to edit a post
  let navigate = useNavigate();

  const handleEdit = async (postId) => {
    //console.log("Post to edit from post list " + postId);

    navigate("editpost", {
      state: {
        postIdState: postId,
      },
    });
  };
  //https://stackoverflow.com/questions/68911432/how-to-pass-parameters-with-react-router-dom-version-6-usenavigate-and-typescrip

  return (
    <div className="blogPage">
      {postList.map((post, index) => {
        return (
          <li key={index} className="list">
            <div className="post">
              <div className="post-header">
                <div className="post-title">
                  <h3>{post.title}</h3>
                </div>
              </div>
              <div className="postText-container">{post.postText}</div>
              <h4>@{post.author.name}</h4>
              {isAuth ? (
                <h4>
                  <a>User logged</a>
                  <button
                    className="crud-btn-post"
                    onClick={() => {
                      handleDelete(post.id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="crud-btn-post"
                    onClick={() => {
                      handleEdit(post.id);
                    }}
                  >
                    Edit
                  </button>
                </h4>
              ) : (
                <h4> User not logged</h4>
              )}
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default PostList;
