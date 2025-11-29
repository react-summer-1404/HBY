import React from "react";
import Rectangle from './Rectangle';
import { PiStar } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import StarCourceDetails from "../common/StarCourceDetails";


const CoursesDetailsRight = () => {
  return (
    <div className="w-[60%] flex flex-col justify-center ">
      <div className="mb-6">
        <h2 className="text-3xl  font-bold dark:text-amber-50">
          دوره تخصصی ریکت جی اس
        </h2>
      </div>
      <p className=" font-bold text-gray-600 mb-7 dark:text-gray-400">
        حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت
        ReactJS ، این کتابخانه قدرتمند و پر استفاده را جاوا اسکریپت را به صورت
        کاملا پروژه محور و کاربردی یاد میگیرید!
      </p>
      <img className="mb-6" src="../../../public/profesore/coursD.png" alt="" />
      <div className="h-[30px] w-[1100px] flex mr-25">
        <div className="flex gap-1 ml-72">
          <p className="text-cyan-700 font-bold dark:text-emerald-300 mr-3 ml-2">
            میتونی به ما امتیاز بدی
          </p>
          <div className="mt-1 flex gap-1">
            <StarCourceDetails/>
          </div>
        </div>
        <div className="flex mr-55">
          <p className=" ml-1 text-gray-500 font-bold">از دوره راضی بودی؟</p>
          <div className="gap-1 flex">
            <div className="flex mt-1">
              <AiOutlineLike />
            </div>
            <p>20</p>
            <div className="flex mt-1.5">
              <AiOutlineDislike />
            </div>
            <p>2</p>
          </div>
        </div>
      </div>
      <Rectangle />
    </div>
  );
};

export default CoursesDetailsRight;
