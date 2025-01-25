import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsBuildingsFill } from "react-icons/bs";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [ userInfo ] = useUser();
    console.log(userInfo[0]?.userRole);

    const navigate = useNavigate();

    const links = <>
        <li><NavLink className='py-0 px-0 w-min' to="/">Home</NavLink></li>
        <li><NavLink className='py-0 px-0 w-min' to="/apartments">Apartment</NavLink></li>
    </>

    const handleLogout = () => {
        logOut();
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Log Out Successful",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => navigate("/"), 1500);
    }
    
    return (
        <div className="sticky border-b top-0 z-50 bg-base-100">
            <div className="navbar w-11/12 mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden shadow mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-nav menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-3 border border-black uppercase font-semibold text-black text-base gap-1">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex text-2xl items-center font-bold"><BsBuildingsFill />M.tower</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-nav menu-horizontal uppercase font-semibold text-black text-base p-0 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="">
                                    <img src={user.photoURL} alt="user_photo" className="w-12 h-12 object-cover rounded-full border border-black" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 border border-black z-[1] w-52 p-2">
                                    <li className="text-black font-semibold py-2 text-lg text-center">{user.displayName}</li>


                                    <li><Link to={ userInfo[0]?.userRole === "user" ? "/user-dashboard" : userInfo[0]?.userRole === "admin" ? "/admin-dashboard" : userInfo[0]?.userRole === "member" ? "/member-dashboard" : "/" } className="text-black justify-center font-semibold rounded-none hover:border border-black py-2 hover:py-[7px] hover:bg-black hover:text-white">Dashboard</Link></li>


                                    <li><button onClick={handleLogout} className="text-black justify-center font-semibold rounded-none hover:border border-black py-2 hover:py-[7px] hover:bg-black hover:text-white">Log Out</button></li>
                                </ul>
                            </div> :
                            <Link to='login' className="text-xl text-black font-semibold flex items-center gap-1 border border-black py-2 px-4 hover:bg-black hover:text-white transition-all duration-[300ms]"><FaUser />Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;