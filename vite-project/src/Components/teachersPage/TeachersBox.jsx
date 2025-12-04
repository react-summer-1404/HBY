import React from 'react'

const TeachersBox = ({src,teacherName,description}) => {
  return (
    <div className='w-[264px] h-[130px] bg-[#F5F5F5] drop-shadow-[5px_-0px_0px_rgba(155, 14, 225, 0.1)] p-[24px] rounded-[24px] '>
        <img className='inline w-[80px] h-[80px]' src={src}/>
        <div className='inline-block w-[128px]  mr-2'>
          <h2 className='text-bold text-lg '>{teacherName}</h2>
          <p className=''>{description}</p>
        </div>
    </div>
  )
}

export default TeachersBox;