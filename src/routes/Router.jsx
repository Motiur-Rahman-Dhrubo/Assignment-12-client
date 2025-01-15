import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import Home from "../layouts/Home/Home";

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
        ],
    },
]);

export default Router;