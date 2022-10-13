import React, { useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
  CollectionReference,
} from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import PostListStyle from "./PostList.css";

/* source: https://softauthor.com/firebase-firestore-get-documents-data-in-collection/ */

function PostList({ isAuth }) {
  //console.log("Entering BlogPage");
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(database, "posts");
  const docRef = doc(database, "posts", "NtRLpij2ucrbE20Q57dP");
  //console.log(docRef);

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
  //Function to refresh page
  const refreshPage = () => {
    window.location.reload();
  };

  // Function to delete a post
  const handleDelete = async (id) => {
    console.log("Trying to delete post " + id);
    const postDoc = doc(database, "posts", id);
    //console.log(postDoc);
    await deleteDoc(postDoc);
    refreshPage();
    console.log("Post deleted");
  };

  // Function to edit a post
  const handleEdit = async (id) => {
    console.log("Trying to edit post " + id);
  };

  // Function to update a post
  const handleUpdate = async (id) => {
    console.log("Trying to update post " + id);
  };

  /*
  
  function handleDelete(e, id) {
    var favBooks_arr = [...favBooks];
    var index = favBooks.indexOf(
      favBooks.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr.splice(index, 1);
    setFavBooks(favBooks_arr);
  }

  function handleEdit(e, id) {
    e.preventDefault();
    var favBooks_arr = [...favBooks];
    var index = favBooks_arr.indexOf(
      favBooks_arr.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr[index].isEdit = true;
    setUpdateTitle(favBooks_arr[index].title);
    setUpdateAuthor(favBooks_arr[index].author);
    setUpdatePage(favBooks_arr[index].page);
    setFavBooks(favBooks_arr);
  }

  function handleUpdate(e, id) {
    e.preventDefault();
    var favBooks_arr = [...favBooks];
    var index = favBooks_arr.indexOf(
      favBooks_arr.find(function (favBook) {
        return favBook.id === id;
      })
    );
    favBooks_arr[index].isEdit = false;
    setUpdateTitle("");
    favBooks_arr[index].title = updateTitle;
    setUpdateAuthor("");
    favBooks_arr[index].author = updateAuthor;
    setUpdatePage("");
    favBooks_arr[index].page = updatePage;
    setFavBooks(favBooks);
  }

  */

  return (
    <div className="blogPage">
      {postList.map((post) => {
        return (
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
                <button>Edit</button>
              </h4>
            ) : (
              <h4> User not logged</h4>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
