import React from "react";
import NabLogo from "../../assets/all_image/images/more/logo1.png"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 bg-red-900">
      <img
        className="w-10 h-10 my-3"
        src={NabLogo}
        alt=""
      />
      <h2 className="font-bold text-xl text-[#FFFFFF]">Espresso Emporium</h2>
    </div>
  );
};

export default Navbar;
