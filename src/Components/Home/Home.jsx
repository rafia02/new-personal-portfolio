import React from 'react';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Titile from './Titile';

const Home = () => {
    return (
        <div>
            <Titile></Titile>
            <About></About>
            <Skills></Skills>
            <Project></Project>
        </div>
    );
};

export default Home;