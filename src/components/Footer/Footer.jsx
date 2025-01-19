import React from 'react';
import { BsBuildingsFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-base-300 mt-8 md:mt-12'>
                <footer className="footer w-11/12 mx-auto text-black py-10">
                    <aside>
                        <Link to='/' className="flex text-4xl items-center font-bold"><BsBuildingsFill />M.tower</Link>
                        <p>
                            77/B Kemal Ataturk Ave, Dhaka 1213, Bangladesh.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Social Links:</h6>
                        <div className="grid grid-flow-col gap-5 text-3xl">
                            <a href="https://www.facebook.com/md.motiur.rahman.383" target="_blank"><FaFacebook className='text-blue-700'/></a>
                            <a href="https://www.linkedin.com/in/md-motiur-rahman-105598318/" target="_blank"><FaLinkedin className='text-blue-900'/></a>
                            <a href="https://www.youtube.com/@ruitom.coder383" target="_blank"><FaYoutube className='text-red-600'/></a>
                            <a href="https://github.com/Motiur-Rahman-Dhrubo" target="_blank"><FaGithub /></a>
                        </div>
                    </nav>
                </footer>
            </div>
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by M.tower.</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;