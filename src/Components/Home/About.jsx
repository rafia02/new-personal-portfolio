import React from 'react';
import Lottie from "lottie-react";
import img from '../../images/animation_lk6o0ybj.json'

const About = () => {
    return (
        <div className="mt-20 mb-8">
            <div className="w-2/3 mx-auto">
                <h1 className="text-2xl mb-5 font-bold text-center text-[#e4cbfd]">Who I Am ?</h1>
                <h1 className="text-3xl font-bold text-center text-[#ede3f8]">A passionate developer who loves to code</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-6 mt-10 gap-20">
                <div>
                    <Lottie animationData={img}></Lottie>
                </div>
                <div>
                <h1 className="text-3xl mb-3 font-bold text-[#ede3f8] ">About me</h1>
                <hr className="border w-3/12 mb-4" />
                <p className="text-[#9995af] text-lg text-justify ">My name is Rafia Binte Rashed from Bangladesh. I am a MERN stack web developer specializing in React.js development. I enjoy learning new technologies. My interest in web development started in 2022. I use Javascript, React.js, Next.js, Express, Node, Mongodb, Firebase and many other technologies to build high-performance interactive experiences and products. Recently working on some great and best projects. I love to face new chalange and implement new things.</p>
                </div>
            </div>

        </div>
    );
};

export default About;