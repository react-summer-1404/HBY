import { useState } from "react";

import RegisterPage from "./screens/registerPage";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import {Router} from './config/router/index.jsx'

function App() {
  return(
    <RouterProvider router={Router}/>
  )
}

export default App;
