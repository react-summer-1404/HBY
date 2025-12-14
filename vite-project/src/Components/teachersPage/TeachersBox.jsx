import React, { useRef, useState } from "react";

const TeachersBox = ({ src, teacherName, description, coarseNum=6,specialWNum=2,acheivement}) => {
  const [clicked,setClicked]=useState(true);
  return (
    <>
      <div className={clicked?"hidden":"select-none transition-[2s] flex flex-col items-center px-8 py-6 absolute top-20 bottom-0 right-0 left-0 mx-auto w-1/1 md:w-[432px] max-h-[500px] md:h-[400px] rounded-[32px] bg-[#F5F5F5]"}>
        <button onClick={()=>setClicked(true)} className="self-end text-red border-red cursor-pointer bg-[#ED053F14] p-1.5 rounded-[8px]">بستن</button>
        <img src={src} className="rounded-[100%] w-[150px] h-[150px] mt-6" />
        <p className="inline-block mt-[8px] mb-[4px] px-6 bg-right bg-no-repeat bg-size-[22px_22px] bg-[url(/teacherspage/learn.png)] font-semibold text-xl">
          {teacherName}
        </p>
        <p className="inline-block text-md ">{description}</p>
        <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap gap-4 justify-between mt-4 items-center *:text-nowrap">
          <p className="inline-block pr-6 bg-right bg-no-repeat bg-size-[22px_22px] bg-[url(/teacherspage/textsth.png)] text-md">
            {coarseNum + " دوره"}
          </p>
          <p className="inline-block pr-6 bg-right bg-no-repeat bg-size-[22px_22px] bg-[url(/teacherspage/star.png)] text-md">
            {specialWNum + " مقاله تخصصی "}
          </p>
          <p className="inline-block pr-6 bg-right bg-no-repeat bg-size-[22px_22px] bg-[url(/teacherspage/acheivement.png)] text-md">
            {acheivement}
          </p>
        </div>
        <img src="/teacherspage/ways.png" className="w-[128px] h-[24px] mt-[24px]"/>
      </div>
      <div  className="select-none w-[264px] h-[130px] bg-[#F5F5F5] drop-shadow-[5px_-0px_0px_rgba(155, 14, 225, 0.1)] p-[24px] rounded-[24px] cursor-pointer">
        <div>
          <img
            className="inline-block float-right w-[80px] h-[80px] cursor-auto"
            src={src}
          />
          <div className="inline-block w-[128px] h-[82px] mr-2">
            <h2 className="font-[700] text-[16px] ">{teacherName}</h2>
            <p className="text-[#4B4B4B] text-[14px] ">{description}</p>
            <button onClick={()=>setClicked(false)} className="block mt-[6px] bg-[#1F96E614] text-[#1F96E6] text-[14px] py-[2px] px-[8px] border-[#1F96E61A] border-[1px] rounded-[100px] cursor-pointer">
              {"پروفایل استاد"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersBox;
