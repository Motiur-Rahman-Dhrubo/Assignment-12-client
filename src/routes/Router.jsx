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
import MemberDashboard from "../layouts/MemberDashboard/MemberDashboard";
import UserProfile from "../layouts/UserDashboard/UserProfile";
import Announcements from "../components/Announcements/Announcements";
import MemberProfile from "../layouts/MemberDashboard/MemberProfile";
import AdminProfile from "../layouts/AdminDashboard/AdminProfile";
import ManageMembers from "../layouts/AdminDashboard/ManageMembers";
import MakeAnnouncement from "../layouts/AdminDashboard/MakeAnnouncement";
import AgreementRequests from "../layouts/AdminDashboard/AgreementRequests";
import ManageCoupons from "../layouts/AdminDashboard/ManageCoupons";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import MakePayment from "../layouts/MemberDashboard/MakePayment";
import Payment from "../layouts/MemberDashboard/Payment";

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
                element: <Announcements></Announcements>,
            },
        ],
    },
    {
        path: "/member-dashboard",
        element: <MemberRoute>
            <MemberDashboard></MemberDashboard>,
        </MemberRoute>,
        children: [
            {
                path: "/member-dashboard/",
                element: <Navigate to="/member-dashboard/profile"></Navigate>,
            },
            {
                path: "/member-dashboard/profile",
                element: <MemberProfile></MemberProfile>,
            },
            {
                path: "/member-dashboard/announcements",
                element: <Announcements></Announcements>,
            },
            {
                path: "/member-dashboard/make-payment",
                element: <MakePayment></MakePayment>,
            },
            {
                path: "/member-dashboard/payment",
                element: <Payment></Payment>,
            },
        ],
    },
    {
        path: "/admin-dashboard",
        element: <AdminRoute>
            <AdminDashboard></AdminDashboard>,
        </AdminRoute>,
        children: [
            {
                path: "/admin-dashboard/",
                element: <Navigate to="/admin-dashboard/profile"></Navigate>,
            },
            {
                path: "/admin-dashboard/profile",
                element: <AdminProfile></AdminProfile>,
            },
            {
                path: "/admin-dashboard/manage-members",
                element: <ManageMembers></ManageMembers>,
            },
            {
                path: "/admin-dashboard/make-announcement",
                element: <MakeAnnouncement></MakeAnnouncement>,
            },
            {
                path: "/admin-dashboard/agreement-requests",
                element: <AgreementRequests></AgreementRequests>,
            },
            {
                path: "/admin-dashboard/manage-coupons",
                element: <ManageCoupons></ManageCoupons>,
            },
        ],
    },
]);

export default Router;