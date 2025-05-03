import React from "react";
import ProductBgImage from "../../assets/all_image/images/more/1.png";

const ProductsSection = () => {
  return (
    <div
      className="hero min-h-screen my-14"
      style={{
        backgroundImage: `url(${ProductBgImage})`,
      }}
    >
      {/* Title Div */}
      <div className="flex flex-col justify-evenly items-center -mt-96">
        <p className="text-[#1B1A1A]">--- Sip & Savor ---</p>
        <h2 className="font-bold text-2xl my-3 text-[#331A15]">
          Our Popular Products
        </h2>
        <button className="btn btn-warning w-32">Add Coffee </button>
      </div>
      {/* Popular Products Section */}
      <div>
        
      </div>
    </div>
  );
};

export default ProductsSection;
