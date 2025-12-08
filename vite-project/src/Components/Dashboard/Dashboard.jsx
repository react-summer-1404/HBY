import React from "react";
import HederDashboard from "./HederDashboard";
import Favorites from "./Favorites";
import Rectangle from "./Rectangle";

const Dashboard = () => {
  return (
    <div className="lg:bg-[#4B4B4B]  p-3 lg:dark:bg-[#363636]" dir="ltr">
      <div className="bg-[#F5F5F5] lg:w-[1600px] w-[450px] rounded-2xl h-[1300px] dark:bg-gray-800">
        {/* heder */}
        <HederDashboard/>
        {/* Favorites */}
        <Favorites/>
        {/* Rectangle */}
        <Rectangle/>
      </div>
    </div>
  );
};

export default Dashboard;
