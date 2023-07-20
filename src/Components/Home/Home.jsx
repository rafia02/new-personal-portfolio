import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;