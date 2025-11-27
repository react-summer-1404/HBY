import React from "react";
import SwiperComponent from "../ProfessorSlider/swiper/SwiperComponent";
import CourseCard from "../ProfessorSlider/CourseCard/CourseCard";

import prof1 from "../../../assets/profesore/img.png";


const teachers = [
  { name: "استاد بحر", role: "مدرس اصلی", img: prof1 },
  { name: "استاد بحر", role: "استاد دوره", img: prof1 },
  { name: " استاد بحر ", role: "استاد اصلی ", img: prof1 },
  { name: "استاد بحر", role: "مدرس اصلی", img: prof1 },
  { name: "استاد بحر", role: "مدرس اصلی", img: prof1 },
];
export default function Slider2() {
  const slides = teachers.map((t, i) => (
    <CourseCard key={i} name={t.name} role={t.role} img={t.img} />
  ));

  return (
    <div className="py-12 text-amber-950 bg-gray-50 overflow-hidden dark:bg-gray-800">
      <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center items-center my-10">
                <div className="flex w-full justify-center">
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect.svg"
                    alt=""
                />
                <h4 className="mb-2 dark:text-amber-50">با هر استاد ،یک موفقیت</h4>
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect(1).svg"
                    alt=""
                />
                </div>
                <h1 className="font-bold text-2xl dark:text-amber-50">با برترین استادان جهان آشنا شو</h1>
            </div>
            {/* lg */}
        <SwiperComponent slides={slides} slideWidth={340} />
        {/* mobilsize  */}
      <div className="md:hidden flex flex-col  justify-center items-center">
        {slides.map((slide, index) => (
         
          <div  key={index} >{slide}</div>
        
      ))}
      </div>
        <div className=" flex justify-around mb-5 mt-10 mr-200 h-10">
          <button className="border-2  border-fuchsia-700 p-1 rounded-2xl text-xl text-fuchsia-700 dark:border-fuchsia-500 dark:text-white">
            مشاهده همه
          </button>
        </div>
      </div>
    </div>
  );
}
