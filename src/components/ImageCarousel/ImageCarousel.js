import React, { useState } from "react";
import ImageCarouselStyle from "./ImageCarousel.css";
import { images } from "./Data/CarouselData";

function ImageCarousel() {
  /* Use useState to keep track which image is by keeping track of the image index --> <img src={images[0].img} />
   Create a state that will represent which image/index we are 
   By changing the value in the state, the image displayed will be changed*/
  const [currentImage, setCurrentImage] = useState(0); //first element is in the 0 index

  return (
    <>
      <div className="image-container">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ backgroundImage: `url(${images[currentImage].img})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
