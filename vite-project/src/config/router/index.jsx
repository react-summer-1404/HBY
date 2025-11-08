import { createBrowserRouter } from "react-router-dom";
import React, { Children, Component } from "react";
import RegisterPage from "../../screens/registerPage";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import MainBox_step_2 from "../../components/register/MainBox_step_2";
const Router = createBrowserRouter([
  {
    path: "/",
    Component: RegisterPage,
    children: [
      {
        index:true,
        path:"step1",
        Component: MainBox_step_1,
      },
      {path:"step2",Component:MainBox_step_2}
    ],
  },
]);
export { Router };
