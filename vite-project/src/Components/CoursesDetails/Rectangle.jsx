import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { HiArrowUturnRight } from "react-icons/hi2";

const Rectangle = () => {
  return (
    <div className='shadow-2xl rounded-2xl shadow-gray-500 mt-3 h-[980px] p-10'>
      <p className='text-3xl text-fuchsia-700 font-bold dark:text-fuchsia-400'>توضیحات دوره </p>
      <p className='font-bold  text-gray-600 mt-5 w-[1000px] h-[244px] mr-10 dark:text-gray-400'>
        قبل از آموزش ری اکت ReactJS ابتدای کار به شما بگیم که تکنولوژی ری اکت برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق نکردیم. یه غول به تمام معنا و دنیایی بی انتها از پروژه هایی که میشه با اون نوشت، اون هم خیلی سریع و راحت! تکنولوژی که دنیای وب رو دگرگون کرد و دستپخت شرکت فیسبوک هست که اینستاگرام رو هم با اون طراحی کرده! کامپوننت محور بودن ری اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از اون استفاده کنید و از طرفی میتونید پروژه هایی بسازید که بدون نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید اون هم با سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه رو خیلی کوتاهتر از قبل کرده! خلاصه به شما تبریک میگیم که خیلی دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان برای یادگیری ری اکت هست. پس از الان با تمام اطمینان خیالتون رو راحت می کنیم : شما با دوره آموزش ری اکت سبزلرن، نه تنها به این تکنولوژی ....
      </p>
      <div className='flex'>
        <p className='text-3xl text-fuchsia-700 font-bold dark:text-fuchsia-400'>نظرات </p>
        <div className='flex  gap-1  rounded-[13px] w-[120px] h-[32px] bg-blue-600 text-amber-50 mr-[850px] dark:bg-blue-400'>
          <h1 className='font-bold mr-5 mt-0.5'>+</h1>
          <p className='mt-0.5'>نظر شما</p>
        </div>
      </div>
      <div className='w-[1000px] m-10 h-[514px] rounded-3xl shadow-2xl p-5 shadow-gray-400'>
        <div className='border border-gray-400 p-5 rounded-2xl w-[960px] h-[150px]'>
          <div className='h-[50px] flex justify-around'>
            <div className='rounded-4xl w-10 h-10'>
              <img className='rounded-4xl w-10 h-10' src="/public/comment/ec1fcb714dd9fbf1c934fb21cd1d77bc00bc0c64.png" alt="" />
            </div>
            <div>
              <p className='font-bold text-[15px] text-gray-600 dark:text-gray-400'>محمد علی راه نشین</p>
              <p className='font-bold dark:text-gray-100'>دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی 💕😁</p>
            </div>
            <div className='font-bold text-[15px] text-gray-600 dark:text-gray-400'> 27 تیر 1404</div>
          </div>
          <div className='gap-10 flex mt-3 mr-7'>
            <div className='flex'>
              <div className='flex mt-1'><AiOutlineLike /></div>
              <p className='dark:text-gray-400'>20</p>
            </div>
            <div className='flex'>
              <div className='flex mt-1.5'><AiOutlineDislike /></div>
              <p className='dark:text-gray-400'>2</p>
            </div>
            <div className='flex bg-blue-400 p-1 rounded-2xl'>
            <div className='mt-1.5 mr-2 ml-2'>< HiArrowUturnRight/></div>
            <p className='text-gray-100 mb-1 ml-1'>جواب دادن</p>

          </div>
          </div>
          <div className='mr-200'>
            نمایش جواب ها
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rectangle
