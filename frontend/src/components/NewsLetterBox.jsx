import React from 'react'
import { assets } from '../assets/assets'

const NewsLetterBox = () => {
    return (
        <div className=' text-gray-700 mx-4 my-12 lg:m-12 rounded-lg flex flex-col gap-3 items-center justify-center'>
            <div className='bg-slate-50 flex flex-col items-center gap-4 w-full lg:w-[60%] h-[70%] justify-center px-4 py-8 rounded-lg mb-4'>
                <h2 className='text-xl lg:text-5xl font-semibold'>Subcribe</h2>
                <p className='text-sm text-center lg:text-lg mb-3'>Sign up with your email to receive news and updates</p>
                <div className='flex items-center justify-center gap-2 lg:gap-4'>
                    <input className='w-[40vw] outline-2 outline-gray-200 px-2 lg:px-4 py-1 lg:py-2 rounded-lg' type="email" placeholder='username@xyz.com' />
                    <button className='bg-sky-300 text-xs lg:text-sm hover:bg-sky-400 text-white drop-shadow-2xl rounded-lg px-3 py-1 lg:py-2'>Sign Up</button>
                </div>
            </div>

            <div className='bg-sky-100 flex lg:flex-row flex-col w-full rounded-lg px-6 lg:px-12 py-4 gap-4 justify-between'>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-xl font-bold'>We're always here to help</h4>
                    <p className='text-xs leading-tight lg:leading-normal lg:font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet maiores accusantium quas.</p>
                </div>

                <div className='flex lg:flex-row flex-col gap-4 items-start lg:gap-12'>
                <div className='flex items-center justify-center gap-2'>
                    <img className='w-5' src={assets.help_icon} alt="" />
                    <div>
                        <p className='text-xs font-medium'>help center</p>
                        <p className='text-sm font-semibold'>help.shopora.com</p>
                    </div>
                </div>

                 <div className='flex items-center justify-center gap-2'>
                    <img className='w-5' src={assets.phone_icon} alt="" />
                    <div>
                        <p className='text-xs font-medium'>Phone</p>
                        <p className='text-sm font-semibold'>+889920202</p>
                    </div>
                </div>

                 <div className='flex items-center justify-center gap-2'>
                    <img className='w-5' src={assets.help_icon} alt="" />
                    <div>
                        <p className='text-xs font-medium'>Email</p>
                        <p className='text-sm font-semibold'>shopora@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterBox
