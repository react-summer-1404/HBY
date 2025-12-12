import React from 'react'
import student  from '../../../public/SVG/student.svg'
import teacher  from '../../../public/profesore/Ellipse 3.png'
import statos  from '../../../public/SVG/status.svg'
import datacours from '../../../public/SVG/datacours.svg'
import AllButton from '../common/AllButton'


const CoursesDetailLeft = ({item}) => {

  return (
    <div className='w-[25%] h[616px] border-2 p-3 border-fuchsia-50'>
    <span>{item.title}</span>
    <div className='flex flex-col justify-between items-center  border-[text-[#9B0EE1]]/20 dark: border-b-fuchsia-600 border-b-2  divide-[#9B0EE1]/20 dark:divide-fuchsia-700 w-[90%]'>
              <div className='flex flex-row justify-between items-center w-[100%] h-20'>
                  <div className='flex items-center gap-2'>
                    <img src={student} alt="" />
                    <p className='text-[#03001C]/50 dark:text-violet-200'>تعداد دانشجو </p>
                    </div>
                    <h6 className='text-[#9B0EE1] dark:text-violet-200'>{item.capacity}   </h6>
                </div> 
                <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
                  <div className='flex items-center gap-2'>
                  <img src={statos} alt="" />
                    <h6 className='text-[#03001C]/50 dark:text-violet-200'> ظرفیت دوره</h6>
                  </div>
                    <h6 className='text-[#9B0EE1] dark:text-violet-200'>{item.capacity}</h6>
                </div>
                <div className='flex flex-row justify-between items-center w-[100%] h-20 ny-3'>
                <div className='flex items-center gap-2'>
                    <img src={datacours} alt="" />
                    <h6 className='text-[#03001C]/50 dark:text-violet-200'>دسته بندی</h6>
                    </div>

                    <h6 className='text-[#9B0EE1] dark:text-violet-200'>{item.courseLevelName} </h6>
                </div>
                <div className='flex flex-row justify-between items-center w-[100%] h-20 bo ny-3'>
                  <div className='flex items-center gap-2'>
                    <img src={datacours} alt="" />
                    <h6 className='text-[#03001C]/50 dark:text-violet-200'>تاریخ  پایان و شروغ</h6>
                    </div>
                    <h6 className='text-[#9B0EE1] dark:text-violet-200'>{item.endTime}</h6>
                </div>
                
            </div>
            {/* price */}
            <div className='flex flex-col items-center mr-5 mt-12 w-96 md:w-64 lg:w-[368px]'>
              <div className= 'w-[370px] flex justify-around items-center border-2  border-fuchsia-500 mt-5 rounded-lg h-16 dark:text-violet-200'>
                <h1>قیمت</h1>
                <h1>{item.cost}</h1>
              </div>
            </div>
            <div className='py-8 w-368 md:w-72 lg:w-96'> <AllButton  title=" شرکت در دوره"/></div>   
            {/* استاد */}
            <div className="flex justify-start items-center gap-5 bg-white dark:bg-black shadow-bg-bluec shadow-xl md:p-10 rounded-md w-[450px] h-24">
          <div className="">
            <img className="rounded-full w-20 h-20" src={teacher} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start dark:text-violet-200">
            <h2>مدرس:  {item.teacherName}</h2>
            <h4>مهندس نرم افزار</h4>
          </div>
        </div>
    </div>
  )
}

export default CoursesDetailLeft
