
import React, { useEffect, useState } from "react";
// import CardNews from "./CardNews/CardNews";
import http from "../../../../core/services/interceptor";
import CardNews from "../CardNews/CardNews";
// import moment from "moment-jalaali";

const NewsPageCard = () => {
  // hi api
  const [news, setNews] = useState([]);

  const getNewsList = async () => {
    try {
      const res = await http.get(
        "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC"
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
    <div className="w-full h-auto  mt-20">
      <div className="w-full h-full ">
        
        <div className="md:gap-12 w-full my-5 mx-auto h-auto md:flex md:flex-row  flex flex-col  items-center justify-center">
          {news.slice(0, 3).map((v) => (
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
