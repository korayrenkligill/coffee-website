//CSS
import "./about-us-gallery.css";
//Other
import React, { useState } from "react";

function AboutUsGallery() {
  const images = [
    "https://img.freepik.com/premium-photo/coffee-cup-sits-table-coffee-shop_865967-26031.jpg",
    "https://images.squarespace-cdn.com/content/v1/5081d50c84ae11269e707c6d/1474003873945-E2VB3WREW2HXK42UWQBJ/black-dog-coffee-kansas-city-social.jpg?format=1500w",
    "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_1280.jpg",
    "https://i.pinimg.com/736x/1a/18/72/1a1872111c8510c139c202f0b1591855.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState("");
  const [fullImageIsOpen, setFullImageIsOpen] = useState(false);
  return (
    <div className="AboutUsGallery">
      <h2 className="about-us-gallery-title">Gallery</h2>
      <div className="about-us-gallery-images">
        {images.map((item, key) => {
          return (
            <div
              key={key}
              className={`about-us-gallery-image about-us-gallery-image-${
                key + 1
              }`}
            >
              <img
                src={item}
                alt={`coffee shop $`}
                loading="lazy"
                onClick={() => {
                  setFullImageIsOpen(true);
                  setSelectedImage(item);
                }}
              />
            </div>
          );
        })}
      </div>
      {fullImageIsOpen && (
        <div className="full-image">
          <div
            className="background-close-button"
            onClick={() => {
              setSelectedImage("");
              setFullImageIsOpen(false);
            }}
          >
            <img
              src={selectedImage}
              alt="coffee shop"
              loading="lazy"
              onClick={(event) => {
                event.stopPropagation();
              }}
            />
            <button
              onClick={() => {
                setSelectedImage("");
                setFullImageIsOpen(false);
              }}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUsGallery;
