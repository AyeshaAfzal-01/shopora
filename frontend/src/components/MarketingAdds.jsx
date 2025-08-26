import React from 'react'
import { assets } from '../assets/assets'

const MarketingAdds = () => {
    return (
        <div className='flex flex-col lg:flex-row px-4 lg:px-12 justify-center items-center gap-2 lg:h-[60vh] h-[80vh]'>
            <div className='lg:w-[50%] w-full h-[60vh] bg-sky-300 rounded-lg relative'>
                <img className='xl:w-80 2xl:w-96 lg:w-52 md:w-80 w-52 absolute bottom-0 -right-6 z-10' src={assets.shopping} alt="" />
            </div>

            <div className='bg-red-300 lg:w-[50%] w-full flex flex-col gap-2 h-[60vh]'>
                <div className='h-[50%] px-4 py-8 rounded-lg bg-slate-100 relative'>
                    <img className='xl:w-36 w-20' src={assets.rings} alt="" />
                </div>
                <div className='h-[50%] px-4 py-8 rounded-lg bg-slate-100 relative'>
                    <img className='xl:w-36 w-20' src={assets.heels} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MarketingAdds
