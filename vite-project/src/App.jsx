import { RouterProvider} from "react-router-dom";
import Router from "./routs/Router";
export default function App() {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  );
}
