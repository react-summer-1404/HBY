// import React from 'react'
// import FilterCoursesPeroperties from './FilterCoursesPeroperties'
// import PriceDore from './priceDore'
// // import FilterCoursesPeroperties from "../common/FilterCoursesPeroperties"
// // import priceDore from "../common/priceDore"

// const FilterCourses = () => {
//   return (
//   <div className="lg:block hidden w-[550px] h-[500px] pr-13 ">
//     <div className="w-[300px] h-[480px] shadow-2xl rounded-[8px] shadow-gray-400 p-4 dark:bg-gray-950 dark:shadow-gray-700">
//         {/* هدر فیلتر */}
//       <div className=" w-[268px] h-[40px] flex space-x-14">
//         <span className=" text-fuchsia-900 mr-1 mt-1 dark:text-fuchsia-200">فیلتر ها</span>
//         <span className="text-xs text-gray-500 mr-10 mt-2 dark:text-gray-400">حذف همه فیلتر ها (3)</span>
//       </div>
//       {/* فیلتر هایه فیلتر */}
//       <div className=" w-[260px] h-[412px]  space-y-6">
//         <div className=" w-[260px] h-[78px]">
//           <span className=" text-emerald-700 dark:text-emerald-300">دسته بندی</span>
//             {/* <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex dark:bg-gray-600 dark:border-gray-700 ">
//               <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
//                 دسته بندی
//               </div>
//               <img
//                 className="w-[24px] h-[23px] mt-2 mr-10"
//                 src="/public/dore/Search 2.svg"
//                 alt=""
//               />
//             </div> */}
//             <FilterCoursesPeroperties/>
//         </div>
//         <div className="  w-[260px] h-[78px] text-emerald-700">
//           <div className="  w-[260px] h-[78px]">
//             <span className=" text-emerald-700 dark:text-emerald-300">سطح اموزش</span>
//               {/* <di2 text-gray-600 v className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex dark:bg-gray-600 dark:border-gray-700 ">
//                 <div className=" w-[190px] h-[22px] mt-1 mr-1 text-gray-600 dark:text-amber-50">
//                   سطح
//                 </div>
//                 <img
//                   className="w-[24px] h-[23px] mt-2 mr-10"
//                   src="/public/dore/Search 2.svg"
//                   alt=""
//                 />
//               </di2> */}
//               <FilterCoursesPeroperties/>
//           </div>
//         </div>
//         <div className=" w-[260px] h-[78px] text-emerald-700">
//         <div className="  w-[260px] h-[78px] flex flex-col">
//             <span className=" text-emerald-700 dark:text-emerald-300">اساتید</span>
//               {/* <div className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex  dark:bg-gray-600 dark:border-gray-700 ">
//                 <div className=" w-[190px] h-[22px] mt-1 mr-2 text-gray-600 dark:text-amber-50">
//                   اساتید
//                 </div>
//                 <img
//                   className="w-[24px] h-[23px] mt-2 mr-10"
//                   src="/public/dore/Search 2.svg"
//                   alt=""
//                 />
//               </div> */}
//               <FilterCoursesPeroperties/>
//           </div>
//         </div>
//         {/* پرایس قیمت */}
//         <div className="w-[260px] h-[106px] space-y-3">
//           <div className=" w-[260px] h-[42px] dark:text-amber-50">قیمت
//             <PriceDore/>
//           </div>
//           <div className="w-[260px] h-[48px] flex gap-2">
//             <div className="w-[122px] h-[48px] border-2 border-gray-400 bg-gray-300 rounded-[8px] text-gray-950  dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">از 0</div>
//             <div className="w-[122px] h-[48px] border-2 border-gray-400 bg-gray-300 rounded-[8px] text-gray-950 dark:bg-gray-600 dark:border-gray-700 dark:text-amber-50">تا 100000000</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default FilterCourses
// فیلتر سمت راست صفحه دوره
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import apiClient from "../../core/services/interceptor";

// Dropdown عمومی
const DropdownFilter = ({ items, label, selected, onSelect }) => {
  const menuItems = items.map((item) => ({
    key: item.id,
    label: item.name,
  }));

  return (
    <Dropdown
      menu={{
        items: menuItems,
        onClick: ({ key }) => {
          const clicked = items.find((x) => x.id === Number(key));
          onSelect(clicked?.id || null);
        },
      }}
    >
      <Typography.Link>
        <Space className="border-2 bg-gray-300 border-gray-400 w-[260px] h-[48px] rounded-[8px] flex justify-between p-2 text-gray-600 dark:text-amber-50 dark:bg-gray-600 dark:border-gray-700">
          {selected || label}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

const FilterCourses = ({ filters, onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // گرفتن داده‌ها از API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, lvlRes, teacherRes] = await Promise.all([
          // apiClient.get("/Home/GetTechnologies"),
          apiClient.get("/Home/GetTechnologies"),

          apiClient.get("/CourseLevel/GetAllCourseLevel"),
          apiClient.get("/Home/GetTeachers"),
        ]);

        setCategories(catRes.data || []);

        setLevels(lvlRes.data || []);
        

        setTeachers(teacherRes.data || []);
      } catch (err) {
        console.error("Filter API error:", err);
        setCategories([]);
        setLevels([]);
        setTeachers([]);
      }
    };
    fetchData();
    

  }, []);

  // وقتی فیلتر تغییر کرد → والد (CardCoursesPage) را اطلاع بده
  useEffect(() => {
    onFilterChange("categoryId", selectedCategory);
    onFilterChange("levelId", selectedLevel);
    onFilterChange("teacherId", selectedTeacher);
  }, [selectedCategory, selectedLevel, selectedTeacher]);

  // const teacherOptions =
  // teachers?.map((t) => ({
  //   label: t.fullName,
  //   value: t.teacherId,
  // })) || [];

  return (
    <div className="lg:block hidden w-[550px] h-[500px] pr-13 ">
      <div className="w-[300px] h-[480px] shadow-xl rounded-[8px] p-4">
        <span className="text-fuchsia-900 font-bold">فیلترها</span>
        <div className="space-y-6 mt-4 font:yekan">
          <div>
            <span className="text-emerald-700">دسته بندی</span>
            <DropdownFilter
              items={categories.map((c) => ({ id: c.id, name: c.techName || c.name || "ناشناس" }))}
              label=" دسته بندی"
              selected={categories.find((x) => x.id === selectedCategory)?.techName}
              onSelect={setSelectedCategory}

            />
          </div>

          <div className="font:yekan" >
            <span className="text-emerald-700">سطح آموزش</span>
            <DropdownFilter 
              items={levels.map((l) => ({ id: l.id, name: l.levelName || "سطح" }))}
              label="انتخاب سطح"
              selected={levels.find((x) => x.id === selectedLevel)?.levelName}
              onSelect={setSelectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}

            />
          </div>

          <div>
            <span className="text-emerald-700">اساتید</span>
            <DropdownFilter
              items={teachers.map((t) => ({ id: t.id, name: t.fullName || t.name || "نام‌ناشناس" }))}
              label="انتخاب استاد"
              selected={teachers.find((x) => x.id === selectedTeacher)?.fullName}
              onSelect={setSelectedTeacher}
              // onChange={(value) => setSelectedTeacher(value)}
              //   onClear={() => setSelectedTeacher(null)}
              //   options={teacherOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCourses;
