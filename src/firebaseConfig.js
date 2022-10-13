// Initialize the connection
import { initializeApp } from "firebase/app";
//firebase database
import { getFirestore } from "firebase/firestore";

//import functions from firebase authentication service
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later

/*const firebaseConfig contains the apiKey and project ids needed related to the App create in Firebase website */
const firebaseConfig = {
  apiKey: "AIzaSyBviCqx2U6gjFoMAKQXDKCOu55kfsgHqLo",
  authDomain: "project-3ebfb.firebaseapp.com",
  projectId: "project-3ebfb",
  storageBucket: "project-3ebfb.appspot.com",
  messagingSenderId: "463262650206",
  appId: "1:463262650206:web:828f887d075213d14c49cf",
  measurementId: "G-W4EVLKGMQZ",
};

// *CREATE NEEDED CONNECTIONS FOR FIREBASE*

// Initialize Firebase
/*const app -> Firebase will know that this App is connected to the one created in the Firebase website*/
const app = initializeApp(firebaseConfig);

//Initialize database inside our project
export const database = getFirestore(app);

//create const auth & const provider that will be accesed both outside of this file (export them)
export const auth = getAuth(app);

//create an instance of the class GoogleAuthProvider
export const provider = new GoogleAuthProvider();

//https://firebase.google.com/docs/firestore/quickstart
//https://firebase.google.com/docs/auth
