import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Services from './Services';
import Skills from './Skills';
import Titile from './Titile';

const Home = () => {
    return (
        <div>
            <Titile></Titile>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;