// import React from 'react'

import { useNavigate } from "react-router-dom";

// import "tailwindcss";
const MenuComponent = () => {
   const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate("/cource");
    };
    const handleLoginClick2 = () => {
      navigate("/");
    };
  return (
    <div className='md:flex text-1x1 md:w-[1247.84px] h-[40px] md:justify-center  gap-4 hidden'>
      <div className="text-fuchsia-900 dark:text-fuchsia-600" onClick={handleLoginClick2}>خانه</div>
      <div className="cursor-pointer dark:text-amber-50" onClick={handleLoginClick}>دوره ها</div>
      <div className="cursor-pointer dark:text-amber-50">اخبار و مقالات</div>
      <div className="cursor-pointer dark:text-amber-50">اساتید</div>
      <div className="cursor-pointer dark:text-amber-50">ارتباط با ما</div>
    </div>
  )
}

export default MenuComponent
