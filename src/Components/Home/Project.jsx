import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProject from '../ProjectPage/SingleProject';

const Project = () => {
    const [project, setProject] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        fetch("../../../public/projects.json")
            .then(res => res.json())
            .then(data => {
                setProject(data)
            })
            .catch(e => console.error(e))
    }, [])

    console.log(project)
    return (
        <div className="mb-20 mt-20 mx-6">
            <h1 className="text-white font-bold mb-14 text-center text-4xl"> My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {!showAll &&
                    project.slice(0, 3).map(pro => <SingleProject
                        key={pro.title}
                        pro={pro}
                    ></SingleProject>)
                }

                {showAll &&
                    project.map(pro => <SingleProject
                        key={pro.title}
                        pro={pro}
                    ></SingleProject>)
                }
            </div>

            <div className='text-center'>
                <Link onClick={() => setShowAll(!showAll)} className="text-white  hover:bg-[#410b8d] shadow-genarate duration-700 font-bold text-lg px-5 py-2 rounded-md border border-[#a286c9] bg-[#24064D]"> Show all projects</Link>

            </div>
        </div>
    );
};

export default Project;