import React, { useState } from "react";
import HederDashboard from "./HederDashboard";
import Favorites from "./Favorites";
import Rectangle from "./Rectangle";
import LeftMenu from "./profileDashboard/LeftMenu";
import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";

const Dashboard = () => {
  const [menuName, setMenuName] = useState("داشبورد");

  // const { data } = CustomGetUseQueryExtra(
  //   "getFavoriteCourse",
  //   `/SharePanel/GetMyFavoriteCourses`
  // );

  // const { data: profileComplete } = CustomGetUseQueryExtra(
  //   "getProfileComplete",
  //   `/SharePanel/GetProfileInfo`
  // );

  // const profileCompletionPercentage =
  //   profileComplete?.profileCompletionPercentage;

  return (
    <div
      className=" flex justify-between items-start lg:bg-[#4B4B4B]  p-3 lg:dark:bg-[#363636]"
      dir="ltr"
    >
      <div className="bg-[#F5F5F5] lg:w-[1600px] w-[450px] rounded-2xl h-[1300px] dark:bg-gray-800">
        {/* heder */}
        <HederDashboard />
        {/* Favorites */}
        <Favorites />
        {/* Rectangle */}
        <Rectangle />
      </div>
      {/* سمت راست داشبور پروفایل */}
      <div>
        <LeftMenu setMenuName={setMenuName} />
      </div>
    </div>
  );
};

export default Dashboard;
