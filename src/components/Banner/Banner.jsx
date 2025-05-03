import React from "react";
import BannerImage from "../../assets/all_image/images/more/6.jpeg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="mb-3 text-xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br />
            every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
