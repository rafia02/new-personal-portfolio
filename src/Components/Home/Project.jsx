import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataProject } from '../DataProjects';
import SingleProject from '../ProjectPage/SingleProject';

const Project = () => {
    const [project, setProject] = useState([])
    const [showAll, setShowAll] = useState(false)


    return (
        <div className="mb-20 mt-10 mx-6">
            <h1 className="text-white font-bold mb-14 text-center text-4xl"> My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {
                    dataProject.slice(0, 3).map(pro => <SingleProject
                        key={pro.title}
                        pro={pro}
                    ></SingleProject>)
                }

                {/* {showAll &&
                    dataProject.map(pro => <SingleProject
                        key={pro.title}
                        pro={pro}
                    ></SingleProject>)
                } */}
            </div>

            <div className='text-center'>
                <Link to='/projects' className="text-white bg-amber-500 hover:bg-amber-600   duration-500 font-bold text-lg px-5 py-2 rounded"> Show all projects</Link>

            </div>
        </div>
    );
};

export default Project;