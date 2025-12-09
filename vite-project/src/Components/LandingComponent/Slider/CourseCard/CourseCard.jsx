// کارت دوره صفحه اول دوره برتر
import React from "react";
import { useNavigate } from "react-router-dom";
import EfectCartCoursePage from "./EfectCartCoursePage";


export default function CourseCard({
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
  teacherId,
  courseLvlId,
  lastUpdate,
  refetch,
  statusId,
  capacity,
  courseRate
}) {
  const navigate = useNavigate();

  const gotocoursdetails= () => {
    navigate("/courcesDetails/:id")
  }
  return (
    <div className="relative w-[340px] h-[450px] flex items-center justify-center mx-auto my-20">
      {/* glow  */}
      {/* حرکت اسلاید */}
      <EfectCartCoursePage/>

      <div className="absolute inset-0 m-3 rounded-[34px] bg-white/90 pointer-events-none" />


      <div
        dir="rtl"
        className="relative z-10 w-full h-full rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)] 
                  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          backgroundImage: imageAddress ? `url(${tumbImageAddress})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div className="absolute inset-0 from-black/85 via-black/60 to-black/30" />

        {/* like button */}
        <button
          aria-label="like"
          className="ml-60 absolute top-4 left-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white/90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>

        {/* courseRate badge */}
        <div className="absolute bottom-36 left-4 z-20 flex items-center gap-2">
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-black/40 border border-yellow-400">
            {/* star */}
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
          <span className="text-sm font-medium text-yellow-400">{courseRate}</span>
        </div>

        {/* bottom info */}
        <div className="absolute left-0 right-0 bottom-0 z-20 px-6 pb-6 pt-6">
          <div className="mb-8 border-t border-white/10 pt-4" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-right">
              <h3 className="text-white text-[20px] font-extrabold leading-6">
                {title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-white/80 text-[13px]">
                <div className="flex items-center justify-around flex-wrap gap-20">
                  {/* teacherId */}
                  <div className="flex items-center gap-2 w-32">
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
                    <span className="">{teacherId}</span>
                  </div>
                  {/* /student */}
                  <div className="flex items-end gap-2 ">
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
                <div className="flex items-center gap-2">
                  <div className="text-white text-lg font-extrabold">
                    {priceCourse}تومان
                  </div>
                  <button className="px-4 py-2 rounded-full border
                  border-white/30 bg-transparent text-white text-sm font-medium"
                  onClick={gotocoursdetails}>
                    مشاهده دوره
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
