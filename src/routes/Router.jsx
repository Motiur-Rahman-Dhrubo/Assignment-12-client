import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import Home from "../layouts/Home/Home";
import Apartments from "../layouts/Apartments/Apartments";
import Login from "../layouts/Login/Login";
import SignUp from "../layouts/SignUp/SignUp";
import UserDashboard from "../layouts/UserDashboard/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../layouts/AdminDashboard/AdminDashboard";
import Admina from "../layouts/AdminDashboard/Admina";
import Adminb from "../layouts/AdminDashboard/Adminb";
import MemberDashboard from "../layouts/MemberDashboard/MemberDashboard";
import UserProfile from "../layouts/UserDashboard/UserProfile";

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
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>,
    },
    {
        path: "/user-dashboard/",
        element: <PrivateRoute>
            <UserDashboard></UserDashboard>,
        </PrivateRoute>,
        children: [
            {
                path: "/user-dashboard/",
                element: <Navigate to="/user-dashboard/profile"></Navigate>,
            },
            {
                path: "/user-dashboard/profile",
                element: <UserProfile></UserProfile>,
            },
            {
                path: "/user-dashboard/announcements",
                element: <Adminb></Adminb>,
            },
        ],
    },
    {
        path: "/member-dashboard",
        element: <PrivateRoute>
            <MemberDashboard></MemberDashboard>,
        </PrivateRoute>,
    },
    {
        path: "/admin-dashboard",
        element: <PrivateRoute>
            <AdminDashboard></AdminDashboard>,
        </PrivateRoute>,
        children: [
            {
                path: "/admin-dashboard",
                element: <Admina></Admina>,
            },
            {
                path: "/admin-dashboard/b",
                element: <Adminb></Adminb>,
            },
        ],
    },
]);

export default Router;