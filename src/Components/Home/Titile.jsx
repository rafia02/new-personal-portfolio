import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../images/personal1.png'

const Titile = () => {
    return (
        <div className="flex mt-12 items-center md:justify-around md:flex-row flex-col gap-16 md:gap-5">
            <div className=" text-center md:text-start font-bold">
                <h1 className="text-[#b789f7] text-5xl mb-10">Rafia Binte Rashed</h1>
                <div className="mb-16 gap-3 items-center md:flex md:justify-center">
                    <span className="text-4xl mr-3 md:mr-0 text-amber-400 ">MERN</span>
                    <span className="text-3xl text-white">Stack Web Developer</span>
                </div>
                <a target="_blank" href='https://drive.google.com/file/d/173DvLuEXxG8L9v18QLdxQRep_IK40ITE/view?usp=sharing' className="text-white  hover:bg-[#410b8d] shadow-genarate duration-700 font-bold text-lg px-5 py-2 rounded-md border border-[#a286c9] bg-[#24064D]">Show Resume</a>
            </div>
            <div className="">
                <div className=" rounded-full" >
                    <img className="w-80 h-80 border-8 border-[#642fad] shadow-genarate rounded-full" src={me} alt="" />
                </div>
            </div>
        </div>


    );
};

export default Titile;