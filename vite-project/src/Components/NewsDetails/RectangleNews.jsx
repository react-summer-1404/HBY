import React, { useEffect, useState } from "react";
import CarbarCommments from "./NewsCarbarCommments";
import { useParams } from "react-router-dom";
import apiClient from "../../core/services/interceptor";


const RectangleNews = ({item}) => {

  const { id } = useParams();

  // hi api
  const [comment, setComment] = useState([]);

  const getComment = async () => {
    try {
      const res = await apiClient.get(`/News/GetNewsComments?NewsId=${id}`);

      setComment(res?.data);
    } catch (err) {
      console.log(err,";;;;;;;;;;;;;;;;")
    }
  };
  useEffect(() => {
    getComment();
  }, []);

  console.log(
  "ن",comment
)

  return (
    <div className="shadow-2xl rounded-2xl shadow-gray-500 mt-3 h-[980px] p-10">
      <p className="text-3xl text-fuchsia-700 font-bold dark:text-fuchsia-400">
        توضیحات دوره{" "}
      </p>
      <p className="font-bold  text-gray-600 mt-5 w-[1000px] h-[244px] mr-10 dark:text-gray-400">
        {/* قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی ری اکت
        برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق نکردیم. یه غول به
        تمام معنا و دنیایی بی انتها از پروژه هایی که میشه با اون نوشت، اون هم
        خیلی سریع و راحت! تکنولوژی که دنیای وب رو دگرگون کرد و دستپخت شرکت
        فیسبوک هست که اینستاگرام رو هم با اون طراحی کرده! کامپوننت محور بودن ری
        اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف
        پروژه از اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون
        نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با سرعت نور!
        برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو خیلی کوتاهتر از قبل
        کرده! خلاصه به شما تبریک میگیم که خیلی دقیق مطالعه کردید و به این نتیجه
        رسیدید که الان بهترین زمان برای یادگیری ری اکت هست. پس از الان با تمام
        اطمینان خیالتون رو راحت می کنیم : شما با دوره آموزش ری اکت سبزلرن، نه
        تنها به این تکنولوژی .... */}
        {item?.miniDescribe}
        {item?.miniDescribe}
        {item?.miniDescribe}
        
      </p>
      <div className="flex">
        <p className="text-3xl text-fuchsia-700 font-bold dark:text-fuchsia-400">
          نظرات{" "}
        </p>
        <div className="flex  gap-1  rounded-[13px] w-[120px] h-[32px] bg-blue-600 text-amber-50 mr-[850px] dark:bg-blue-400">
          <h1 className="font-bold mr-5 mt-0.5">+</h1>
          <p className="mt-0.5">نظر شما</p>
        </div>
      </div>
      <CarbarCommments comment={comment?.commentDtos} />
    </div>
  );
};

export default RectangleNews;
