
// import React, { useState, useEffect } from "react";
// import data from "../CoursesComponent/data.json";
// import CoursePageCard from "../LandingComponent/Slider/CourseCard/CoursePageCard";
// import { Pagination } from "antd";
// import "antd/dist/reset.css";
// import FilterCourses from "../common/FilterCourses";
// import HederDore from "../common/hederDore";
// import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
// import apiClient from "../../core/services/interceptor";

// const CardCoursesPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // تعداد کارت در هر صفحه (Responsive)
//   const [itemsPerPage, setItemsPerPage] = useState(9);

//   useEffect(() => {
//     const updatePageSize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerPage(3); // موبایل
//       } else {
//         setItemsPerPage(9); // دسکتاپ
//       }
//     };

//     updatePageSize();

//     window.addEventListener("resize", updatePageSize);
//     return () => window.removeEventListener("resize", updatePageSize);
//   }, []);

//   const totalItems = data.length;

//   const currentData = data.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const [isList, setisList] = useState(false);

//   const handleView = () => {
//     setisList(!isList);
//   };

//   const [courses, setcourses] = useState([]);

//   const getCourses = async () => {
//     const res = await apiClient.get("/Home/GetCoursesWithPagination");
//     console.log(res.data)
//     setcourses(res.data);
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   return (
//     <>
//       <div className="w-full flex gap-5 mt-10 h-auto pb-15">
//         {/* فیلتر */}
//         <FilterCourses />

//         {/* کل دوره ها */}
//         <div className=" w-full">
//           <HederDore handleView={handleView} />

//           {/* دوره ها */}
//           <div className=" mt-7 w-full flex justify-center">
//             <div className=" mt-7 flex flex-row flex-wrap items-center justify-between w-[1000px]">
//               {isList === true
//                 ? courses?.courseFilterDtos?.map((item) => (
//                     <div className="mx-auto mb-5 lg:mx-0" >
//                       <CoursePageCard2 title={item.title} cost={item.cost} courseId={item.courseId} />
//                     </div>
//                   ))
//                 : courses?.courseFilterDtos?.map((item) => (
//                     <div className="mx-auto mb-5 lg:mx-0" key={item.id}>
//                       <CoursePageCard title={item.title} courseId={item.courseId}/>
//                     </div>
//                   ))}
//             </div>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center mt-10 mb-10">
//             <Pagination
//               current={currentPage}
//               pageSize={itemsPerPage}
//               total={totalItems}
//               onChange={handlePageChange}
//               showSizeChanger={false}
//               showLessItems
//               direction="rtl"
//               prevIcon="<"
//               nextIcon=">"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardCoursesPage;
// // page2 cours by filter...

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

//   // تنظیم تعداد کارت‌ها بر اساس رزولوشن
//   useEffect(() => {
//     const updatePageSize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerPage(3); // موبایل
//       } else {
//         setItemsPerPage(9); // دسکتاپ
//       }
//     };

//     updatePageSize();
//     window.addEventListener("resize", updatePageSize);
//     return () => window.removeEventListener("resize", updatePageSize);
//   }, []);

//   // گرفتن داده از API
//   const getCourses = async () => {
//     try {
//       const res = await apiClient.get("/Home/GetCoursesWithPagination");
//       // فرض شده داده‌ها داخل courseFilterDtos هست
//       setCourses(res.data?.courseFilterDtos || []);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     }
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleView = () => setIsList(!isList);

//   // داده‌های صفحه فعلی برای pagination
//   const paginatedCourses = courses.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="w-full flex gap-5 mt-10 h-auto pb-15">
//       {/* فیلتر */}
//       <FilterCourses />

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
//               : paginatedCourses.map((item) => (
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
//             total={courses.length}
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
//   const [totalCourses, setTotalCourses] = useState(0);

//   // فیلترها
//   const [filters, setFilters] = useState({
//     categoryId: null,
//     levelId: null,
//     teacherId: null,
//   });

//   // تنظیم تعداد کارت‌ها بر اساس رزولوشن
//   useEffect(() => {
//     const updatePageSize = () => {
//       if (window.innerWidth < 768) setItemsPerPage(3);
//       else setItemsPerPage(9);
//     };
//     updatePageSize();
//     window.addEventListener("resize", updatePageSize);
//     return () => window.removeEventListener("resize", updatePageSize);
//   }, []);

//   // گرفتن داده‌ها از API با فیلترها و Pagination
//   const getCourses = async () => {
//     try {
//       const params = {
//         PageNumber: currentPage,
//         RowsOfPage: itemsPerPage,
//         CategoryId: filters.categoryId || null,
//         CourseLevelId: filters.levelId || null,
//         TeacherId: filters.teacherId || null,
//       };
//       const res = await apiClient.get("/Home/GetCoursesWithPagination", { params });
//       setCourses(res.data?.courseFilterDtos || []);
//       setTotalCourses(res.data?.totalCount || res.data?.courseFilterDtos?.length || 0);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//       setCourses([]);
//       setTotalCourses(0);
//     }
//   };

//   // fetch وقتی فیلتر یا صفحه تغییر کرد
//   useEffect(() => {
//     getCourses();
//   }, [filters, currentPage, itemsPerPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleView = () => setIsList(!isList);

//   // آپدیت فیلترها از کامپوننت FilterCourses
//   const handleFilterChange = (name, value) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     setCurrentPage(1); // وقتی فیلتر تغییر کرد، صفحه اول شود
//   };

//   return (
//     <div className="w-full flex gap-5 mt-10 h-auto pb-15">
//       {/* فیلتر */}
//       <FilterCourses filters={filters} onFilterChange={handleFilterChange} />

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
//             total={totalCourses}
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
import React, { useState, useEffect } from "react";
import CoursePageCard from "../LandingComponent/Slider/CourseCard/CoursePageCard";
import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import FilterCourses from "../common/FilterCourses";
import HederDore from "../common/hederDore";
import apiClient from "../../core/services/interceptor";

const CardCoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [isList, setIsList] = useState(false);
  const [courses, setCourses] = useState([]);

  // نگهداری state فیلترها
  const [filters, setFilters] = useState({
    categoryId: null,
    levelId: null,
    teacherId: null,
  });
  // const itemsPerPage = 9; // ثابت: ۹ کارت در هر صفحه

  // تنظیم تعداد کارت‌ها بر اساس رزولوشن
  useEffect(() => {
    const updatePageSize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 9);
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // گرفتن دوره‌ها از API با فیلترها و pagination
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const params = {
          pageNumber: currentPage,
          pageSize: itemsPerPage,
          ...filters, // categoryId, levelId, teacherId
        };
        const res = await apiClient.get("/Home/GetCoursesWithPagination", { params });
        setCourses(res.data?.courseFilterDtos || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setCourses([]);
      }
    };
    fetchCourses();
  }, [filters, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleView = () => setIsList(!isList);

  return (
    <div className="w-full flex gap-5 mt-10 h-auto pb-15">
      {/* فیلتر */}
      <FilterCourses
        filters={filters}
        onFilterChange={(name, value) => {
          setFilters((prev) => ({ ...prev, [name]: value }));
          setCurrentPage(1); // وقتی فیلتر عوض شد، صفحه اول نمایش داده شود
        }}
      />

      {/* کل دوره‌ها */}
      <div className="w-full">
        <HederDore handleView={handleView} />

        {/* دوره‌ها */}
        <div className="mt-7 w-full flex justify-center">
          <div className="mt-7 flex flex-row flex-wrap items-center justify-between w-[1000px]">
            {isList
              ? courses.map((item) => (
                  <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
                    <CoursePageCard2
                      title={item.title}
                      priceCourse={item.cost}
                      courseId={item.courseId}
                      statusId={item.statusId}
                      startTime={item.startTime}
                      teacherName={item.teacherName}
                      imageAddress={item.imageAddress || "../../../public/imgHero/notfond.jpg"}
                      tumbImageAddress={item.tumbImageAddress || "../../../public/imgHero/notfond.jpg"}
                      likeCount={item.likeCount}
                    />
                  </div>
                ))
              : courses.map((item) => (
                  <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
                    <CoursePageCard
                      id={item.courseId}
                      title={item.title}
                      describe={item.describe}
                      isDelete={item.isDelete}
                      active={item.active}
                      miniDescribe={item.miniDescribe}
                      googleTitle={item.googleTitle}
                      imageAddress={item.imageAddress || "../../../public/imgHero/notfond.jpg"}
                      priceCourse={item.cost}
                      cost={item.levelName}
                      startTime={item.startTime}
                      endTime={item.endTime}
                      tumbImageAddress={item.tumbImageAddress || "../../../public/imgHero/notfond.jpg"}
                      teacherName={item.teacherName}
                      courseLvlId={item.courseLvlId}
                      lastUpdate={item.lastUpdate}
                      statusId={item.statusId}
                      capacity={item.capacity}
                      courseRate={item.count}
                      likeCount={item.likeCount}
                    />
                  </div>
                ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 mb-10">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={1000} // می‌توانی از API مقدار واقعی بگیری
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
  );
};

export default CardCoursesPage;
