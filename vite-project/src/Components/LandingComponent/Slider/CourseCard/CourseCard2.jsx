import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function PreviewCourseCard() {
  const [liked, setLiked] = useState(false);
  
  const navigate = useNavigate();
  const gotocourseditails= () => {
    navigate("/courcesDetails/:id")
  }

  return (
    <div
      className="w-[1100px] max-w-[1200px] h-[260px] shadow shadow-gray-500 mb-7 bg-white rounded-3xl dark:bg-gray-900
                flex flex-row-reverse justify-between items-center p-6"
      dir="rtl"
    >

      {/*متن */}
      <div className="flex flex-col justify-between h-full w-[60%] pr-4">
        <h2 className="text-[22px] font-extrabold text-black mb-3 dark:text-amber-50">ریکت جی اس</h2>

        <div className="flex items-center gap-2 text-[14px] text-gray-700 mb-2 dark:text-gray-400">
          <span>استاد پورمرادادی</span>
        </div>

        <div className="flex flex-col gap-1 text-[13px] text-gray-700">
          <div className="flex items-center gap-2 dark:text-gray-400">20 دانشجو</div>
          <div className="flex items-center gap-2 dark:text-gray-400">1404/02/14 (شروع)</div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-purple-600 text-xl font-extrabold dark:text-fuchsia-400">
            3,500,000 تومان
          </div>
          <button className="px-5 py-2 border border-purple-500 text-purple-600 rounded-full dark:text-fuchsia-400 hover:bg-purple-300 transition"
          onClick={gotocourseditails}>
            مشاهده دوره
          </button>
        </div>
      </div>

      {/* عکس */}
      <div
        className="relative w-[40%] h-full rounded-2xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url('/public/slider/Img.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ایتم روی عکسا*/}
        <div className="absolute " />

        {/*  ستاره*/}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/40 px-2 py-1 rounded-lg">
          <span className="text-yellow-400 text-sm  w-6 h-6 ">
            <p>⭐</p>

          </span>
        </div>

        {/*  لایک  */}
        <button
          onClick={() => setLiked(!liked)}
          className={`
            absolute top-3 left-3 z-20 p-2 rounded-full backdrop-blur-sm
            transition-all duration-300
            ${liked ? " text-white scale-125" : "bg-black/40 text-white scale-100"}
          `}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
