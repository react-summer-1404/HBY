// خبر صفحه اولlandin
import React, { useEffect, useState } from "react";
import CardNews from "./CardNews/CardNews";
import http from "../../../core/services/interceptor";
import { useNavigate } from "react-router-dom";
// import moment from "moment-jalaali";

const News = () => {

  const navigate = useNavigate();

  const goToNewesPage = () => navigate("/NewsPage");
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
        <div className="flex flex-col  my-10 justify-center items-center my-3">
          <div className="flex w-full justify-center">
            <img
              className="transform scale-x-[-1]"
              imageSrc="https://via.placeholder.com/300"
              alt=""
            />
            <h4 className="mb-2  dark:text-amber-50">
              با هر خبر، از همه جلوتر
            </h4>
            <img
              className="transform scale-x-[-1]"
              imageSrc="https://via.placeholder.com/300"
              alt=""
            />
          </div>
          <h1 className="font-bold text-2xl  dark:text-amber-50">
            خبر های داغ دریچه ای به دنیای تازه ها{" "}
          </h1>
        </div>
        <div className="md:gap-12 w-full my-5 mx-auto h-auto md:flex md:flex-row  flex flex-col  items-center justify-center">
          {news.slice(0, 3).map((v) => (
            <CardNews
              id={v.id}
              key={v.id}
              item={{
                bgImage:
                  v.currentImageAddressTumb ||
                  v.currentImageAddress ||
                  "../../../../public/imgHero/notfond3.jpg",
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
      <div className="h-[40px] w-[120px] border-2 border-fuchsia-700 rounded-2xl flex flex-col justify-center items-center text-fuchsia-700 mx-auto mt-10  dark:border-fuchsia-500 dark:text-white"
      onClick={goToNewesPage}>
        بیشتر ببین{" "}
      </div>
    </div>
  );
};

export default News;
