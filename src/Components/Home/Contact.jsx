import React from 'react';
import Lottie from "lottie-react";
import email from '../../images/email.json'

const Contact = () => {
    return (
        <div className='my-20 '>
                    <h1 className="text-3xl font-bold text-center   text-white">Contact Me</h1>

            <div className='grid grid-cols-2'>
                <div className='w-2/3 '>
                    <Lottie animationData={email}></Lottie>
                </div>
                <form className=' mt-20 '>

                    <div className='text-center'>
                    <input type="text" name="" placeholder='Name' className='  w-2/3 text-white  border border-purple-700 input bg-[#230252] '  id="" />
                    </div>
                    <div className='text-center'>
                    <input type="email" name="" placeholder='Email' className='  w-2/3 text-white mt-5  border border-purple-700 input bg-[#230252] '  id="" />
                    </div>
                    <div className='text-center'>
                    <textarea type="text" name="" placeholder='Text' className=' textarea w-2/3  text-white mt-5 border border-purple-700 input bg-[#230252] '  id="" />
                    </div>

                    <div className='text-center '>
                        <button className='  textarea w-2/3  text-white mt-5 border font-bold text-lg  input bg-amber-600 '>Submit</button>
                    </div>
                     
                </form>
            </div>
        </div>
    );
};

export default Contact;