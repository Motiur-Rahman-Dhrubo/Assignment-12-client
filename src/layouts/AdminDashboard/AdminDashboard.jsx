import { NavLink, Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className="drawer lg:drawer-open -mb-6">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black text-white min-h-full lg:w-80 w-60 p-4">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard' selected className="hover:bg-white hover:text-black rounded-none">Admin Profile</NavLink></li>
                    <li><NavLink to='/dashboard/b' className="hover:bg-white hover:text-black rounded-none">Sidebar Item 2</NavLink></li>

                    <div className="divider divider-neutral">Pages</div>

                    <li><NavLink to='/' className="hover:bg-white hover:text-black rounded-none">Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;