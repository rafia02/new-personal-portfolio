import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGithub, BsLinkedin} from "react-icons/bs";




const Navber = () => {

    const manueBar = <>
        <Link to="/" className=' hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg ' >Home</Link>
        <Link to="/about" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>About</Link>
        <Link to="/skills" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Skills</Link>
        <Link to="/project" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Projects</Link>
        <Link to="/contact" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Contact</Link>
        
    </>

    return (
        <div className="navbar mx-5 text-purple-100 py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 text-center shadow rounded border-purple-200 border bg-indigo-950 w-52">
                        {manueBar}

                    </ul>
                </div>
                <div className=' flex gap-2 text-xl md:text-3xl  font-bold'>
                    <h1 className="text-amber-400">Rafia's </h1>
                    <h1 className="text-[#b789f7]">Portfolio</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {manueBar}
                </ul>
            </div>
            <div className="navbar-end text-2xl mr-10">

                <a href="https://github.com/rafia02" target="_blank" className="mr-5"><BsGithub></BsGithub></a>
                <a  target="_blank" href="https://www.linkedin.com/in/rafia-binte-rashed/"><BsLinkedin></BsLinkedin></a>



            </div>
        </div>
    );
};

export default Navber;