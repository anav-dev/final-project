import React, { useState } from "react";
import ImageCarouselStyle from "./ImageCarousel.css";
import { images } from "./Data/CarouselData";
//arrow icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function ImageCarousel() {
  /* Use useState to keep track which image is by keeping track of the image index --> <img src={images[0].img} />
   Create a state that will represent which image/index we are 
   By changing the value in the state, the image displayed will be changed*/

  let [currentImageIndex, setCurrentImageIndex] = useState(0); //first element is in the 0 index

  /* troubleshooting unexpected carousel behaviour:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
 https://www.w3schools.com/js/js_precedence.asp
 
 Solution: --currentImageIndex instead of currentImageIndex--
  */

  const handleClickBack = () => {
    console.log("handle Click back");
    //setCurrentImageIndex(1);
    //console.log("index is " + currentImageIndex);

    currentImageIndex > 0 && setCurrentImageIndex(--currentImageIndex); //decrease index by 1
  };

  const handleClickForward = () => {
    console.log("handle Click forward");
    //console.log(images.length);

    currentImageIndex < images.length - 1 &&
      setCurrentImageIndex(currentImageIndex + 1); //increase index by 1

    console.log("index is " + currentImageIndex);
  };

  return (
    <>
      <div className="image-container">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ backgroundImage: `url(${images[currentImageIndex].img})` }}
          >
            <div className="left" onClick={handleClickBack}>
              <ArrowBackIosIcon style={{ fontSize: 30 }} />
            </div>
            <div className="center">
              <h1 className="carousel-title">
                {" "}
                {images[currentImageIndex].title}
              </h1>
              <p className="copyright">{images[currentImageIndex].copyright}</p>
            </div>
            <div className="right" onClick={handleClickForward}>
              <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
