import React from 'react'

const RectangleLeftbutton = () => {
  return (
    <div dir="rtl">
      <div className="p-6 pr-10 pl-10  flex-col justify-center items-center rounded-2xl w-[700px] h-[590px] bg-[#FFFFFF] ">
        <div className="flex justify-between ">
          <h1 className="text-[20px] text-fuchsia-800">جدید ترین دوره ها</h1>
          <h4 className="text-[20px] text-cyan-700">مشاهده بیشتر</h4>
        </div>
        <div className="flex justify-around text-[18px] bg-gray-200 rounded-2xl p-3 w-[600px] m-2">
          <h1>عکس و نام دوره</h1>
          <h1>نام استاد</h1>
          <h1>قیمت </h1>
        </div>
        <div className="flex justify-between m-3 p-4 border-b-gray-300 border-b-2">
          <div className="flex">
            <img
              className="w-30 h-18"
              src="/public/slider/Rectangle 67.svg"
              alt=""
            />
            <span className="text-2xl mt-4">react js</span>
          </div>
          <span className="text-[20px] mt-5.5">استاد ساداتی</span>
          <span className="text-[20px] mt-5.5">2500000 تومان</span>
        </div>
        <div className="flex justify-between m-3 p-4 border-b-gray-300 border-b-2">
          <div className="flex">
            <img
              className="w-30 h-18"
              src="/public/slider/Rectangle 67.svg"
              alt=""
            />
            <span className="text-2xl mt-4">react js</span>
          </div>
          <span className="text-[20px] mt-5.5">استاد ساداتی</span>
          <span className="text-[20px] mt-5.5">2500000 تومان</span>
        </div>
        <div className="flex justify-between m-3 p-4 border-b-gray-300 border-b-2">
          <div className="flex">
            <img
              className="w-30 h-18"
              src="/public/slider/Rectangle 67.svg"
              alt=""
            />
            <span className="text-2xl mt-4">react js</span>
          </div>
          <span className="text-[20px] mt-5.5">استاد ساداتی</span>
          <span className="text-[20px] mt-5.5">2500000 تومان</span>
        </div>
        <div className="flex justify-between m-3 p-4 ">
          <div className="flex">
            <img
              className="w-30 h-18"
              src="/public/slider/Rectangle 67.svg"
              alt=""
            />
            <span className="text-2xl mt-4">react js</span>
          </div>
          <span className="text-[20px] mt-5.5">استاد ساداتی</span>
          <span className="text-[20px] mt-5.5">2500000 تومان</span>
        </div>

      </div>
    </div>
  )
}

export default RectangleLeftbutton
