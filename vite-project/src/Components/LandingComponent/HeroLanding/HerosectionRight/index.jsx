import React from "react";
import InputSearch from "./InputSearch";
// import Modalsearch from "./ModalSearch";
const HerosectionRight = () => {
  return (
    <>
      <div className=" lg:left-[-126px] lg:w-[550px] lg:h-75 w-[345px] h-[123px] space-y-9 ">
        <h1 className="lg:mb-12 font-bold text-5xl dark:text-amber-50 mt-[420px] md:mt-0">
          آکادمی{" "}
          <span className="text-[#3C8B85] text-5xl  font-bold dark:text-emerald-500">
            دکتر کد
          </span>
        </h1>
        <h2 className="font-bold dark:text-amber-50">
          با ما به دنیای جذاب کدنویسی وارد شوید و مهارت‌های لازم برای ساختن
          نرم‌افزارهای نوآورانه را یاد بگیرید.
        </h2>
        <div className="lg:mt-10 mt-48 lg:block hidden">
          <InputSearch
            titel={"هر انچه در اکادمی دنبالش هستید..."}
            color={"#9B0EE1"}
          />
        </div>
       
      </div>
    </>
  );
};

export default HerosectionRight;
