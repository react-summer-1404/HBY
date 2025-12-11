import { createBrowserRouter } from "react-router-dom";
import React, { Children, Component } from "react";
import RegisterPage from "../../screens/registerPage/";
import MainBox_step_1 from "../../Components/register/MainBox_step_1";
import MainBox_step_2 from "../../Components/register/MainBox_step_2";
import MainBox_step_3 from "../../Components/register/MainBox_step_3";
import ForgetPass from "../../screens/ForgetPassPage";
import ForgetPassBox_1 from "../../Components/forgetPass/ForgetPassBox_1";
import ForgetPassBox_2 from "../../Components/forgetPass/ForgetPassBox_2";
const Router = createBrowserRouter([
  {
    path: "register",
    element: <RegisterPage />,
    children: [
      {
        path: "step1",
        element: <MainBox_step_1/>,
      },
      { path: "step2", element: <MainBox_step_2 /> },
      { path: "step3", element: <MainBox_step_3 /> },
    ],
  },
  {
    path: "forgetPass",
    element: <ForgetPass />,
    children: [
      { path: "step1", element: <ForgetPassBox_1 /> },
      { path: "step2", element: <ForgetPassBox_2 /> },
    ],
  },
]);
export { Router };
