import React from 'react';
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleProject = ({ pro }) => {
    const { categori, id, title, sub_title, image, client, server, live, des } = pro
    return (
        <div className=' p-4 bg-[#230252] rounded textShadow border border-purple-900 '>
            <div className="w-full h-64 overflow-hidden hover:overflow-hidden bg-white">
                <div
                    className="w-full h-full bg-cover bg-no-repeat bg-animation"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
            </div>
            <div className="flex text-[15px] gap-1 mt-5 text-[#cba8ff] items-center ">
                <h1>{title}</h1>
                {
                    categori ?  <p>({categori})</p> :  ''
                }
               
            </div>

            <p className='text-zinc-300  text-xl font-semibold mt-2 mb-8'>{sub_title}</p>

            <div>
                <div className='flex justify-between '>
                    <a className='flex hover:scale-105 duration-300 items-center gap-2 font-bold' href={live} target="_blank" >
                        <FaExternalLinkAlt className='text-sm text-amber-400' />
                        <span className='text-amber-400 '>Demo</span>
                    </a>
                    <Link to={`project/${id}`} className='flex text-[#dfc8ff] hover:scale-105 duration-300 items-center gap-2 font-bold ' >
                        < FaArrowRight className='text-sm ' />
                        <span className=''>View More</span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SingleProject;