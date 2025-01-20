import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import Home from "../layouts/Home/Home";
import Apartments from "../layouts/Apartments/Apartments";
import Login from "../layouts/Login/Login";

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
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    }
]);

export default Router;