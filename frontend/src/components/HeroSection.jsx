import React from 'react'
import { assets } from '../assets/assets'

// HeroSection.jsx
const HeroSection = () => {
  return (
   <div className='relative h-[35vh] md:h-[80vh] lg:h-[90vh] xl:h-[93vh] overflow-hidden rounded-xl bg-gray-700 shadow-lg'>
    <img className='w-full h-full object-cover rounded-xl' src={assets.hero} alt="" />
    <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90'></div>

    <div className='absolute top-[60%] xl:top-[55%] pl-4 md:pl-8 xl:pl-12 text-white'>
      <h1 className='text-sky-500 text-4xl lg:text-9xl xl:text-[14rem] md:text-8xl font-bold md:font-bold drop-shadow-xl md:mb-1'>Shopora</h1>
      <p className='text-lg md:text-3xl xl:text-5xl font-medium'>Pure Elegance</p>
    </div>

    <div className='absolute top-[12%] text-white right-4 md:right-8'>
      <p className='text-sm md:text-2xl lg:text-3xl xl:text-4xl font-medium md:mb-2 xl:mb-3'>Wear your</p>
      <h2 className='text-xl md:text-4xl lg:text-5xl xl:text-8xl font-medium drop-shadow-xl prata-regular'>Confidence</h2>
    </div>
   </div>
  )
}

export default HeroSection