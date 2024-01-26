import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-4 h-16">
      <div className=" flex w-full h-full  space-x-2 items-center justify-between ">
        <div className="overflow-hidden w-1/12 h-9 flex items-center justify-center">
          <img
            src={"https://shorturl.at/eUV02"}
            alt="Image"
            className="cusrsor-pointer w-9 h-9 rounded-2xl shadow-md"
          />
        </div>
        <div className="cursor-pointer w-full h-full text-white flex flex-row pl-5 items-center justify-end space-x-4 pr-5"></div>
      </div>
    </nav>
  );
};

export default Navbar;
