import React from 'react'
import InputSearch from '../LandingComponent/HeroLanding/HerosectionRight/InputSearch'
import CardCoursesPage from './CardNewsPage'

const NewsPage = () => {
   
  return (
    <div className='w-full'>
        <div className="flex flex-col  justify-center items-center my-15">
                    <div className="flex w-full justify-center">
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect.svg"
                        alt=""
                    />
                    <h4 className="mb-2 dark:text-amber-50">با هر دوره یک قدم جلوتر</h4>
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect(1).svg"
                        alt=""
                    />
                    </div>
                    <h1 className="font-bold text-2xl dark:text-amber-50">دوره های آموزشی ما</h1>
        </div>
        <div>
            <InputSearch titel={"دنبال چه می گردی؟"} color={'#3c8B85'}/>
        </div>
        {/* page course  */}
        <CardCoursesPage/>
    </div>
  )
}

export default NewsPage
