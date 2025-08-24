import React from 'react'
import { assets } from '../assets/assets'

// HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="mt-4 relative h-[40vh] sm:h-[60vh] lg:h-[90vh] rounded-3xl overflow-hidden">
      {/* Background Image with subtle gray gradient */}
      <img
        className="w-full h-full object-cover"
        src={assets.hero}
        alt="Hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"></div>

      {/* Left Content */}
      <div className="absolute top-[55%] sm:top-[50%] left-2 sm:left-6 lg:left-20 flex flex-col gap-1 sm:gap-2 lg:gap-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-sky-500 font-extrabold drop-shadow-lg max-lg:leading-tight">
          Shopora
        </h1>
        <p className="text-white font-semibold text-xs sm:text-lg md:text-xl lg:text-3xl xl:text-5xl tracking-wide">
          Pure Elegance
        </p>
      </div>

      {/* Right Content */}
      <div className="absolute top-[20%] sm:top-[15%] lg:top-[12%] xl:top-[10%] right-2 sm:right-6 lg:right-12 xl:right-20 flex flex-col text-white gap-1 sm:gap-2 lg:gap-3 xl:gap-4 text-right">
        <p className="text-xs sm:text-lg md:text-xl lg:text-3xl xl:text-5xl font-semibold leading-tight">
          Wear your
        </p>
        <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Confidence
        </h2>
      </div>
    </div>
  )
}

export default HeroSection