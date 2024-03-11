import React from "react";
import InputBox from "./InputBox";

const Header = () => {
  return (
    <div className="grid grid-cols-12 m-2 p-2 shadow-md">
      <div className="flex col-span-1">
        <img src="/menu-icon.png" alt="menu-icon" className="mx-2 h-10" />
        <img src="/youtube-logo.png" alt="menu-icon" className="h-10" />
      </div>
      <InputBox />
      <div className="col-span-1">
        <img src="/user-logo.png" alt="user-icon" className="h-10" />
      </div>
    </div>
  );
};

export default Header;
