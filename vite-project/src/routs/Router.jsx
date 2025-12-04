import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import RegisterPage from "../screens/registerPage"
import LayOut from '../LayOut/LayOut';
import { Login } from '../screens/login/login';

import TeachersPage from '../screens/TeachersPage';

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
          path:'/teachersPage',
          element:<TeachersPage/>
        }
      ]
    },
    {
          path:'/login',
          element:<Login/>
        },  
  ]
)


export default Router
