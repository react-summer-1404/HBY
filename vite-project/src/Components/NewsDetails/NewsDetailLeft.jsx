import React from "react";
import student from "../../../public/SVG/student.svg";
import teacher from "../../../public/profesore/Ellipse 3.png";
import statos from "../../../public/SVG/status.svg";
import datacours from "../../../public/SVG/datacours.svg";
import AllButton from "../common/AllButton";

const NewsDetailLeft = ({ item }) => {
  return (
    <div className="dark:bg-violet-950 mx-auto w-full">
      <div className="border-[#3F40EA]/20 dark:border-violet-100 dark:bg-violet-950 shadow-2xl mx-auto p-14 border-2 dark:border-b-4 w-[80%] text-[#03001C]/50 text-justify leading-10">
        <h1 className="mb-4 pb-3 text-2xl border-[#DADADA] border-b-3 text-fuchsia-800 dark:text-violet-200 ">
          مشخصات خبر{" "}
        </h1>
        {/* <h1 className="mb-4 text-2xl dark:text-violet-200">
          {" "}
          {item?.googleTitle}
        </h1> */}
        <div className="flex justify-between items-center">
          <h1 className="my-4 text-2xl dark:text-violet-200">
            {" "}
            تعداد بازدیدکنندگان:
          </h1>
          <h3 className="my-4 text-xl dark:text-violet-200 leading-10">
            {item?.currentView}
          </h3>
        </div>
        <div className="flex justify-between items-center">
        <h1 className="my-4 text-2xl dark:text-violet-200">دسته بندی:</h1>
        <h3 className="my-4 text-xl dark:text-violet-200 leading-10">
          {item?.newsCatregoryName}
        </h3>
        </div>
        <div className="flex justify-between items-center">
        <h1 className="mb-4 text-2xl dark:text-violet-200">
          تاریخ انتشار خبر{" "}
        </h1>

        <h3 className="my-4 text-xl dark:text-violet-200 leading-10">
          {item?.insertDate}
        </h3>
        </div>

        <h3 className="my-8 text-xl text-emerald-700 border-[#dadada] border-t-3 border-b-3 py-5 dark:text-violet-200">
          {" "}
          مشخصات نویسنده :
        </h3>
        <h3 className="my-4 text-2xl flex dark:text-violet-200">
          <img style={{width:50 ,height:50 }} className="rounded-4xl ml-3" src={item?.currentImageAddress || "../../../public/imgHero/nopic.png"} alt="" />
          {/* {item?.currentImageAddress} */}
          {item?.addUserFullName}
        </h3>
          <h1 className="mb-4 text-2xl dark:text-violet-200">
          {" "}
          {item?.googleTitle}
        </h1>
      </div>
    </div>
  );
};

export default NewsDetailLeft;
