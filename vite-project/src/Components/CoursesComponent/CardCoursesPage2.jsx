// import React from "react";
// // import InputSearch from '../LandingComponent/HeroLanding/HerosectionRight/InputSearch'
// // import CourseCard from '../LandingComponent/Slider/CourseCard/CourseCard'
// import data from "../CoursesComponent/data.json";
// import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
// import { Pagination } from "antd";
// // import { Pagination } from "antd";

// const CardCoursesPage2 = () => {
//   return (
//     <>
//       <div className="w-full  flex  gap-5  mt-10 h-auto  pb-15">
//         {/* فیلتر */}
//         <div className="w-[550px] h-[500px] pr-13 ">
//           <div className="w-[300px] h-[480px] shadow-2xl rounded-[8px] shadow-gray-400 p-4 dark:bg-gray-950 dark:shadow-gray-700">
//               {/* هدر فیلتر */}
//             <div className=" w-[268px] h-[40px] flex space-x-14">
//               <span className=" text-fuchsia-900 mr-1 mt-1 dark:text-fuchsia-200">فیلتر ها</span>
//               <span className="text-xs text-gray-500 mr-10 mt-2 dark:text-gray-400">حذف همه فیلتر ها (3)</span>
//             </div>
//             {/* فیلتر هایه فیلتر */}
//             <div className=" w-[260px] h-[412px]  space-y-6">
//               <div className=" w-[260px] h-[78px]">
//                 <span className=" text-emerald-700 dark:text-emerald-300">دسته بندی</span>
//                   <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex dark:bg-gray-600 dark:border-gray-700 ">
//                     <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
//                       دسته بندی
//                     </div>
//                     <img
//                       className="w-[24px] h-[23px] mt-2 mr-10"
//                       src="/public/dore/Search 2.svg"
//                       alt=""
//                     />
//                   </div>
//               </div>
//               <div className="  w-[260px] h-[78px] text-emerald-700">
//                 <div className="  w-[260px] h-[78px]">
//                   <span className=" text-emerald-700 dark:text-emerald-300">سطح اموزش</span>
//                     <di2 text-gray-600 v className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex dark:bg-gray-600 dark:border-gray-700 ">
//                       <div className=" w-[190px] h-[22px] mt-1 mr-1 text-gray-600 dark:text-amber-50">
//                         سطح
//                       </div>
//                       <img
//                         className="w-[24px] h-[23px] mt-2 mr-10"
//                         src="/public/dore/Search 2.svg"
//                         alt=""
//                       />
//                     </di2>
//                 </div>
//               </div>
//               <div className=" w-[260px] h-[78px] text-emerald-700">
//               <div className="  w-[260px] h-[78px]">
//                   <span className=" text-emerald-700 dark:text-emerald-300">اساتید</span>
//                     <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex  dark:bg-gray-600 dark:border-gray-700 ">
//                       <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
//                         اساتید
//                       </div>
//                       <img
//                         className="w-[24px] h-[23px] mt-2 mr-10"
//                         src="/public/dore/Search 2.svg"
//                         alt=""
//                       />
//                     </div>
//                 </div>
//               </div>
//               {/* پرایس قیمت */}
//               <div className="w-[260px] h-[106px] space-y-3">
//                 <div className=" w-[260px] h-[42px] dark:text-amber-50">قیمت
//                   (●'◡'●)
//                 </div>
//                 <div className="w-[260px] h-[48px] flex gap-2">
//                   <div className="w-[122px] h-[48px] border-2 border-gray-400 bg-gray-300 rounded-[8px] text-gray-950  dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">از 0</div>
//                   <div className="w-[122px] h-[48px] border-2 border-gray-400 bg-gray-300 rounded-[8px] text-gray-950 dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">تا 100000000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* کل دوره ها */}
//         <div className="border-2 border-amber-600 w-full ">
//           {/* هدر دوره ها */}
//           <div className="border-2 border-amber-900 w-full h-[80px] flex ">
//             <div className="w-[455px] h-[79px] ">
//               <div className="border-2 bg-gray-300 border-gray-400 w-[210px] h-[40px] mr-4 mt-4 rounded-[7px] flex dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">
//                 <div className=" w-[190px] h-[22px] mt-1 mr-2">
//                   مرتب سازی بر اساس
//                 </div>
//                 <img
//                   className="w-[24px] h-[23px] mt-2 mr-10"
//                   src="/public/dore/Search 2.svg"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className=" w-[455px] h-[79px] gap-3 pr-90 pt-4 mr-120 flex">
//               <div className="shadow-2xl shadow-neutral-500 border-2 border-neutral-200 bg-amber-50 rounded-[8px] w-[40px] h-[40px]">
//                 <img
//                   className="w-[25px] h-[25px] mt-1.5 mr-1"
//                   src="/public/dore/Text Align Justify Center.svg"
//                   alt=""
//                 />
//               </div>
//               <div className="rounded-[8px] bg-[#9B0EE1] justify-center flex flex-row  w-[40px] h-[40px]">
//                 <img
//                   className="w-[25px] h-[25px] mt-2"
//                   src="/public/dore/Category.svg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           {/* دوره ها */}
//           <div className="border-2  border-cyan-400 mt-7 w-full h-[1336px] flex justify-center">
//             <div className="border-2  border-amber-300 mt-7 flex flex-row flex-wrap items-center justify-between  w-[1200px] h-[1336px]">
//               {data.map((course) => (
//                 <div key={course.id}>
//                   <CoursePageCard2/>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* <div className="border-2  border-blue-800 mt-20 mr-49 w-[916px] h-[100px] justify-center flex flex-row">
//             <div className="border-2 border-emerald-400 w-[272px] h-[40px] flex gap-4">
//               <div className="bg-[#9B0EE1] w-[40px] h-[40px] rounded-[8px]"></div>
//               <div className="border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row">
//                 1
//               </div>
//               <div className="border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row">
//                 2
//               </div>
//               <div className="border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row">
//                 3
//               </div>
//               <div className="bg-[#9B0EE1] w-[40px] h-[40px] rounded-[8px]"></div>
//             </div>
//           </div> */}

//         </div>
//       </div>
//     </>
//   );
// };

// export default CardCoursesPage2;
import React, { useState } from "react";
import data from "../CoursesComponent/data.json";
import CoursePageCard2 from "../LandingComponent/Slider/CourseCard/CourseCard2";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import FilterCourses from "../common/FilterCourses";
import HederDore from "../common/hederDore";

const CardCoursesPage2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // تعداد دوره در هر صفحه

  const totalItems = data.length;

  // Slice کردن داده‌ها بر اساس صفحه جاری
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // اگر بخوای وقتی صفحه عوض شد به بالا بره
  };
  
  return (
    <>
      <div className="w-full  flex  gap-5  mt-10 h-auto  pb-15">
        {/* فیلتر */}
          <FilterCourses/>
        {/* کل دوره ها */}
        <div className=" w-full ">
          {/* هدر دوره ها */}
        <HederDore/>
          {/* دوره ها */}
          <div className=" mt-7 w-full h-[1336px] flex justify-center">
            <div className=" mt-7 flex flex-row flex-wrap items-center justify-between  w-[1200px] h-[1336px]">
              {currentData.map((course) => (
                <div key={course.id}>
                  <CoursePageCard2 />
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
            showSizeChanger={false} // کاربر نتونه تعداد آیتم صفحه رو تغییر بده
            showLessItems // حداکثر ۵ صفحه در شماره صفحه
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


export default CardCoursesPage2;
