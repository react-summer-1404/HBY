import React from 'react'
import mediaQuery from '../../../core/utils/mediaQuery'

const Icon = () => {
  return (
    <img className='w-[180px] my-auto md:mr-[88px]  h-[40px] m-auto' src={mediaQuery("700px",'/register/icon.png','/register/icon_dark.png')}/>
  )
}

export default Icon