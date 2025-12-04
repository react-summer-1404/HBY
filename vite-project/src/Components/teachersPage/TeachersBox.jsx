import React from "react";
import AttributeBox from "./AttributeBox";

const TeachersBox = ({ src, teacherName, description }) => {
  return (
    <>
      <div className="absolute m-auto w-[345px] h-[470px] rounded-[32px] bg-[#F5F5F5]">
        <AttributeBox
          text="هیزیبهتهبت"
          className="bg-[url(/teacherspage/learn.png)] bg-size-[18px_18px] font-[500] text-[#111111] text-2lg"
        />
      </div>
      <div className="w-[264px] h-[130px] bg-[#F5F5F5] drop-shadow-[5px_-0px_0px_rgba(155, 14, 225, 0.1)] p-[24px] rounded-[24px] cursor-pointer">
        <div>
          <img
            className="inline-block float-right w-[80px] h-[80px] cursor-auto"
            src={src}
          />
          <div className="inline-block w-[128px] h-[82px] mr-2">
            <h2 className="font-[700] text-[16px] ">{teacherName}</h2>
            <p className="text-[#4B4B4B] text-[14px] ">{description}</p>
            <button className="block mt-[6px] bg-[#1F96E614] text-[#1F96E6] text-[14px] py-[2px] px-[8px] border-[#1F96E61A] border-[1px] rounded-[100px]">
              {"پروفایل استاد"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersBox;
