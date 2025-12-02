import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer/Footer'
import HeaderComponent from '../Components/LandingComponent/HeaderComponent/HeaderComponent'
import HeroLanding from '../Components/LandingComponent/HeroLanding/HeroLanding'
import NavBar from '../Components/LandingComponent/HeaderComponent/NavBar'
import ScrollToTop from '../Components/Scrolltoup/ScrollToTop'


const LayOut = () => {
  return (
    <div className='overflow-hidden'>
      <ScrollToTop/>
      {/* <NavBar/> */}
    <HeaderComponent/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default LayOut
