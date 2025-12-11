//کپی از کارت دوره صفحه اول برای سایز کوچکتر در  صفحه کورس حالت پنجره ای فیلتر
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EfectCartCoursePage from "./EfectCartCoursePage";

const CoursePageCard = ({
  id,
  title,
  describe,
  isDelete,
  active,
  miniDescribe,
  googleTitle,
  imageAddress,
  priceCourse,
  cost,
  startTime,
  endTime,
  tumbImageAddress,
  teacherName,
  courseLvlId,
  lastUpdate,
  refetch,
  statusId,
  capacity,
  courseRate,
  likeCount,
}) => {
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  const gotocoursdetails = () => {
    navigate("/courcesDetails/:id");
  };

  return (
    <div className="relative w-[268px] h-[384px] flex items-center justify-center ">
      {/* glow */}
      <EfectCartCoursePage />

      <div className="absolute inset-0 m-3 rounded-[34px] bg-white/90 pointer-events-none" />

      <div
        dir="rtl"
        className="relative z-10 w-full h-full rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)] 
                  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          backgroundImage: imageAddress
            ? `url(${tumbImageAddress})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

        {/* like button */}
        {/*  لایک  */}
        <button
          onClick={() => setLiked(!liked)}
          className={`
            absolute top-3 left-3 z-20 p-2 rounded-full backdrop-blur-sm
            transition-all duration-300
            ${liked ? " text-white scale-125" : "bg-white text-white scale-100"}
          `}
        >
          {liked ? likeCount : "🤍"}
        </button>

        {/* rating badge */}
        <div className="absolute bottom-36 p-5 z-20 justify-around flex items-center gap-20">
          <NavLink
            to={`/courcesDetails/${id}`}
            className="text-white text-[20px] font-extrabold leading-6"
          >
            {title}
          </NavLink>
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-black/40 border border-yellow-400">
            {/* star */}
            <span className="text-sm font-medium text-yellow-400">
              {courseRate}
            </span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.168L12 18.896 4.664 23.166l1.402-8.168L.132 9.21l8.2-1.192L12 .587z"
                fill="#FFD54A"
              />
            </svg>
          </div>
        </div>

        {/* bottom info */}
        <div className="absolute left-0 right-0 bottom-0 z-20 px-6 pb-6 pt-6">
          <div className="mb-8 border-t border-white/10 pt-4" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-right">
              <div className="flex items-center flex-wrap break-normal text-amber-50 justify-around gap-3">
                {/* tichar */}
                <div className="flex items-center flex-wrap gap-2 w-32">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 14l9-5-9-5-9 5 9 5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className=""> {teacherName} </span>
                </div>
                {/* /student */}
                <div className="flex items-end gap-2 flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"
                      stroke="currentColor"
                      strokeWidth="1.0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <span className="mt-2 flex flex-wrap items-center gap-3 text-white/80 text-[13px]">
                    {statusId} دانشجو
                  </span>
                </div>
              </div>

              {/* date */}
              <div className="mt-2 flex flex-wrap items-center gap-3 text-white/80 text-[13px]">
                <div className="flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M16 3v4M8 3v4M3 11h18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span> {startTime} (شروع)</span>
                </div>
                <div className="flex items-center gap-3 w-auto">
                  <div className="text-white w-auto text-lg break-normal font-extrabold">
                    {priceCourse} تومان
                  </div>
                  <NavLink to={`/courcesDetails/${id}`}
                    className="px-4  w-auto py-2 break-normal rounded-full border border-white/30 bg-transparent text-white text-sm font-medium"
                 
                  >
                    مشاهده دوره
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursePageCard;
