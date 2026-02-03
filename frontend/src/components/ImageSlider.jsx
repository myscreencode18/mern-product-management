import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} width="300" />

      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            width="60"
            onClick={() => setMainImage(img)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
