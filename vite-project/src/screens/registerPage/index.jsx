import React, { useEffect } from "react";

import Icon from "../../components/common/AuthHeader/Icon";
import AuthHeader from "../../components/common/AuthHeader";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import { Outlet } from "react-router-dom";
import mediaQuery from "../../core/utils/mediaQuery";
const RegisterPage = () => {
 
  return (
    <>
      <div className="-z-2 bg-[#9B0EE1] w-full h-full absolute top-0 bottom-0 dark:bg-[#2D2D2D]"></div>
      
        
          <img
            className="-z-1 absolute left-0 bottom-0 top-auto  md:top-0 w-full md:h-full h-8/10 dark:hidden"
            src={mediaQuery("700px","/register/image.png","/register/phone_bg.png")}
          />
        
      <AuthHeader />
      <div className="flex justify-center">
        <img
          src="/register/register_page_sth.png"
          className="w-[550px] h-[550px]  hidden lg:scale-90 biggerxl:inline"
        />

        <div className=" font-vazir biggerxl:ml-[100px] mt-[164px] md:*:scale-100 *:scale-82 dark:*:text-white">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
