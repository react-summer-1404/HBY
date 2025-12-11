// page2-courses
import React from "react";
import InputSearch from "../LandingComponent/HeroLanding/HerosectionRight/InputSearch";
import CardCoursesPage from "./CardCoursesPage";
import { Button, Input } from "antd";
import { Search01Icon } from "hugeicons-react";
import ScrollToTop from "react-scroll-to-top";

const CoursesPage = ({ setFilterState }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col  justify-center items-center my-15">
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
          دوره های آموزشی ما
        </h1>
      </div>
      <div>
        <InputSearch titel={"دنبال چه می گردی؟"} color={"#3c8B85"} />
      </div>
      {/* page course  */}
      <CardCoursesPage />
      <ScrollToTop className="right-4 bottom-4 absolute"
        smooth
        style={{
          backgroundColor: "rgba(88,0,255,0.4)",
          right: "60px",
          borderRadius: "50%",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default CoursesPage;
