import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { HiArrowUturnRight } from "react-icons/hi2";

const CarbarCommments = ({comment}) => {
  
  return (
    <div>
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

export default CarbarCommments

