import React, { useEffect, useState } from "react";

function ImageLoader({ image, name }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
    };
  }, []);

  if (imageLoaded) return <img src={image} alt={name} />;
  else return <img src="/404image.jpg" alt={name} />;
}

export default ImageLoader;
