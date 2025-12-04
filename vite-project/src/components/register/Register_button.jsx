import React from 'react'

const RegisterButton = ({className,innerHtml}) => {
  return (
    <button className={"w-1/1 h-[48px] rounded-[8px] transition-[2s] hover:scale-98 my-[24px] cursor-pointer "+className}>{innerHtml}</button>
  )
}

export default RegisterButton