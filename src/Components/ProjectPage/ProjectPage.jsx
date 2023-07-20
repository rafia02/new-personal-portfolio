import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {

    useEffect(() => {
        fetch("../../../public/projects.json")
            .then(res => res.json())
            .then(data => {
                setProject(data)
            })
            .catch(e => console.error(e))
    }, [])
    return (
       <div></div>
    );
};

export default ProjectPage;