import React from 'react'
import DarcModeComponent from "../LandingComponent/HeaderComponent/DarcModeComponent";

const HederDashboard = () => {
  return (
    <div dir="ltr">
    <div className="w-[1490px] h-[55px]  ml-5 flex justify-between p-3">
      {/* چپیه */}
      <div className="  flex gap-2 " dir="rtl">
        <div className="w-[35px] h-[35px]  p-1 mt-1 hidden lg:block">
          <img
            className="w-[30px] h-[30px]"
            src="/public/dashbord/homesvg.svg"
          />
        </div>
        <div className="w-[35px] h-[35px] p-0.5 mt-1">
          <DarcModeComponent />
        </div>
        <div className="block lg:hidden mr-10 ml-10">
          <img src="/public/logo/Logo.svg" alt="" />
        </div>
        <div className="lg:w-[210px] lg:h-[50px] w-[50px]  lg:mr-15 flex">
          <img
            className="w-[50px] h-[50px] lg:ml-3  rounded-3xl"
            src="/public/comment/ec1fcb714dd9fbf1c934fb21cd1d77bc00bc0c64.png"
            alt=""
          />
          <div>
            <span className="text-black font-bold dark:text-amber-50 hidden lg:block">
              محمدعلی راه نشین{" "}
            </span>
            <span className="dark:text-gray-500 hidden lg:block">
              دانشجو
            </span>
          </div>
        </div>
      </div>
      {/* راستیه */}
      <div className=" text-gray-700 text-2xl font-bold mt-1 lg:block hidden dark:text-gray-400">
        :)سلام ممد خوش اومدی
      </div>
    </div>
    {/* راستیه ریسپانسیو*/}
    <div className=" text-gray-700 text-2xl font-bold  mt-14 ml-40 lg:hidden  dark:text-gray-400">
      :)سلام ممد خوش اومدی
    </div>
  </div>
  )
}

export default HederDashboard
