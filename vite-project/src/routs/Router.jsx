import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import LayOut from '../LayOut/LayOut';
import Login from '../screens/login/login';
import Loginnum from '../screens/login/loginnum';
import CoursesPage from '../Components/CoursesComponent/CoursesPage';
import CoursesDetails from '../Components/CoursesDetails/CoursesDetails';
import CoursePageCard2 from '../Components/LandingComponent/Slider/CourseCard/CourseCard2';
import CoursesPage2 from '../Components/CoursesComponent/coursesPage2';
import NewsPage from '../Components/NewsComponent/NewsPage';
import RegisterPage from "../screens/registerPage/";
import MainBox_step_1 from "../Components/register/MainBox_step_1";
import MainBox_step_2 from "../Components/register/MainBox_step_2";
import MainBox_step_3 from "../Components/register/MainBox_step_3";
import ForgetPass from "../screens/ForgetPassPage";
import ForgetPassBox_1 from "../Components/forgetPass/ForgetPassBox_1";
import ForgetPassBox_2 from "../Components/forgetPass/ForgetPassBox_2";
import RegisterPage from "../screens/registerPage";
import Dashboard from "../Components/Dashboard/Dashboard";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },

      {
        path: "/cource",
        element: <CoursesPage />,
      },
      {
        path: "/courcesDetails/:id",
        element: <CoursesDetails />,
      },
      {
        path: "/NewsPage",
        element: <NewsPage />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginnum",
    element: <Loginnum />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

export default Router;
