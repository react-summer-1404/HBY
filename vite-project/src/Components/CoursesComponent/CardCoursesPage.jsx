
import React, { useState, useEffect } from "react";
import data from "../CoursesComponent/data.json";
import CoursePageCard from "../LandingComponent/Slider/CourseCard/CoursePageCard";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import FilterCourses from "../common/FilterCourses";
import HederDore from "../common/hederDore";
import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
import apiClient from "../../core/services/interceptor";

const CardCoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // تعداد کارت در هر صفحه (Responsive)
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3); // موبایل
      } else {
        setItemsPerPage(9); // دسکتاپ
      }
    };

    updatePageSize();

    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const totalItems = data.length;

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isList, setisList] = useState(false);

  const handleView = () => {
    setisList(!isList);
  };

  const [courses, setcourses] = useState([]);

  const getCourses = async () => {
    const res = await apiClient.get("/Home/GetCoursesWithPagination");
    console.log(res.data)
    setcourses(res.data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className="w-full flex gap-5 mt-10 h-auto pb-15">
        {/* فیلتر */}
        <FilterCourses />

        {/* کل دوره ها */}
        <div className=" w-full">
          <HederDore handleView={handleView} />

          {/* دوره ها */}
          <div className=" mt-7 w-full flex justify-center">
            <div className=" mt-7 flex flex-row flex-wrap items-center justify-between w-[1000px]">
              {isList === true
                ? courses?.courseFilterDtos?.map((item) => (
                    <div className="mx-auto mb-5 lg:mx-0" >
                      <CoursePageCard2 title={item.title} cost={item.cost} courseId={item.courseId} />
                    </div>
                  ))
                : currentData.map((course) => (
                    <div className="mx-auto mb-5 lg:mx-0" key={course.id}>
                      <CoursePageCard />
                    </div>
                  ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 mb-10">
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={totalItems}
              onChange={handlePageChange}
              showSizeChanger={false}
              showLessItems
              direction="rtl"
              prevIcon="<"
              nextIcon=">"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCoursesPage;
