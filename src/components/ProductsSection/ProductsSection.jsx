import React from "react";
import ProductBgImage from "../../assets/all_image/images/more/1.png"

const ProductsSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${ProductBgImage})`,
      }}
    >
      i am in ProductsSection...
    </div>
  );
};

export default ProductsSection;
