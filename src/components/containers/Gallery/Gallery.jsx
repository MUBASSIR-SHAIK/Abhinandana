import React, { useState } from "react";
import "./Gallery.scss";

const images = [
  "https://i.postimg.cc/hGmLn36F/SAI-MURARI-HMDA-LAYOUT-INDRAKIRAN-1.jpg",
  "https://i.postimg.cc/FK0L8kkN/Sai-Bhuvana-Home.jpg",
  "https://i.postimg.cc/nhz9FwsR/SAI-BHANU1.jpg",
  "https://i.postimg.cc/BvjFgw4L/SAI-BHUVANA-DTCP-LAYOUT-MACHEPALLY.jpg", 
  "https://i.postimg.cc/Twrp7zSw/SAI-BHUVANA-DTCP-LAYOUT-MACHEPALLY4.jpg",
  
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="main-image-wrapper">
        <img
          src={images[activeIndex]}
          alt="Main Property"
          className="main-image"
        />
      </div>
      <div className="thumbnail-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
