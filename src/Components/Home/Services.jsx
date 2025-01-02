import React from 'react';
import Lottie from "lottie-react";
import design from "../../images/design.json"
import development from "../../images/development.json"
import support from "../../images/support.json"


const Services = () => {

    return (
        <div className='mt-5 mx-6 mb-20'>
            <h1 className='text-white mb-16 text-3xl font-bold text-center'>What services do I provide for my clients?</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10  '>

                <div className='bg-[#230252] border-purple-900 rounded-xl border-2 py-6 px-14'>
                    <div className='flex items-center w-32'>
                        <Lottie animationData={design}></Lottie>
                    </div>
                    <h1 className="text-xl mt-6 mb-2 leading-loose text-zinc-300 font-bold">Web Design</h1>
                    <ul className='text-[#ad9bc6] mt-4 list-disc flex flex-col gap-2 px-4'>
                        <li>Pixel Perfect design.</li>
                        <li>Responsive web design.</li>
                        <li>High quality design.</li>
                    </ul>
                </div>

                <div className='bg-[#230252] border-purple-900 rounded-xl border-2 py-6 px-14'>
                    <div className='flex items-center w-32'>
                        <Lottie animationData={development}></Lottie>
                    </div>
                    <h1 className="text-xl mt-6 mb-2 leading-loose text-zinc-300 font-bold">Web Development</h1>
                    <ul className='text-[#ad9bc6] mt-4 list-disc flex flex-col gap-2 px-4'>
                        <li>MERN stack development.</li>
                        <li>Clear and efficient code.</li>
                        <li>SPA development.</li>
                    </ul>
                </div>

                <div className='bg-[#230252] border-purple-900 rounded-xl border-2 py-6 px-14'>
                    <div className='flex items-center w-32'>
                        <Lottie animationData={support}></Lottie>
                    </div>
                    <h1 className="text-xl mt-6 mb-2 leading-loose text-zinc-300 font-bold">Programming Support</h1>
                    <ul className='text-[#ad9bc6] mt-4 list-disc flex flex-col gap-2 px-4'>
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