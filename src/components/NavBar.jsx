import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <nav className="bg-[#1b25bd] ">
            <div className="flex flex-col w-full h-[125px]">
                {/* Logo Section */}
                <div className="flex items-center px-[35px] pt-[20px] pb-[4px] gap-[20px]">
                    <div>
                        <img src={logo} alt="Logo" className="h-[50px] w-[50px] rounded-[50px]" />
                    </div>
                    <Link to="/" className="font-[1000] text-[35px] uppercase text-white tracking-wider ">
                        Village Voice
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-around items-center w-full mb-[20px] p-[10px] ">
                    <Link to="/" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        Home
                    </Link>
                    <Link to="/fileComplaint" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        File Complaints
                    </Link>
                    <Link to="/tracking" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        Track Complaints
                    </Link>
                    <Link to="/login" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        Login
                    </Link>
                    <Link to="/register" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        Register
                    </Link>
                    <Link to="/contact" className="font-bold text-white text-[15px] hover:bg-[#e63946] p-[4px] rounded-[6px] transition-colors duration-200">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
