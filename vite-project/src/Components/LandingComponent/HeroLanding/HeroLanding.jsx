import React from 'react'
import HeroSectionLeft from './HeroSectionLeft'
import HerosectionRight from './HerosectionRight'
const HeroLanding = () => {
  return (
    <div className=' flex lg:flex-row items-center justify-center flex-col'> 
  
        <HerosectionRight/>
        <HeroSectionLeft/>

    </div>
  )
}

export default HeroLanding
