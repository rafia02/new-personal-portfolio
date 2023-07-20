import React from 'react';

const SingleProject = ({ pro }) => {
    const { categori, title, image, client, server, live, technology } = pro
    return (
        <div className='px-3 relative py-5 pb-10 bg-[#230252] rounded textShadow border border-purple-700 '>


            <div className="text-[#ece5f8]">
                <h1 className='text-2xl text-center font-bold'>{title}</h1>
                <p className='text-2xl text-center my-4'>{categori}</p>
            </div>


            <div className="w-full h-52 mt-5 overflow-hidden hover:overflow-hidden rounded-lg bg-white">
                <div
                    className="w-full h-full bg-cover bg-no-repeat bg-animation"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
            </div>


            {/* <div className='w-ful h-60'>
                <img className='h-full  w-full mx-auto' src={image} alt="" />
            </div> */}

            <div className='flex flex-wrap  mt-5 mb-10'>
                {
                    technology.map((el, i) => <span className='border my-[5px] text-white border-purple-300 py-1 px-2 mx-1 rounded-lg'
                        key={i}
                    >{el} </span>)
                }
            </div>



            <div className='absolute  w-full  bottom-0 pb-2'>
                <div className='mb-3 flex justify-between '>
                    <a className='bg-purple-700  hover:bg-purple-600 duration-700 font-bold px-3 py-1 text-center text-white rounded-sm' href={live} target="_blank" >Live</a>

                    <a className='bg-purple-700  hover:bg-purple-600 duration-700 font-bold px-3 py-1 text-center text-white rounded-sm' href={client} target="_blank" >Client</a>

                    <a className='bg-purple-700 mr-6 hover:bg-purple-600 duration-700 font-bold px-3 py-1 text-center text-white rounded-sm' href={server} target="_blank" >Server</a>

                </div>
            </div>

        </div>
    );
};

export default SingleProject;