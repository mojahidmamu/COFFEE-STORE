import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 bg-red-950">
      <img
        className="w-10 h-10 my-3"
        src="../../assets/images/more/logo1.png"
        alt=""
      />
      <h2 className="font-bold text-xl text-[#FFFFFF]">Espresso Emporium</h2>
    </div>
  );
};

export default Navbar;
