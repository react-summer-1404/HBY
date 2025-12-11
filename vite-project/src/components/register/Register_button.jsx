import React from 'react'
import {Spin} from 'antd'

const RegisterButton = ({className,innerHtml,to,isLoading}) => {
  return (

    <button type='submit' className={"w-1/1 h-[48px] rounded-[8px] transition-[2s] hover:scale-98 my-[24px] cursor-pointer "+className}>{isLoading?<Spin/>:innerHtml}</button>
  )
}

export default RegisterButton