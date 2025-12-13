import React from 'react'
import HeroLanding from '../../Components/LandingComponent/HeroLanding/HeroLanding'
import LandingReport from '../../Components/LandingComponent/landingReport/landingReport'

import Slider from '../../Components/LandingComponent/Slider/Slider'
import Slider2 from '../../Components/LandingComponent/ProfessorSlider/Slider2'
import Services from '../../Components/LandingComponent/Services/Services'
import News from '../../Components/LandingComponent/News/News'
import SearchButton from '../../Components/common/SearchButton'
import ScrollToTop from 'react-scroll-to-top'


const Landing = () => {
  return (
    <div className='overflow-hidden w-full'>
    <HeroLanding/>
    <LandingReport/>
    <Slider/>
    <Slider2/>
    <Services/>
    <News/>
    <ScrollToTop className="right-4 bottom-4 absolute"
        smooth
        style={{
          backgroundColor: "rgba(88,0,255,0.4)",
          right: "60px",
          borderRadius: "50%",
          textAlign: "center",
        }}
      />
    </div>
  )
}

export default Landing
