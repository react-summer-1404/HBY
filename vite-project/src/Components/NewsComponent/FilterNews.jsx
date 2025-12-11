import React from 'react'
import FilterCoursesPeroperties from '../common/FilterCoursesPeroperties'
import PriceDore from '../common/priceDore'
// import FilterCoursesPeroperties from "../common/FilterCoursesPeroperties"
// import priceDore from "../common/priceDore"

const FilterNews = () => {
  return (
  <div className="lg:block hidden w-[550px] h-[500px] pr-13 ">
    <div className="w-[300px] h-[480px] shadow-2xl rounded-[8px] shadow-gray-400 p-4 dark:bg-gray-950 dark:shadow-gray-700">
        {/* هدر فیلتر */}
      <div className=" w-[268px] h-[40px] flex space-x-14">
        <span className=" text-fuchsia-900 mr-1 mt-1 dark:text-fuchsia-200">فیلتر ها</span>
        <span className="text-xs text-gray-500 mr-10 mt-2 dark:text-gray-400">حذف همه فیلتر ها (3)</span>
      </div>
      {/* فیلتر هایه فیلتر */}
      <div className=" w-[260px] h-[412px]  space-y-6">
        <div className=" w-[260px] h-[78px]">
          <span className=" text-emerald-700 dark:text-emerald-300">دسته بندی</span>
            {/* <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex dark:bg-gray-600 dark:border-gray-700 ">
              <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
                دسته بندی
              </div>
              <img
                className="w-[24px] h-[23px] mt-2 mr-10"
                src="/public/dore/Search 2.svg"
                alt=""
              />
            </div> */}
            <FilterCoursesPeroperties/>
        </div>
       
        <div className=" w-[260px] h-[78px] text-emerald-700">
        <div className="  w-[260px] h-[78px] flex flex-col">
            <span className=" text-emerald-700 dark:text-emerald-300">تاریخ انتشار</span>
              {/* <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex  dark:bg-gray-600 dark:border-gray-700 ">
                <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
                  اساتید
                </div>
                <img
                  className="w-[24px] h-[23px] mt-2 mr-10"
                  src="/public/dore/Search 2.svg"
                  alt=""
                />
              </div> */}
              <FilterCoursesPeroperties/>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default FilterNews
