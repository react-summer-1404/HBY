import React from "react";
import RegisterButton from "../register/Register_button";

const ForgetPassBox_1 = () => {
  return (
    
    <div className="flex flex-col justify-center items-center bg-[#F5F5F5] shadow-[rgba(60, 139, 133, 0.25)] rounded-[20px]  w-[561px] h-[491px] px-[32px] py-[64px]">
      <p className="text-lg select-none">{"خوش امدید :)"}</p>
      <h3 className="text-xl font-bold mt-[4px] select-none mx-auto">
        {"ایجاد حساب کاربری"}
      </h3>
      <div className="relative w-[430px]">
        <input
          className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px]  mt-[32px]"
          placeholder="ایمیل"
        />
        <img
          src="/register/email.png"
          className="h-[20px] w-[20px] absolute bottom-[10.5px] right-[8px] my-1 "
        />
      </div>
      <RegisterButton
        innerHtml="ریافت کد تایید"
        className="bg-[#3C8B85] text-white w-[430px]"
      />
      <div className="w-1/1">
        <p className="text-blue-500 underline inline mt-1">دذئذس سیتانیستا</p>

        <input type="checkbox" className="float-right inline m-2" />
        <p className="inline float-right mt-1 cursor-pointer">تذینزتذ یتینیذست</p>
      </div>
    </div>
    
  );
};

export default ForgetPassBox_1;
