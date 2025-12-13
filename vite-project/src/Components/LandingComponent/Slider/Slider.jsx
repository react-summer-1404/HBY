// Slider.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SwiperComponent from "./swiper/SwiperComponent";
import http from "../../../core/services/interceptor";
// import { ButtonsForSliderLanding } from "../../ButtonPagination/ButtonsForSliderLanding";
// import { PaginationSliderLanding } from "../../ButtonPagination/PaginationSliderLanding";

const Slider = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const goToCoursePage = () => navigate("/cource");

  const getCourseList = async () => {
    try {
      const res = await http.get("/Home/GetCoursesTop?Count=10");

      console.log("RAW API:", res);
      console.log("DATA:", res.data);

      const data = res?.data;

      setCourses(Array.isArray(data) ? data : []);
      console.log("API DATA:", data);

    } catch (err) {
      console.error("API Error:", err);
      setCourses([]); 
    }
  };

  useEffect(() => {
    getCourseList();
  }, []);
  
  // const nextSlide = () => {
  //   setCurrentIndex((prev) => {
  //     if (prev >= data.length - slidesToShow) {
  //       return 0;
  //     }
  //     return prev + 1;
  //   });
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  // };


  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 overflow-hidden">
      <div className="flex w-full justify-center">
          <img
            className="transform scale-x-[-1]"
            src="../../../../public/span-icon/vect.svg"
            alt=""
          />
          <h4 className="mb-2 dark:text-amber-50">با هر دوره یک قدم جلوتر</h4>
          <img
            className="transform scale-x-[-1]"
            src="../../../../public/span-icon/vect(1).svg"
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl dark:text-amber-50">
          همه چیز را در دوره های ما یاد بگیر
        </h1>
      </div>

      {/* Desktop: Swiper */}
      <SwiperComponent courses={courses} />

      {/* Mobile: ساده بدون swiper */}
      <div className="hidden flex-col mx-auto justify-center items-center">
        {courses?.map((item, index) => (
          <div key={index}>{item.title || "بدون عنوان"}</div>
        ))}
      </div>

      <div className="flex justify-around mt-5 mb-5 h-10">
       
      {/* <ButtonsForSliderLanding prevSlide={prevSlide} nextSlide={nextSlide} />
      <PaginationSliderLanding
        data={data}
        goToSlide={goToSlide}
        currentIndex={currentIndex}
        isLoading={isLoading}
      /> */}
        <button
          className="border-2 border-fuchsia-700 p-2 rounded-2xl text-xl text-fuchsia-700 dark:border-fuchsia-500 dark:text-white"
          onClick={goToCoursePage}
        >
          مشاهده همه
        </button>
      </div>
    </>
  );
};

export default Slider;

