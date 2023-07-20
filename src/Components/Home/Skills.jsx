import React, { useEffect } from 'react';
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';
import { datas } from './Datas';

const Skills = () => {

    
    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true
        });

    }, [])


    return (
        <div className="mt-20 w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center my-16 text-[#ede3f8] ">My Skills</h1>
            <div class="my-carousel">
                {
                    datas.map(d => <div className="mr-7 h-60">
                    <div className="card w-64 mx-auto md:mx-auto md:w-52 bg-[#230252] border border-purple-700 shadow-xl flex flex-col justify-center items-center py-10">
                        <div className="w-20 rounded-full bg-gray-100 p-3">
                            <img src={d.img} alt="" className="w-20 mx-auto" />
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-bold text-white border-white px-3 rounded-3xl">
                                {d.title}
                            </h3>
                        </div>
                    </div>
                 </div>)
                }
            </div>
            
        </div>
    );
};

export default Skills;