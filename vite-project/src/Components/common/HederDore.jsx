import React from "react";
import FilterCoursesPeroperties from "./FilterCoursesPeroperties";

const HederDore = ({ handleView }) => {
  return (
    <div>
      <div className="p-3 shadow shadow-gray-500  lg:w-[1300px]  h-[80px] flex  justify-around rounded-2xl lg:mr-20 m-2">
        <div className="w-[455px] h-[79px] hidden md:block ">
          {/* <div className="border-2 bg-gray-300 border-gray-400 w-[210px] h-[40px] mr-4 mt-4 rounded-[7px] flex dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">
            <div className=" w-[190px] h-[22px] mt-1 mr-2">
              مرتب سازی بر اساس
            </div>
            <img
              className="w-[24px] h-[23px] mt-2 mr-10"
              src="/public/dore/Search 2.svg"
              alt=""
            />
          </div> */}
          <FilterCoursesPeroperties />
        </div>
        {/* فیلتر حالت موبایل */}
        <div className="w-[455px] h-[79px] md:hidden block ">
          <div className="border-2 bg-[#9B0EE1] border-gray-400  justify-center w-[120px] h-[40px] mr-4 mt-4 rounded-[7px] flex dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">
            <img
              className="w-[24px] h-[23px] mt-2 mr-5"
              src="/public/SVG/filter.svg"
              alt=""
            />
            <div className=" w-[190px] h-[22px] mt-1 mr-2">فیلتر</div>
          </div>
        </div>
        {/* end */}
        <div className="w-[455px]   h-[79px] gap-3 lg:pr-90 pt-2 lg:mr-120 flex justify-center">
          <button
            onClick={handleView}
            className="shadow-2xl shadow-neutral-500 border-2 border-neutral-200 bg-amber-50 rounded-[8px] w-[40px] h-[40px]"
          >
            <img
              className="w-[25px] h-[25px] mt-1.5 mr-1"
              src="/public/SVG/Searchcource1.svg"
              alt=""
            />
          </button>
          <button
            onClick={handleView}
            className="rounded-[8px] bg-[#9B0EE1] justify-center flex flex-row  w-[40px] h-[40px]"
          >
            <img
              className="w-[25px] h-[25px] mt-2"
              src="/public/SVG/Searchcource2.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HederDore;
