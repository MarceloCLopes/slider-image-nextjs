import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function Slidershow() {
  const images = [
    "images/Image1.jpeg",
    "images/Image2.jpg",
    "images/Image3.jpg",
    "images/Image4.jpg",
    "images/Image5.png",
    "images/Image6.jpg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };

  return (
    <div className="m-10">
      <h1 className="text-center text-6xl font-bold pb-10">
        Responsive Next.js <span className="text-indigo-600">Image Slider</span>
      </h1>

      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              className="w-3/4 object-cover rounded-lg shadow-xl"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
