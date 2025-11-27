// Slider.jsx
import SearchButton from "../../common/SearchButton";
import CourseCard from "./CourseCard/CourseCard";
import SwiperComponent from "./swiper/SwiperComponent";

export default function Slider() {
  const slides = [
    <CourseCard
      key={1}
      title="ری اکت"
      instructor="استاد "
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg" 
      width="[384px]"
      hight="[420px]"
    />,
    <CourseCard
      key={2}
      title="Node.js"
      instructor="استاد ساداتی"
      students={35}
      startsAt="۱۴۰۴/۰۴/۱۰"
      price="۳,۸۰۰,۰۰۰ تومان"
      rating={7}
      bgImage="/slider/cover.svg"
    />,
    <CourseCard
      key={3}
      title="HTML CSS"
      instructor="استاد بحر"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg"
    />,
    <CourseCard
      key={4}
      title="HTML CSS"
      instructor="استاد بحر"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg"
    />,
    <CourseCard
      key={5}
      title="React js"
      instructor="استاد ساداتی"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={5}
      bgImage="/slider/Img.svg"
    />,
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10  overflow-hidden">
              <div className="flex w-full justify-center">
          <img
            className="transform scale-x-[-1]"
            src="../../../../public/span-icon/vect.svg"
            alt=""
          />
          <h4 className="mb-2 dark:text-amber-50">با هر دوره، یک قدم جلوتر</h4>
          <img
            className="transform scale-x-[-1]"
            src="../../../../public/span-icon/vect(1).svg"
            alt=""
          />
        </div>
        <h1 className="font-bold text-2xl dark:text-amber-50">همه چیز را در دوره های ما یاد بگیر </h1>
      </div>
      {/* lg */}
      <SwiperComponent slides={slides} />
      {/* mobilsize */}
      <div className="md:hidden flex flex-col justify-center items-center">
      {slides.map((slide, index) => (
        
          <div  key={index}>{slide}</div>
        
      ))}
      </div>
      <div className=" flex justify-around mt-2 mb-5 h-10">
        <button className="border-2 border-fuchsia-700 p-1 rounded-2xl text-xl mr-230 text-fuchsia-700 dark:border-fuchsia-500 dark:text-white">
          مشاهده همه
        </button>
      </div>
    </>
  );
}
