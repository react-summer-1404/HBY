import React, { useEffect } from "react";

import Icon from "../../components/common/AuthHeader/Icon";
import AuthHeader from "../../components/common/AuthHeader";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import { Outlet } from "react-router-dom";
import mediaQuery from "../../core/utils/mediaQuery";
import image from "../../assets/forgetPassImg.png"
const ForgetPass = () => {
  return (
    <>
      <div className="-z-2 bg-[#F5F5F5] w-full h-full absolute top-0 bottom-0"></div>
      <AuthHeader />
      <div>
        <div className=" font-vazir biggerxl:ml-[100px] mt-[164px] md:*:scale-100 *:scale-82">
          <Outlet />
        </div>
        <img
          src={image}
          className="rotate-10 lg:scale-90 hidden biggerxl:inline"
        />
      </div>
    </>
  );
};

export default ForgetPass;
