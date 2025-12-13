// // page 3.News قسمت وسط
// import React, { useState, useEffect } from "react";
// import NewsPageCard from "../LandingComponent/News/NewsCard/NewsPageCard";
// import NewsPageCard2 from "../LandingComponent/News/NewsCard/NewsPageCard";
// import { Pagination } from "antd";
// import "antd/dist/reset.css";
// import FilterCourses from "../common/FilterCourses";
// import HederDore from "../common/hederDore";
// import apiClient from "../../core/services/interceptor";
// import CardNews from "../LandingComponent/News/CardNews/CardNews";
// import NewsCard from "../LandingComponent/News/NewsCard/NewsCard";
// import NewsCard2 from "../LandingComponent/News/NewsCard/NewsCard2";

// const CardNewsPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(9);
//   const [isList, setIsList] = useState(false);
//   const [newses, setNewses] = useState([]);

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
//         const res = await apiClient.get("/News", { params });
//         setNewses(res.data?.news || []);
//       } catch (err) {
//         console.error("Error fetching newses:", err);
//         setNewses([]);
//         console.error("خبببر بهارررررررررررررر" , newses)
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
//           <div className="mt-7 flex flex-row flex-wrap items-center justify-between w-[1200px]">
//             {isList
//               ? newses.map((item) => (
//                   <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
//                     <NewsCard2
//                       title={item.title}
//                       describe={item.describe}
//                       statusId={item.statusId}
//                       startTime={item.insertDate}
//                       teacherName={item.teacherName}
//                       imageAddress={item.currentImageAddress || "../../../public/imgHero/notfond3.jpg"}
//                       tumbImageAddress={item.tumbImageAddress || "../../../public/imgHero/notfond3.jpg"}
//                       likeCount={item.likeId}
//                       currentView={item.currentView}
//                     />
//                   </div>
//                 ))
//               : newses.map((item) => (
//                   <div key={item.courseId} className="mx-auto mb-5 lg:mx-0">
//                     <NewsCard
//                       id={item.id}
//                       title={item.title}
//                       describe={item.describe}
//                       isDelete={item.isDelete}
//                       active={item.active}
//                       miniDescribe={item.miniDescribe}
//                       googleTitle={item.googleTitle}
//                       imageAddress={item.currentImageAddress || "../../../public/imgHero/notfond3.jpg"}
//                       priceCourse={item.cost}
//                       startTime={item.insertDate}
//                       endTime={item.updateDate}
//                       tumbImageAddress={item.currentImageAddressTumb || "../../../public/imgHero/notfond3.jpg"}
//                       addUserFullName={item.addUserFullName || "نا شناس "}
//                       courseLvlId={item.courseLvlId}
//                       lastUpdate={item.lastUpdate}
//                       courseRate={item.currentLikeCount}
//                       likeCount={item.likeId}
//                       currentView={item.currentView}
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

// export default CardNewsPage;
import React, { useEffect, useState } from "react";
import { Pagination, Spin, Empty } from "antd";

import NewsCard from "../LandingComponent/News/NewsCard/NewsCard";
import NewsCard2 from "../LandingComponent/News/NewsCard/NewsCard2";
import NewsCardSkeleton from "../../Components/NewsComponent/NewsCardSkeleton";
import FilterCourses from "../common/FilterCourses";
import HederDore from "../common/hederDore";

import apiClient from "../../core/services/interceptor";

const CardNewsPage = () => {
  const [newses, setNewses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // تعداد کارت‌ها هر صفحه
  const [total, setTotal] = useState(0);

  const [isList, setIsList] = useState(false);

  const [filters, setFilters] = useState({
    categoryId: null,
    levelId: null,
    teacherId: null,
  });

  // تنظیم تعداد آیتم‌ها بر اساس رزولوشن
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 9);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // گرفتن News از API
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const params = {
          PageNumber: currentPage,
          RowsOfPage: itemsPerPage,
          ...filters,
        };

        const res = await apiClient.get("/News", { params });
        const { news, totalCount } = res.data;

        setNewses(news || []);
        setTotal(totalCount || 0);
      } catch (err) {
        console.error("Error fetching newses:", err);
        setNewses([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
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

  return (
    <div className="w-full flex gap-5 mt-10 pb-16">
      {/* Filters */}
      <FilterCourses filters={filters} onFilterChange={handleFilterChange} />

      {/* Content */}
      <div className="w-full">
        <HederDore handleView={toggleView} />

        {/* News Grid/List */}
        <div className="mt-8 flex justify-center">
          {loading ? (
            <div className="flex flex-wrap justify-between w-[1200px]">
              {Array.from({ length: itemsPerPage }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </div>
          ) : newses.length === 0 ? (
            <Empty description="خبر یافت نشد" />
          ) : (
            <div className="flex flex-wrap justify-between w-[1200px]">
              {newses.map((item) => (
                <div key={item.id} className="mx-auto mb-6 lg:mx-0">
                  {isList ? (
                    <NewsCard2
                    id={item.id}
                      title={item.title}
                      describe={item.describe}
                      statusId={item.statusId}
                      startTime={item.insertDate}
                      teacherName={item.teacherName}
                      imageAddress={item.currentImageAddress || "/imgHero/notfond3.jpg"}
                      tumbImageAddress={item.tumbImageAddress || "/imgHero/notfond3.jpg"}
                      likeCount={item.likeId}
                      currentView={item.currentView}
                    />
                  ) : (
                    <NewsCard
                      id={item.id}
                      title={item.title}
                      describe={item.describe}
                      miniDescribe={item.miniDescribe}
                      googleTitle={item.googleTitle}
                      imageAddress={item.currentImageAddress || "/imgHero/notfond3.jpg"}
                      tumbImageAddress={item.currentImageAddressTumb || "/imgHero/notfond3.jpg"}
                      addUserFullName={item.addUserFullName || "ناشناس"}
                      startTime={item.insertDate}
                      endTime={item.updateDate}
                      courseRate={item.currentLikeCount}
                      likeCount={item.likeId}
                      currentView={item.currentView}
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

export default CardNewsPage;
