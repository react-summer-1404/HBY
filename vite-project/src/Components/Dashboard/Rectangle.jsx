import React from 'react'
import RectangleRight from './Rectangle/RectangleRight'
import RectangleLeft from './Rectangle/RectangleLeft'

function Rectangle() {
  return (
    <div className='flex lg:flex-row flex-col gap-28'>
      {/* right */}
      <RectangleRight/>
      {/* left */}
      <RectangleLeft/>
    </div>
  )
}

export default Rectangle
