import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MarketingAdds = () => {
    return (
        <div className='flex flex-col lg:flex-row px-4 lg:px-12 justify-center items-center gap-2 lg:h-[60vh] md:h-[100vh] h-[80vh] text-gray-700'>
            <div className='lg:w-[50%] w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-sky-300 rounded-lg relative'>
                <img className='xl:w-80 2xl:w-96 md:w-96 lg:w-52 w-44 absolute bottom-0 -right-6 z-10' src={assets.shopping} alt="" />
                <div className='text-white px-4 py-2'>
                    <p className='text-lg'>Shopora</p>
                    <h1 className='text-xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold absolute top-20 md:top-25 md:px-6'>Your Elegance,
                        <br /> delivered.
                        <br /> Exclussively
                        <br /> online.
                    </h1>
                    <Link to='/' className='cursor-pointer absolute bottom-1'>www.shopora.com</Link>
                </div>
            </div>

            <div className='lg:w-[50%] w-full flex flex-col gap-2 h-[40vh] md:h-[50vh] lg:h-[60vh]'>
                <div className='h-[50%] p-8 justify-between rounded-lg bg-slate-100 relative flex items-center gap-4 sm:gap-12'>
                    <img className='w-15 md:w-36 lg:w-24 xl:w-28' src={assets.rings} alt="" />
                    <div>
                        <p className='text-xs sm:text-sm font-semibold'>Timeless Elegance</p>
                        <h3 className='md:text-4xl leading-tight lg:text-xl 2xl:text-4xl font-semibold'>Discover our accessories collection</h3>
                           <button className='px-2 text-xs sm:text-sm sm:px-4 py-1 sm:py-2 bg-sky-300 hover:bg-sky-400 text-white drop-shadow-2xl rounded-lg mt-3'>Shop Now</button>
                    </div>
                </div>
                <div className='h-[50%] p-8 rounded-lg bg-slate-100 justify-between relative flex items-center gap-4 sm:gap-12'>
                    <div>
                        <p className='text-xs sm:text-sm font-semibold'>Wear your confidence</p>
                        <h3 className='md:text-4xl leading-tight lg:text-xl 2xl:text-4xl font-semibold'>Explore our shoes collection</h3>
                        <button className='px-2 text-xs sm:text-sm sm:px-4 py-1 sm:py-2 bg-sky-300 hover:bg-sky-400 text-white drop-shadow-2xl rounded-lg mt-3'>Shop Now</button>
                    </div>
                    <img className='w-15 md:w-36 lg:w-24 xl:w-36 xl:absolute xl:right-8' src={assets.heels} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MarketingAdds
