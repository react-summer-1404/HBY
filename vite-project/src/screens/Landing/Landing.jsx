import React from 'react'
import HeroLanding from '../../Components/LandingComponent/HeroLanding/HeroLanding'
import LandingReport from '../../Components/LandingComponent/landingReport/landingReport'

import Slider from '../../Components/LandingComponent/Slider/Slider'
import Slider2 from '../../Components/LandingComponent/ProfessorSlider/Slider2'
import Services from '../../Components/LandingComponent/Services/Services'
import News from '../../Components/LandingComponent/News/News'
import SearchButton from '../../Components/common/SearchButton'


const Landing = () => {
  return (
    <div className='overflow-hidden w-full'>
    <HeroLanding/>
    <LandingReport/>
    <Slider/>
    <Slider2/>
    <Services/>
    <News/>
    </div>
  )
}

export default Landing
