import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar/Navbar";

//toast.configure();
function Portfolio() {
  const notify = () => {
    // inbuilt-notification
    toast.success("successful", { position: toast.POSITION.TOP_CENTER });
  };
  return (
    <div>
      <Navbar />
      <p>This is the Portfolio</p>

      <div className="GeeksforGeeks">
        <button onClick={notify}>Click Me!</button>
      </div>
    </div>
  );
}

export default Portfolio;
