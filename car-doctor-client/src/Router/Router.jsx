import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ChackOut from "../Pages/ChackOut";
import { URL } from "../config/config";
import BookingService from "../Pages/BookingService";

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
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: <ChackOut></ChackOut>,
        loader: ({ params }) => fetch(`${URL}services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <BookingService></BookingService>,
      },
    ],
  },
]);
export default router;
