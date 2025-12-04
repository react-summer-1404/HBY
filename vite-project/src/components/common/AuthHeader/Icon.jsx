import React from 'react'
import mediaQuery from '../../../core/utils/mediaQuery'

const Icon = ({src}) => {
  return (
    <img className='w-[180px] my-auto md:mr-[88px]  h-[40px] m-auto' src={src?src:mediaQuery("700px",'/register/icon.png','/register/icon_dark.png')}/>
  )
}

export default Icon