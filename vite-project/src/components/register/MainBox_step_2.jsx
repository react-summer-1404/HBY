import React from "react";
import RegisterButton from "./Register_button";
import { NavLink } from "react-router-dom";
const MainBox_step_2 = () => {
  return (
    <div className="w-[430px] h-[265px] flex flex-col items-center">
      <p className="text-lg select-none">{"خوش امدید :)"}</p>
      <h3 className="text-xl font-bold mt-[4px] select-none">{"کد تایید"}</h3>
      <div className="relative w-1/1"></div>
      <RegisterButton
        innerHtml="ایجاد حساب"
        className="bg-[#3C8B85] text-white font-[16px] "
      />
      <NavLink
        to="/step1"
        className="w-1/1 h-[48px] rounded-[8px] border-2 transition-[3s] hover:scale-95 font-[500] text-center pt-[12px] mb-[24px] cursor-pointer text-[#3C8B85] bg-white inner"
      >تغییر شماره همراه</NavLink>
      <p className="select-none">
        حساب کاربری ندارید؟
        <a className="underline text-blue-600 cursor-pointer mr-1 font-semibold">
          ورود
        </a>
      </p>
    </div>
  );
};

export default MainBox_step_2;
