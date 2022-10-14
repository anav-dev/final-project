import React, { useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  CollectionReference,
} from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import PostListStyle from "./PostList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* reference sources: 
https://softauthor.com/firebase-firestore-get-documents-data-in-collection/ 
https://softauthor.com/firebase-firestore-update-document-data-updatedoc/
https://www.npmjs.com/package/react-toastify
https://www.geeksforgeeks.org/reactjs-toast-notification/
*/
toast.configure();
function PostList({ isAuth }) {
  //console.log("Entering BlogPage");
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(database, "posts");
  const docRef = doc(database, "posts", "cYsl5zmtqxoDw6gyW31J");
  const [isEdit, setIsEdit] = useState(false);

  // Update one document using docRef
  const data = {
    title: "Title Update",
    postText: "This text has been updated",
  };

  /*updateDoc(docRef, data)
    .then((docRef) => {
      console.log("Value of an Existing Document Field has been updated");
    })
    .catch((error) => {
      console.log(error);
    });
  */

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
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get a document defined by "docRef"
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

  // Function to edit a post
  const handleEdit = async (id) => {
    console.log("Trying to edit post " + id);
    setIsEdit(true);
  };

  // Function to update a post
  const handleUpdate = async (id) => {
    console.log("Trying to update post " + id);
  };

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
                    onClick={() => {
                      handleDelete(post.id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <button onClick={handleEdit}>Edit</button>
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
