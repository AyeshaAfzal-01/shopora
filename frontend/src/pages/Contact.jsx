import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <h2 className='text-lg sm:text-3xl font-bold text-center mt-10 mb-3 sm:mb-5'>CONTACT US</h2>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.about} alt="contact-img" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>50982 jennefer station <br /> suite 458, Washington DC, USA</p>
          <p className='text-gray-500'>Tel: (412) 777-2100 <br /> Email: admin@shopora.com</p>
          <p className='font-semibold text-xl text-gray-500'>Careers At Shopora.</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default Contact