// import React from 'react'
// import SearchFooter from '../common/SearchFooter'


// const Footer = () => {
//   return (
//     <div className=' w-full h-[410px] top-[3631px]'>
  
//       <div className="w-[230px] h-[130px] -z-50 relative top-0 left-0 ">
//        <img src="../../../public/footer/Group(1).svg"  />
//       </div>
//       <div className=" bg-[#9B0EE1] w-full  h-[335px]">
//        <div className='flex  justify-between mb-10 mx-20 py-10 '>
//         <div className='w-[20%] h-[38px] text-white font-bold gap-3 flex flex-col   order-4 lg:order-1'>
//           <p className='  mb-5'>ارتباط با ما</p>
//           <span>09112222222</span>
//           <span>bahar@gmail.com</span>
//           <span>آدرس : مازندران ساری زیبا</span>

//         </div>
//         <div className='w-[30%] h-[38px] gap-3 flex items-center flex-col'>
//       <img  className="w-42 flex justify-center" src="../../../../public/logo/Logofoter.png" alt="" />
//       <p className='text-white font-bold my-5'>همین حالا اقدام کن و به ما ملحق شو</p>
//        <SearchFooter/>
//     </div>
//     <div className='w-[20%] h-[38px] gap-3  text-white font-bold flex items-center flex-col'>
//       <h2 className='mb-3'>لینک ها</h2>
//       <p>دوره ها</p>
//       <p>  اساتید برتر</p>
//       <p> دانشجویان برتر</p>
//       <p>خبر های داغ</p>
//     </div>
//     </div>
//       </div>
//     </div>
      
  
//   )
// }

// export default Footer
import React from 'react'
import SearchFooter from '../common/SearchFooter'

const Footer = () => {
  return (
    <div className='w-full h-auto'>

      <div className="w-[230px] h-[130px] -z-50 relative top-0 left-0">
        <img src="../../../public/footer/Group(1).svg"  />
      </div>

      <div className="bg-[#9B0EE1] w-full h-full">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between mb-10 mx-18 py-10 gap-10'>

          {/* ارتباط با ما — در موبایل آخر، در lg اول (سمت راست) */}
          <div className='w-full lg:w-[20%] text-white font-bold flex flex-col  items-center gap-3 
                          order-4 lg:order-1'>
            <p className='mb-5'>ارتباط با ما</p>
            <span>09112222222</span>
            <span>bahar@gmail.com</span>
            <span>آدرس : مازندران ساری زیبا</span>
          </div>

          {/* لوگو — در موبایل اول، در lg دوم */}
          <div className='w-full lg:w-[25%] flex items-center flex-col 
                          order-1 lg:order-2'>
            <img className="w-42" src="../../../../public/logo/Logofoter.png" alt="" />
           
          </div>

          {/* سرچ — در موبایل دوم، در lg سوم */}
          <div className='w-full lg:w-[25%] flex items-center flex-col 
                          order-2 lg:order-3'>
                             <p className='text-white font-bold my-5 text-center'>
              همین حالا اقدام کن و به ما ملحق شو
            </p>
            <SearchFooter />
          </div>

          {/* لینک‌ها — در موبایل سوم، در lg چهارم (سمت چپ) */}
          <div className='w-full lg:w-[20%] text-white font-bold flex items-center flex-col 
                          order-3 lg:order-4'>
            <h2 className='mb-3'>لینک ها</h2>
            <p>دوره ها</p>
            <p>اساتید برتر</p>
            <p>دانشجویان برتر</p>
            <p>خبر های داغ</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
