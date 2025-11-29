import React from "react";
import RegisterButton from "../register/Register_button";

const ForgetPassBox_1 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F5] shadow-box rounded-t-[80px] mt-0 md:mt-[70px] h-1/1 w-1/1 md:rounded-[20px] md:w-[561px] md:h-[491px] px-[30px] py-[64px]">
      <p className="text-lg select-none">{"خوش امدید :)"}</p>
      <h3 className="text-xl font-bold mt-[4px] select-none mx-auto">
        {"ایجاد حساب کاربری"}
      </h3>
      <div className="relative md:w-[430px] w-[345px]">
        <div className="relative w-[345px] md:w-[430px]">
          <input
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="رمز عبور"
            type="password"
          />
          <img
            src="/register/password.png"
            className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
          />
        </div>
        <div className="relative w-[345px] md:w-[430px]">
          <input
            className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
            placeholder="تایید رمز عبور"
            type="password"
          />
          <img
            src="/register/password.png"
            className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
          />
        </div>
      </div>
      <RegisterButton
        innerHtml="ریافت کد تایید"
        className="bg-[#3C8B85] text-white md:w-[430px] w-[345px]"
      />
      
    </div>
  );
};

export default ForgetPassBox_1;
