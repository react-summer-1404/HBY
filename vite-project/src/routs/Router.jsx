import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import RegisterPage from "../screens/registerPage"
import LayOut from '../LayOut/LayOut';
import Login from '../screens/login/login';
import Loginnum from '../screens/login/loginnum';
import CoursesPage from '../Components/CoursesComponent/CoursesPage';
import CoursesDetails from '../Components/CoursesDetails/CoursesDetails';
import CoursePageCard2 from '../Components/LandingComponent/Slider/CourseCard/CourseCard2';
import CoursesPage2 from '../Components/CoursesComponent/coursesPage2';
import ScrollToTop from '../Components/Scrolltoup/ScrollToTop';
// import { Login } from '../screens/login/login';

const Router= createBrowserRouter(
  
  [
       {
      path:"/",
      element:<LayOut/>,
      children:[
        {
          path:'/',
          element : <Landing/>
        },
        
        {
          path:'/register',
          element:<RegisterPage/>
        },
        {
          path:'/cource',
          element:<CoursesPage/>
        },
        {
          path:'/courcesDetails/:id',
          element:<CoursesDetails/>
        }

        // {
        //   path:'/cource2',
        //   element:<CoursesPage2/>
        // },

      ]
    },
    {
          path:'/login',
          element:<Login/>
        },  
          {
          path:'/loginnum',
          element:<Loginnum/>
        },  
  ]
)


export default Router
