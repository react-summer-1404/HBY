import { createBrowserRouter } from "react-router-dom";
import React, { Children, Component } from "react";
import RegisterPage from "../../screens/registerPage";
import MainBox_step_1 from "../../components/register/MainBox_step_1";
import MainBox_step_2 from "../../components/register/MainBox_step_2";
import MainBox_step_3 from "../../components/register/MainBox_step_3";

import ForgetPass from "../../screens/ForgetPassPage";
import ForgetPassBox_1 from "../../components/forgetPass/ForgetPassBox_1";
import ForgetPassBox_2 from "../../components/forgetPass/ForgetPassBox_2";
const Router = createBrowserRouter([
  {
    path: "/register",
    Component: RegisterPage,
    children: [
      {
        index: true,
        path: "step1",
        Component: MainBox_step_1,
      },
      { path: "step2", Component: MainBox_step_2 },
      { path: "step3", Component: MainBox_step_3 },
    ],
  },
  {
    path: "/forgetPass",
    Component: ForgetPass,
    children: [
      { path: "step1", Component: ForgetPassBox_1 },
      { path: "step2", Component: ForgetPassBox_2 },
    ],
  },
]);
export { Router };
