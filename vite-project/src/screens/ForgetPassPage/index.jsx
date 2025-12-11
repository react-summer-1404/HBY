import React, { useEffect } from "react";

import Icon from "../../components/common/AuthHeader/Icon";
import AuthHeader from "../../components/common/AuthHeader";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import { Outlet } from "react-router-dom";
import mediaQuery from "../../core/utils/mediaQuery";
import image from "../../assets/forgetPassImg.png";
const ForgetPass = () => {
  
  return (
    <>
      <div className="-z-2 bg-[#F5F5F5] dark:bg-[#2D2D2D] w-full h-full absolute top-0 bottom-0 overflow-hidden">
        <img
          src={image}
          className="rotate-10 absolute bottom-[-5%] right-12.5/100 lg:scale-90 hidden biggerxl:inline"
        />
      </div>
      <AuthHeader src="/register/icon.png" />

      <div className="flex justify-center font-vazir mt-[94px] w-full h-8/10 absolute  bottom-0  md:h-auto md:w-auto md:*:scale-100 md:static overflow-hidden dark:*:text-white dark:*:bg-[#1a1515]">
        <Outlet />
      </div>
    </>
  );
};

export default ForgetPass;
