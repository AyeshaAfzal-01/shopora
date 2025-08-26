import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MarketingAdds = () => {
    return (
        <div className='flex flex-col lg:flex-row px-4 lg:px-12 justify-center items-center gap-2 lg:h-[60vh] md:h-[100vh] h-[80vh]'>
            <div className='lg:w-[50%] w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-sky-300 rounded-lg relative'>
                <img className='xl:w-80 2xl:w-96 md:w-96 lg:w-52 w-44 absolute bottom-0 -right-6 z-10' src={assets.shopping} alt="" />
                <div className='text-white px-4 py-2'>
                    <p className='text-lg'>Shopora</p>
                    <h1 className='text-xl md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold absolute top-20 md:top-25 md:px-6'>Your Elegance,
                        <br /> delivered.
                        <br /> Exclussively
                        <br /> online.
                    </h1>
                    <Link to='/' className='cursor-pointer absolute bottom-1'>www.shopora.com</Link>
                </div>
            </div>

            <div className='bg-red-300 lg:w-[50%] w-full flex flex-col gap-2 h-[40vh] md:h-[50vh] lg:h-[60vh]'>
                <div className='h-[50%] px-4 py-8 rounded-lg bg-slate-100 relative'>
                    <img className='w-15 md:w-36 lg:w-24 xl:w-36' src={assets.rings} alt="" />
                </div>
                <div className='h-[50%] px-4 py-8 rounded-lg bg-slate-100 relative'>
                    <img className='w-15 md:w-36 lg:w-24 xl:w-36' src={assets.heels} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MarketingAdds
