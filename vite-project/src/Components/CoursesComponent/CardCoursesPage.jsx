// page2 courses pajination-grid
import React, { useEffect, useState } from "react";
import { Pagination, Spin, Empty } from "antd";

import CoursePageCard from "../LandingComponent/Slider/CourseCard/CoursePageCard";
import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
import FilterCourses from "../common/FilterCourses";
import HederDore from "../common/hederDore";

import apiClient from "../../core/services/interceptor";

const CardCoursesPage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [total, setTotal] = useState(0);

  const [isList, setIsList] = useState(false);

  const [filters, setFilters] = useState({
    categoryId: null,
    levelId: null,
    teacherId: null,
  });


  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 9);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

// hi Apiiiiiiiiiiiiiii
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
  
      try {
        const params = {
          PageNumber: currentPage,
          RowsOfPage: itemsPerPage,
          SortType: "Active",
        };
  
        if (filters.categoryId) params.CategoryId = filters.categoryId;
        if (filters.levelId) params.LevelId = filters.levelId;
        if (filters.teacherId) params.TeacherId = filters.teacherId;
  
        const res = await apiClient.get(
          "/Home/GetCoursesWithPagination",
          { params }
        );
  
        const { courseFilterDtos, totalCount } = res.data;
  
        setCourses(courseFilterDtos || []);
        setTotal(totalCount || 0);
      } catch (error) {
        console.error("Fetch courses error:", error);
        setCourses([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourses();
  }, [filters, currentPage, itemsPerPage]);
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const toggleView = () => setIsList((prev) => !prev);

  //
  return (
    <div className="w-full flex gap-5 mt-10 pb-16">
      {/* Filters */}
      <FilterCourses
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Content */}
      <div className="w-full">
        <HederDore handleView={toggleView} />

        {/* Courses */}
        <div className="mt-8 flex justify-center">
          {loading ? (
            <Spin size="large" />
          ) : courses.length === 0 ? (
            <Empty description="دوره‌ای یافت نشد" />
          ) : (
            <div className="flex flex-wrap justify-between w-[1000px]">
              {courses.map((item) => (
                <div
                  key={item.courseId}
                  className="mx-auto mb-6 lg:mx-0"
                >
                  {isList ? (
                    <CoursePageCard2
                      courseId={item.courseId}
                      title={item.title}
                      priceCourse={item.cost}
                      statusId={item.statusId}
                      startTime={item.startTime}
                      teacherName={item.teacherName}
                      imageAddress={
                        item.imageAddress ||
                        "/imgHero/notfond.jpg"
                      }
                      tumbImageAddress={
                        item.tumbImageAddress ||
                        "/imgHero/notfond.jpg"
                      }
                      likeCount={item.likeCount}
                    />
                  ) : (
                    <CoursePageCard
                      id={item.courseId}
                      title={item.title}
                      describe={item.describe}
                      miniDescribe={item.miniDescribe}
                      imageAddress={
                        item.imageAddress ||
                        "/imgHero/notfond.jpg"
                      }
                      tumbImageAddress={
                        item.tumbImageAddress ||
                        "/imgHero/notfond.jpg"
                      }
                      priceCourse={item.cost}
                      teacherName={item.teacherName}
                      startTime={item.startTime}
                      endTime={item.endTime}
                      statusId={item.statusId}
                      capacity={item.capacity}
                      courseRate={item.count}
                      likeCount={item.likeCount}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {total > itemsPerPage && (
          <div className="flex justify-center mt-10">
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={total}
              onChange={handlePageChange}
              showSizeChanger={false}
              showLessItems
              responsive
              prevIcon={<span>→</span>}
              nextIcon={<span>←</span>}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCoursesPage;

// import React, { useState, useEffect } from "react";
// import CoursePageCard from "../LandingComponent/Slider/CourseCard/CoursePageCard";
// import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
// import { Pagination } from "antd";
// import "antd/dist/reset.css";
// import FilterCourses from "../common/FilterCourses";
// import HederDore from "../common/hederDore";
// import apiClient from "../../core/services/interceptor";

// const CardCoursesPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(9);
//   const [isList, setIsList] = useState(false);
//   const [courses, setCourses] = useState([]);

//   // نگهداری state فیلترها
//   const [filters, setFilters] = useState({
//     categoryId: null,
//     levelId: null,
//     teacherId: null,
//   });
//   // const itemsPerPage = 9; // ثابت: ۹ کارت در هر صفحه

//   // تنظیم تعداد کارت‌ها بر اساس رزولوشن
//   useEffect(() => {
//     const updatePageSize = () => {
//       setItemsPerPage(window.innerWidth < 768 ? 3 : 9);
//     };
//     updatePageSize();
//     window.addEventListener("resize", updatePageSize);
//     return () => window.removeEventListener("resize", updatePageSize);
//   }, []);

//   // گرفتن دوره‌ها از API با فیلترها و pagination
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const params = {
//           pageNumber: currentPage,
//           pageSize: itemsPerPage,
//           ...filters, // categoryId, levelId, teacherId
//         };
//         const res = await apiClient.get("/Home/GetCoursesWithPagination", { params });
//         setCourses(res.data?.courseFilterDtos || []);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//         setCourses([]);
//       }
//     };
//     fetchCourses();
//   }, [filters, currentPage, itemsPerPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleView = () => setIsList(!isList);

//   return (
//     <div className="w-full flex gap-5 mt-10 h-auto pb-15">
//       {/* فیلتر */}
//       <FilterCourses
//         filters={filters}
//         onFilterChange={(name, value) => {
//           setFilters((prev) => ({ ...prev, [name]: value }));
//           setCurrentPage(1); // وقتی فیلتر عوض شد، صفحه اول نمایش داده شود
//         }}
//       />

//       {/* کل دوره‌ها */}
//       <div className="w-full">
//         <HederDore handleView={handleView} />

//         {/* دوره‌ها */}
//         <div className="mt-7 w-full flex justify-center">
//           <div className="mt-7 flex flex-row flex-wrap items-center justify-between w-[1000px]">
//             {isList
//               ? courses.map((item) => (
//                   <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
//                     <CoursePageCard2
//                       title={item.title}
//                       priceCourse={item.cost}
//                       courseId={item.courseId}
//                       statusId={item.statusId}
//                       startTime={item.startTime}
//                       teacherName={item.teacherName}
//                       imageAddress={item.imageAddress || "../../../public/imgHero/notfond.jpg"}
//                       tumbImageAddress={item.tumbImageAddress || "../../../public/imgHero/notfond.jpg"}
//                       likeCount={item.likeCount}
//                     />
//                   </div>
//                 ))
//               : courses.map((item) => (
//                   <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
//                     <CoursePageCard
//                       id={item.courseId}
//                       title={item.title}
//                       describe={item.describe}
//                       isDelete={item.isDelete}
//                       active={item.active}
//                       miniDescribe={item.miniDescribe}
//                       googleTitle={item.googleTitle}
//                       imageAddress={item.imageAddress || "../../../public/imgHero/notfond.jpg"}
//                       priceCourse={item.cost}
//                       cost={item.levelName}
//                       startTime={item.startTime}
//                       endTime={item.endTime}
//                       tumbImageAddress={item.tumbImageAddress || "../../../public/imgHero/notfond.jpg"}
//                       teacherName={item.teacherName}
//                       courseLvlId={item.courseLvlId}
//                       lastUpdate={item.lastUpdate}
//                       statusId={item.statusId}
//                       capacity={item.capacity}
//                       courseRate={item.count}
//                       likeCount={item.likeCount}
//                     />
//                   </div>
//                 ))}
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-10 mb-10">
//           <Pagination
//             current={currentPage}
//             pageSize={itemsPerPage}
//             total={1000} // می‌توانی از API مقدار واقعی بگیری
//             onChange={handlePageChange}
//             showSizeChanger={false}
//             showLessItems
//             direction="rtl"
//             prevIcon="<"
//             nextIcon=">"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardCoursesPage;
