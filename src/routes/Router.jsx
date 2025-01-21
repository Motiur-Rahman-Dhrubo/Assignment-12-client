import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import Home from "../layouts/Home/Home";
import Apartments from "../layouts/Apartments/Apartments";
import Login from "../layouts/Login/Login";
import SignUp from "../layouts/SignUp/SignUp";
import UserDashboard from "../layouts/UserDashboard/UserDashboard";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/apartments",
                element: <Apartments></Apartments>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoute>
                    <UserDashboard></UserDashboard>
                </PrivateRoute>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>,
    },
]);

export default Router;