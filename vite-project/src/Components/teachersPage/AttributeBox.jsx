import React from 'react'

const AttributeBox = ({text,className=''}) => {
  return (
    <p className={`bg-no-repeat pr-5 bg-right ${className}`}>{text}</p>
  )
}

export default AttributeBox