import React from "react";
import RegisterButton from "./Register_button";

const MainBox_step_1 = () => {
  return (
    <div className="w-[430px]  flex flex-col items-center">
      <p className="text-lg select-none">{"خوش امدید :)"}</p>
      <h3 className="text-xl font-bold mt-[4px] select-none">
        {"ایجاد حساب کاربری"}
      </h3>
      <div className="relative w-1/1">
        <input
          className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
          placeholder="شماره تلفن همراه..."
        />
        <img
          src="register/phone_black.png"
          className="h-[30px] w-[30px] absolute top-[36px] right-[5px] my-1 "
        />
      </div>
      <RegisterButton
        innerHtml="ریافت کد تایید"
        className="bg-[#3C8B85] text-white"
      />
      <p className="select-none">
        حساب کاربری ندارید؟
        <a className="underline text-blue-600 cursor-pointer mr-1 font-semibold">
          ورود
        </a>
      </p>
    </div>
  );
};

export default MainBox_step_1;
