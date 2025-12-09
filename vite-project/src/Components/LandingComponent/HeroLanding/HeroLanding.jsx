import React from 'react'
import HeroSectionLeft from './HeroSectionLeft'
import HerosectionRight from './HerosectionRight'
const HeroLanding = () => {
  return (
    <>
    <div className='hidden mt-30 md:mt-0  md:flex lg:flex-row items-center justify-center flex-col'> 
  
        <HerosectionRight/>
        <HeroSectionLeft/>

    </div>
    <div className='md:hidden mt-30 md:mt-0  flex  items-center justify-center flex-col'> 
  
    <HeroSectionLeft/>
    <HerosectionRight/>

</div></>
  )
}

export default HeroLanding
