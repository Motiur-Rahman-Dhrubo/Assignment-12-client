import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
    },
]);

export default Router;