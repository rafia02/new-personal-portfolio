import React from 'react'
import {  useParams } from 'react-router-dom'
import { dataProject } from '../DataProjects'

const Details = () => {

    const { id } = useParams()
    console.log(id)
  
    const project = dataProject.find((p) => p.id === id);
  
    if (!project) {
      return <div className="container mx-auto p-4">Project not found</div>;
    }

  return (
 <div className="container mx-auto p-4">
    <div className=" p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column: Image */}
      <div className='flex w-full items-center h-full'>
        <div className="w-full h-96  overflow-hidden hover:overflow-hidden bg-white">
          <div
            className="w-full text-center h-full bg-cover bg-no-repeat bg-animation"
            style={{
              backgroundImage: `url(${project?.image})`,
            }}
          ></div>
        </div>
      </div>

      {/* Right Column: Project Details */}
      <div>
        <h1 className="text-amber-500 mb-2 font-semibold">{project?.title}</h1>
        <p className="text-2xl font-semibold text-zinc-300 mb-7">{project?.sub_title}</p>

        {/* Technologies */}
        <ul className="flex flex-wrap mb-4">
          {project?.technology.map((tech, index) => (
            <li
              key={index}
              className="bg-[#2d0d5e] text-indigo-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className='text-violet-400 font-bold'>Project Overview</p>
        <ul className='list-disc ml-5 mt-3 mb-10'>
          {
            project.des?.map((el, i) => <li className=' text-zinc-200 mb-3 capitalize '
              key={i}
            >{el} </li>)
          }
        </ul>

        {/* Description */}
        {/* <p className="text-gray-600 mb-6">{project.des[0]}</p> */}

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.client}
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Code
          </a>
          {project.server && (
            <a
              href={project.server}
              className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          )}
          <a
            href={project.live}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details