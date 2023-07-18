import { useEffect, useState } from 'react';
import SingleProject from '../ProjectPage/SingleProject';

const Project = () => {
    const [project, setProject] = useState([])

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
        <div className="mb-20">
            <h1 className="text-white font-3xl">project</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                project.map(pro =><SingleProject
                key={pro.title}
                pro={pro}
                ></SingleProject>)
            }
            </div>
        </div>
    );
};

export default Project;