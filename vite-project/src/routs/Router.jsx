import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import RegisterPage from "../screens/registerPage"
import LayOut from '../LayOut/LayOut';
import Login from '../screens/login/login';
import Loginnum from '../screens/login/loginnum';
import CoursesPage from '../Components/CoursesComponent/CoursesPage';
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
        }
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
