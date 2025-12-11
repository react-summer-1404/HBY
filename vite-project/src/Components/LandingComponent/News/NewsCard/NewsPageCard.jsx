
import React, { useEffect, useState } from "react";
// import CardNews from "./CardNews/CardNews";
import http from "../../../../core/services/interceptor";
import CardNews from "../CardNews/CardNews";
// import moment from "moment-jalaali";
import { Pagination } from "antd";
import HederDore from "../../../common/hederDore";

const NewsPageCard = () => {
  // hi api
  const [news, setNews] = useState([]);

  const getNewsList = async () => {
    try {
      const res = await http.get(
        "/News?PageNumber=1&RowsOfPage=10&SortingCol=insertDate&SortType=desc"
        );

      const data = res?.data?.news;
      setNews(Array.isArray(data) ? data : []);
      console.log("NEWS ARRAY:", data);
    } catch (err) {
      setNews([]);
    }
  };
  useEffect(() => {
    getNewsList();
  }, []);
  // end
  return (
    // <div className="w-full h-auto  mt-20">
    //   <div className="w-full h-full ">
        
    //     <div className="md:gap-12 w-full my-5 mx-auto h-auto md:flex md:flex-row  flex flex-col  items-center justify-center">
    //       {news.map((v) => (
    //         <CardNews
    //           key={v.id}
    //           item={{
    //             bgImage:
    //               v.currentImageAddressTumb ||
    //               v.currentImageAddress ||
    //               "../../../../public/imgHero/notfond.jpg",
    //             title: v.title,
    //             shortDescription: v.describe || v.miniDescribe || "",
    //             author: v.addUserFullName || "ناشناس",
    //             currentView: v.currentView || 0,
    //             rating: v.newsRate?.avg || 0,
    //           }}
    //         />
    //       ))}
    //     </div>
    //      {/* Pagination */}
    //      {/* <div className="flex justify-center mt-10 mb-10">
    //       <Pagination
    //         current={currentPage}
    //         pageSize={itemsPerPage}
    //         total={1000} // می‌توانی از API مقدار واقعی بگیری
    //         onChange={handlePageChange}
    //         showSizeChanger={false}
    //         showLessItems
    //         direction="rtl"
    //         prevIcon="<"
    //         nextIcon=">"
    //       />
    //     </div> */}
    //   </div>
      
    // </div>
    <div className="w-full h-auto mt-20">
      <HederDore/>
  <div className="w-full h-full">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1000px] my-5 mx-auto h-auto">
      {news.map((v) => (
        <CardNews
          key={v.id}
          item={{
            bgImage:
              v.currentImageAddressTumb ||
              v.currentImageAddress ||
              "../../../../public/imgHero/notfond.jpg",
            title: v.title,
            shortDescription: v.describe || v.miniDescribe || "",
            author: v.addUserFullName || "ناشناس",
            currentView: v.currentView || 0,
            rating: v.newsRate?.avg || 0,
          }}
        />
      ))}
    </div>

  </div>
</div>

  );
};

export default NewsPageCard;
