import { IoIosMenu } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="drawer lg:drawer-open -mb-6">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                    <IoIosMenu className="border border-black w-8 h-8 rounded-md m-2" />
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black text-white min-h-full lg:w-80 w-60 p-4">
                    {/* Sidebar content here */}
                    <li><NavLink to='/admin-dashboard/profile' className="hover:bg-white hover:text-black rounded-none">My Profile</NavLink></li>
                    <li><NavLink to='/admin-dashboard/manage-members' className="hover:bg-white hover:text-black rounded-none">Manage Members</NavLink></li>
                    <li><NavLink to='/admin-dashboard/make-announcement' className="hover:bg-white hover:text-black rounded-none">Make Announcement</NavLink></li>
                    <li><NavLink to='/admin-dashboard/announcements' className="hover:bg-white hover:text-black rounded-none">Agreement Requests</NavLink></li>
                    <li><NavLink to='/admin-dashboard/announcements' className="hover:bg-white hover:text-black rounded-none">Manage Coupons</NavLink></li>

                    <div className="divider divider-neutral">Pages</div>

                    <li><Link to='/' className="hover:bg-white hover:text-black rounded-none">Home</Link></li>
                    <li><Link to='/apartments' className="hover:bg-white hover:text-black rounded-none">Apartment</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;