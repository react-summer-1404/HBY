import React from "react";

import Icon from "../../components/common/AuthHeader/Icon";
import AuthHeader from "../../components/common/AuthHeader";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import { Outlet } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <div className="-z-2 bg-[#9B0EE1] w-full h-full absolute top-0 bottom-0"></div>
      <img className="-z-1 absolute left-0 top-0 w-full h-full" src="register/image.png"/>
      
      <AuthHeader />
      <img
        src="register/register_page_sth.png"
        className="w-[550px] h-[550px] mt-[30px] ml-[160px] inline"
      />
      <button className="cursor-pointer text-white font-[700] w-[130px]  font-vazir h-[48px] relative bottom-28 right-14 text-2md/1 rounded-[16px] bg-[#3C8B85]">
        ورود
      </button>
      <div className="float-right  font-vazir mr-[200px] mt-[164px]">
        <Outlet/>
      </div>
      
    </>
  );
};

export default RegisterPage;
