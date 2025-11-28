import React from 'react'
import Icon from './Icon'

const AuthHeader = ({src=false}) => {
  return (
    <div className='h-[40px] w-1/1 mt-[16px]'>
        <Icon src={src}/>
    </div>
  )
}

export default AuthHeader