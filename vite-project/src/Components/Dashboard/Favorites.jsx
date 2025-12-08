import React from 'react'

const Favorites = () => {
  return (
    <div className="lg:w-[1550px] w-[340px] flex flex-col h-[314px] lg:flex-row lg:h-[147px] lg:m-5 ml-4 mt-5 lg:justify-between lg:space-x-24 ">
          <div
            className="w-[400px]  lg:w-[500px] h-[145px] bg-white rounded-2xl flex justify-around mb-3  dark:bg-gray-700" dir="rtl">
            <img src="/public/dashbord/Frame 167.svg" alt="" />
            <div className=" w-[200px] space-y-5 h-[120px] mt-3  flex flex-col ">
              <span className="text-gray-800 font-bold dark:text-gray-400">
                وضعیت حساب کاربری
              </span>
              <span className="text-gray-400 dark:text-gray-300">
                %25 مانده تا تکمیل حساب
              </span>
              <div className="flex justify-center  dark:text-white">
                <button
                  className="flex items-center justify-center gap-1.5 w-[134px] h-[30px] rounded-[60px] border-2 border-blue-300 dark:border-blue-500 shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 "
                  dir="ltr"
                >
                  <span className="whitespace-nowrap">ویرایش پروفایل</span>
                  <img src="/public/dashbord/Search 5.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            className=" w-[900px] h-[145px] flex gap-10 lg:flex-row flex-col"
            dir="rtl"
          >
            <div className="lg:flex-row flex gap-10 mr-130 lg:mr-0">
              <div className="w-[150px] h-[145px] bg-white  dark:bg-gray-700  rounded-2xl">
                <div className="flex-col flex items-center m-3 justify-center space-y-3">
                  <img src="/public/dashbord/like.svg" alt="" />
                  <span className="text-red-600 font-bold dark:text-red-400">
                    علاقه مندی ها
                  </span>
                  <span className="font-bold mt-3"> 5 مورد </span>
                </div>
              </div>
              <div className="w-[150px] h-[145px]   bg-white dark:bg-gray-700 rounded-2xl">
                <div className="flex-col flex items-center m-3 justify-center space-y-3">
                  <img src="/public/dashbord/like.svg" alt="" />
                  <span className="text-red-600 font-bold dark:text-red-400">
                    علاقه مندی ها
                  </span>
                  <span className="font-bold mt-3"> 5 مورد </span>
                </div>
              </div>
            </div>
            <div className="lg:flex-row flex gap-10 mr-130 lg:mr-0">
              <div className="w-[150px] h-[145px]   bg-white dark:bg-gray-700 rounded-2xl">
                <div className="flex-col flex items-center m-3 justify-center space-y-3">
                  <img src="/public/dashbord/like.svg" alt="" />
                  <span className="text-red-600 font-bold dark:text-red-400">
                    علاقه مندی ها
                  </span>
                  <span className="font-bold mt-3"> 5 مورد </span>
                </div>
              </div>
              <div className="w-[150px] h-[145px]   bg-white dark:bg-gray-700 rounded-2xl">
                <div className="flex-col flex items-center m-3 justify-center space-y-3">
                  <img src="/public/dashbord/like.svg" alt="" />
                  <span className="text-red-600 font-bold dark:text-red-400">
                    علاقه مندی ها
                  </span>
                  <span className="font-bold mt-3"> 5 مورد </span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Favorites
