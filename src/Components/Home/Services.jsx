import React from 'react';
import img from "../../images/buy.png"
import Lottie from "lottie-react";
import design from "../../images/design.json"
import development from "../../images/development.json"
import support from "../../images/support.json"

const Services = () => {

    return (
        <div className='mt-5 mx-6 mb-20'>
            <h1 className='text-white mb-16 text-3xl font-bold text-center'>What services do I provide for my clients?</h1>
            <div className='flex flex-col md:flex-row gap-5 md:gap-0  justify-between '>

            <div className='bg-[#230252] rounded-xl border-2 border-purple-700 py-10  md:py-10 pl-32 md:px-14'>
                    <div className='w-40 ml-4  '>
                        <Lottie animationData={design}></Lottie>
                    </div>
                    <h1 className=" text-xl mt-6 mb-2  text-[#e1cefb] font-bold">Web Design</h1>
                    <ul className='text-[#e1cefb] list-disc  px-4'>
                        <li>Pixel Perfect design.</li>
                        <li>Responsive web design.</li>
                        <li>High quality design.</li>
                    </ul>
                </div>

                <div className='bg-[#230252] rounded-xl border-2 border-purple-700 py-10 md:pb-0 md:py-10 pl-32 md:px-14'>
                    <div className='w-40 ml-4  '>
                        <Lottie animationData={development}></Lottie>
                    </div>
                    <h1 className=" text-xl mt-6 mb-2  text-[#e1cefb] font-bold">Web Development</h1>
                    <ul className='text-[#e1cefb] list-disc  px-4'>
                        <li>MERN stack development.</li>
                        <li>Clear and efficient code.</li>
                        <li>SPA development.</li>
                    </ul>
                </div>

                <div className='bg-[#230252] rounded-xl border-2 border-purple-700 py-10 md:pb-0 md:py-10 pl-32 md:px-14'>
                    <div className='w-40 ml-4  '>
                        <Lottie animationData={support}></Lottie>
                    </div>
                    <h1 className=" text-xl mt-6 mb-2  text-[#e1cefb] font-bold">Programming Support</h1>
                    <ul className='text-[#e1cefb] list-disc  px-4'>
                        <li>Any creative functionality.</li>
                        <li>Try to solve your problem.</li>
                        <li>Available for any time</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Services;