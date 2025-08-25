import React from 'react'
import {assets} from '../assets/assets'

const MarketingAdds = () => {
    return (
        <div className='h-[60vh] flex  w-full gap-4 px-12 mt-20'>
            {/* right side */}
            <div className='relative bg-sky-300 w-[90vw] rounded-lg shadow-2xl border-sky-400'>
                <div className='absolute bottom-0 -right-50 z-100  w-[40vw]'>
                <img className='w-full h-full object-cover' src={assets.shopping} alt="" />
                </div>
                <div className='text-white font-semibold text-2xl px-4 py-2'>Shopora</div>
                <h2 className='text-white drop-shadow-2xl text-6xl absolute top-[30%] z-100 font-semibold px-4'>Your elegance,
                    <br />
                     delivered
                     <br />
                      exclussively 
                     <br />online</h2>

                     <p className='absolute bottom-0 py-2 px-4 text-white'>www.shopora.com</p>
            </div>

            {/* left side */}
            <div className='w-[120vw] flex flex-col flex-wrap gap-2'>
                <div className='bg-slate-50 rounded-2xl h-[30vh] relative shadow-2xl'>
                    <div className='w-[28%] absolute -top-28'>
                <img className='w-full h-full object-cover' src={assets.rings} alt="" />
                </div>
                <div className='absolute top-[20%] left-[40%] text-gray-700 font-semibold pr-20'>
                    <p className='text-xl'>Timeless Elegance</p>
                    <h3 className='text-4xl'>Discover our asscessories collection</h3>
                    <button className='px-4 py-2 bg-sky-400 text-white rounded-lg mt-2'>Shop Now</button>
                </div>
                </div>
                <div className='bg-slate-50 rounded-2xl h-[29vh] relative shadow-2xl'>
                 
             <div className='absolute top-[20%]  text-gray-700 font-semibold pl-30'>
                    <p className='text-xl'>Fashion made effortless</p>
                    <h3 className='text-4xl'>Explore our shoes <br /> collection</h3>
                    <button className='px-4 py-2 bg-sky-400 text-white rounded-lg mt-2'>Shop Now</button>
                </div>
                   <div className='w-[30%] absolute -top-40 right-16'>
             <img className='w-full h-full object-cover' src={assets.heels} alt="" />
             </div>
             </div>
            </div>
        </div>
    )
}

export default MarketingAdds
