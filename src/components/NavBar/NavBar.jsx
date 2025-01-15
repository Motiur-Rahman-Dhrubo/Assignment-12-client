import { Link, NavLink } from "react-router-dom";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import './nav.css'

const NavBar = () => {

    const links = <>
        <li><NavLink className='py-0 px-0 w-min' to="/">Home</NavLink></li>
        <li><NavLink className='py-0 px-0 w-min' to="/apartment">Apartment</NavLink></li>
    </>
    return (
        <div className="sticky border-b">
            <div className="navbar bg-base-100 w-11/12 mx-auto px-0">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow uppercase font-semibold text-black text-base gap-1">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex text-2xl items-center font-bold"><BsBuildingsFill />M.tower</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal uppercase font-semibold text-black text-base p-0 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='login' className="text-xl text-black font-semibold flex items-center gap-1 border border-black py-2 px-4 hover:bg-black hover:text-white"><FaUser />Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;