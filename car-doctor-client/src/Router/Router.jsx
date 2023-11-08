import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
