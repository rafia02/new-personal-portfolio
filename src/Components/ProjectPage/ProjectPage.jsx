import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataProject } from '../DataProjects';
import Details from './Details';
import SingleProject from './SingleProject';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectPage = () => {
    return (
        <div className="mb-20 mt-10 mx-6">
        <h1 className="text-white font-bold mb-14 text-center text-4xl"> My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {
                dataProject.map(p =>  <div className=' p-4 bg-[#230252] rounded textShadow border border-purple-900 '>
                    <div className="w-full h-60 overflow-hidden hover:overflow-hidden bg-white">
                        <div
                            className="w-full h-full bg-cover bg-no-repeat bg-animation"
                            style={{
                                backgroundImage: `url(${p.image})`,
                            }}
                        ></div>
                    </div>
                    <div className="flex text-[15px] gap-1 mt-5 text-[#cba8ff] items-center ">
                        <h1>{p.title}</h1>
                        {
                            p.categori ?  <p>({p.categori})</p> :  ''
                        }
                       
                    </div>
        
                    <p className='text-zinc-300  text-xl font-semibold mt-2 mb-8'>{p.sub_title}</p>
        
                    <div>
                        <div className='flex justify-between '>
                            <a className='flex hover:scale-105 duration-300 items-center gap-2 font-bold' href={p.live} target="_blank" >
                                <FaExternalLinkAlt className='text-sm text-amber-400' />
                                <span className='text-amber-400 '>Demo</span>
                            </a>
                            <Link to={`/projects/${p.id}`} className='flex text-[#be93fc] hover:scale-105 duration-300 items-center gap-2 font-bold ' >
                                < FaArrowRight className='text-sm ' />
                                <span className=''>View Details</span>
                            </Link>
                        </div>
                    </div>
        
                </div>)
            }

        </div>

        {/* <div className='text-center'>
            <Link to='/projects' className="text-white bg-amber-500 hover:bg-amber-600   duration-500 font-bold text-lg px-5 py-2 rounded"> Show all projects</Link>

        </div> */}
    </div>
    );
};

export default ProjectPage;