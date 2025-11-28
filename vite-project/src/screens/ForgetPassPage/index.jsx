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
      <div className="-z-2 bg-[#F5F5F5] w-full h-full absolute top-0 bottom-0 overflow-hidden">
      <AuthHeader src="/register/icon.png"/>
      <img
        src={image}
        className="rotate-10 absolute bottom-[-5%] right-12.5/100 lg:scale-90 hidden biggerxl:inline"
      />
      <div className="flex justify-center ">
        <div className=" font-vazir mt-[94px] md:*:scale-100 *:scale-92 absolute bottom-0 md:static">
          <Outlet />
        </div>
      </div></div>
    </>
  );
};

export default ForgetPass;
