import React from 'react'

import CoursesDetailLeft from './CoursesDetailLeft'

import CoursesDetailsRight from './CoursesDetailsRight';

const CoursesDetails = () => {

  
  return (
    <div>
      {/* up */}
      <div className='flex justify-center gap-5 mt-40 mx-auto items-center w-full h-full'>
        {/* right */}
          <CoursesDetailsRight/>
        {/* left */}
          <CoursesDetailLeft/>
      </div>
      {/* downe */}
      <div></div>
    </div>
  )
}

export default CoursesDetails
