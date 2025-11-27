import React from "react";
// import ModalSearch from "./ModalSearch";
import ModalSearchcomponent from "./ModalSearchcomponent";

const LandingReport = () => {
  return (
   
    <div className="lg:w-full h-[74px] w-[345px] my-40  lg:space-x-14 lg:mt-0 left[227px]  flex flex-col justify-between md:flex-row   mx-auto items-center lg:justify-center">
      
      <div className="flex flex-row justify-center gap-6 items-center">
        <div className="w-[134px] h-[72px] gap-[11px]  flex  ">
        <img src="../../../../public/report/icon.svg" alt="" />
        <div>
          <h1 className="text-[17px] font-bold dark:text-amber-50">259</h1>
          <h1 className="text-[12px] dark:text-amber-50">
            دانشجو <span className="text-[#06B03C66] text-[12px] dark:text-emerald-400">زرنگ </span>
          </h1>
        </div>
      </div>
      <div className="w-[114px] h-[72px] gap-[6px]  flex ">
        <img src="../../../../public/report/icon1 1.svg" />
        <div>
          <h1 className="text-[17px] font-bold dark:text-amber-50">15</h1>
          <h1 className="text-[12px] dark:text-amber-50">
            اخبار <span className="text-[#0E1CE166] text-[12px] dark:text-blue-600">جدید </span>
          </h1>
        </div>
      </div>
      </div>
      <div className="flex flex-row justify-center gap-5 items-center">
      <div className="w-[134px] h-[72px] gap-[11px]  flex ">
        <img src="../../../../public/report/icon(2).svg" alt="" />
        <div>
          <h1 className="text-[17px] font-bold dark:text-amber-50">97</h1>
          <h1 className="text-[12px] dark:text-amber-50">
            اساتید{" "}
            <span className="text-[#90909066] text-[12px] dark:text-gray-500">حرفه ای </span>
          </h1>
        </div>
      </div>
      <div className="w-[134px] h-[72px] gap-[6px]  flex ">
        <img src="../../../../public/report/icon(1).svg" alt="" />
        <div>
          <h1 className="text-[17px] font-bold dark:text-amber-50">155</h1>
          <h1 className="text-[12px] dark:text-amber-50">
            دوره های <span className="text-[#962a96] text-[12px] dark:text-fuchsia-500">خفن</span>
          </h1>
        </div>
      </div>
      </div>
      {/* <ModalSearch/> */}
      <div className="-mb-36 mt-10 md:hidden" >
        <ModalSearchcomponent/>
        </div>
    </div>
    

  );
};

export default LandingReport;
