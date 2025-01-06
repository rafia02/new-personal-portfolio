// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { BsGithub, BsLinkedin} from "react-icons/bs";




// const Navber = () => {

//     const manueBar = <>
//         <Link to="/" className=' hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg ' >Home</Link>
//         <Link to="/about" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>About</Link>
//         <Link to="/skills" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Skills</Link>
//         <Link to="/projects" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Projects</Link>
//         <Link to="/contact" className='hover:bg-purple-600 px-4 rounded duration-700 mb-2 md:mb-0 mr-2 font-semibold text-lg'>Contact</Link>
        
//     </>

//     return (
//         <div className="navbar md:px-5 text-purple-100 py-7">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 text-center shadow rounded border-purple-200 border bg-indigo-950 w-52">
//                         {manueBar}

//                     </ul>
//                 </div>
//                 <Link to='/' className=' flex gap-2 text-xl md:text-3xl  font-bold'>
//                     <h1 className="text-amber-400">Rafia's </h1>
//                     <h1 className="text-[#b789f7]">Portfolio</h1>
//                 </Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">

//                     {manueBar}
//                 </ul>
//             </div>
//             <div className="navbar-end mr-2 md:mr-0 text-2xl">

//                 <a href="https://github.com/rafia02" target="_blank" className="mr-5"><BsGithub></BsGithub></a>
//                 <a  target="_blank" href="https://www.linkedin.com/in/rafia-binte-rashed/"><BsLinkedin></BsLinkedin></a>



//             </div>
//         </div>
//     );
// };

// export default Navber;





import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navber = () => {
    const location = useLocation();

    const manueBar = (
        <>
            <Link
                to="/"
                className={`hover:border-b-purple-600 mr-10 hover:border-b-2 mb-2 md:mb-0 font-semibold text-lg ${
                    location.pathname === "/" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                Home
            </Link>
            <Link
                to="/about"
                className={`hover:border-b-purple-600 hover:border-b-2 mb-2 md:mb-0 mr-10 font-semibold text-lg ${
                    location.pathname === "/about" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                About
            </Link>

            <Link
                to="/skills"
                className={`hover:border-b-purple-600 hover:border-b-2 mb-2 md:mb-0 mr-10 font-semibold text-lg ${
                    location.pathname === "/skills" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                Skills
            </Link>


            {/* <Link
                to="/skills"
                className={`hover:border-b-purple-600 hover:border-b-2 mb-2 md:mb-0 mr-10 font-semibold text-lg ${
                    location.pathname === "/skills" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                Skills
            </Link> */}
            <Link
                to="/projects"
                className={`hover:border-b-purple-600 hover:border-b-2 mb-2 md:mb-0 mr-10 font-semibold text-lg ${
                    location.pathname === "/projects" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                Projects
            </Link>
            <Link
                to="/contact"
                className={`hover:border-b-purple-600 hover:border-b-2 mb-2 md:mb-0 mr-10 font-semibold text-lg ${
                    location.pathname === "/contact" ? "border-b-purple-600 border-b-2 text-white" : ""
                }`}
            >
                Contact
            </Link>
        </>
    );

    return (
        <div className="navbar md:px-5 text-purple-100 py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-center shadow rounded border-purple-200 border bg-indigo-950 w-52"
                    >
                        {manueBar}
                    </ul>
                </div>
                <Link to="/" className="flex gap-2 text-xl md:text-3xl font-bold">
                    <h1 className="text-amber-400">Rafia's </h1>
                    <h1 className="text-[#b789f7]">Portfolio</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{manueBar}</ul>
            </div>
            <div className="navbar-end mr-2 md:mr-0 text-2xl">
                <a
                    href="https://github.com/rafia02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-5"
                >
                    <BsGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/rafia-binte-rashed/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Navber;
