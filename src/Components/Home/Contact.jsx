import React, { useRef } from 'react';
import Lottie from "lottie-react";
import email from '../../images/email.json'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import  image from "../../images/email.png"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_08oghdn', 'template_2u0htja', form.current, '_qF53UQ6-NADVroSX')
          .then((result) => {
              console.log(result.text)
              e.target.reset()
              toast.success("Email send")
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div className='my-20 mt-10 md:mt-32 '>

            <div className='grid grid-cols-1 text-center items-center md:grid-cols-2'>
                <div className='w-full   '>
                    <img  src={image} alt="" />
                    {/* <Lottie animationData={email}></Lottie> */}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <h1 className="text-3xl font-bold text-center mb-8  text-white">Contact Me</h1>

                    <div className='text-center'>
                    <input type="text" name="user_name" placeholder='Name' className='  w-2/3 text-white  border border-purple-700 input bg-[#230252] '  id="" />
                    </div>
                    <div className='text-center'>
                    <input type="email" name="user_email" placeholder='Email' className='  w-2/3 text-white mt-5  border border-purple-700 input bg-[#230252] '  id="" />
                    </div>
                    <div className='text-center'>
                    <textarea type="text" name="message" placeholder='Text' className=' textarea w-2/3  text-white mt-5 border border-purple-700 input bg-[#230252] '  id="" />
                    </div>

                    <div className='text-center '>
                        <button type='submit' className='   w-2/3  text-white mt-5 border font-bold text-lg  input bg-amber-600 '>Submit</button>
                    </div>
                     
                </form>
            </div>
        </div>
    );
};

export default Contact;