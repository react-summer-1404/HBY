// import React, { useEffect, useState } from 'react'
import MenuComponent from "./MenuComponent";
import LoginComponent from "./LoginComponent";
import LogoComponent from "./LogoComponent";
import DarcModeComponent from "./DarcModeComponent";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-around items-center  text-center mt-[25px] w-full h-[24px]">
      <LogoComponent />
      <MenuComponent />
      <DarcModeComponent />
      <LoginComponent />
    </div>
  );
};

export default HeaderComponent;
