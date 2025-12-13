import React from "react";
// import html from "../../../assets/image/3.jpg";
import SearchCourseItem from "./SearchCourseItem";
import SearchNewsItem from "./SearchNewsItem";

export const Searching = ({ courseSearch, newsSearch }) => {
  return (
    <>
      <div className=" md:flex-row flex-col md:flex  md:justify-between gap-3 rounded-3xl shadow-2xl shadow-fuchsia-300 md:w-[550px] w-[400px] bg-fuchsia-50 h-[22000px] md:h-[1400px]">
        {/* *************COURSE**************** */}
        <div className="w-[48%]">
          <h2 className="bg-fuchsia-100 p-3">دوره ها</h2>
          {courseSearch?.map((courseSearch) => {
            return <SearchCourseItem data={courseSearch && courseSearch} />;
          })}
        </div>
        {/* **************NEWS******************** */}
        <div className="w-[48%]">
          <h2 className="bg-fuchsia-100 p-3">خبرها</h2>
          {newsSearch?.map((newsSearch) => {
            return <SearchNewsItem data={newsSearch && newsSearch} />;
          })}
        </div>{" "}
      </div>
    </>
  );
};
