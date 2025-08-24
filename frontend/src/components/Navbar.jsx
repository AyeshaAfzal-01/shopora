import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <div className='flex justify-between px-4 lg:px-20 py-3 items-center'>
            <NavLink to='/' className='text-sky-500 text-2xl font-semibold'>Shopora</NavLink>
            <ul className='hidden sm:flex gap-8 text-gray-600 text-sm font-medium'>
                <NavLink className='flex flex-col items-center' to='/'><p>HOME</p>
                    <hr className='h-[1.5px] w-2/4 border-none bg-gray-600 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center' to='/collection'><p>COLLECTION</p>
                    <hr className='h-[1.5px] w-2/4 border-none bg-gray-600 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center' to='/about'><p>ABOUT</p>
                    <hr className='h-[1.5px] w-2/4 border-none bg-gray-600 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center' to='/contact'><p>CONTACT</p>
                    <hr className='h-[1.5px] w-2/4 border-none bg-gray-600 hidden' />
                </NavLink>
            </ul>

            <div className='flex gap-3 sm:gap-5'>
                <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    <div className='hidden group-hover:block absolute p-4  rounded-md min-w-[120px] text-gray-700 bg-gray-50 border border-white/30 shadow-lg'>
                    <div className='flex flex-col gap-1'>
                        <Link className='cursor-pointer hover:text-blue-500 text-md font-medium'>My profile</Link>
                        <Link to='/orders' className='cursor-pointer hover:text-blue-500 text-md font-medium'>Orders</Link>
                        <Link className='cursor-pointer hover:text-blue-500 text-md font-medium'>Logout</Link>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                <img className='w-5 cursor-pointer' src={assets.cart_icon} alt="" />
                <p className='bg-red-700 absolute text-white rounded-full w-5 h-5 flex items-center justify-center text-xs top-3 left-2'>10</p>
                </Link>
                <img onClick={() => setMenuVisible(true)} className='w-4 block sm:hidden' src={assets.menu_icon} alt='' />
            </div>

             {menuVisible && <div className='menu fixed top-0 left-0 bg-white h-screen w-screen z-50'>
                <div className='flex flex-col'>
                <div onClick={()=>setMenuVisible(false)} className='flex items-center gap-3 my-6 mx-4'>
                   <img className='rotate-180 w-4' src={assets.dropdown_icon} alt="" />
                   <p className='text-xl text-gray-700 font-medium'>Back</p>
                   </div>
                   <NavLink onClick={()=>setMenuVisible(false)} className='text-center border border-gray-300 py-2' to='/'>HOME</NavLink>
                   <NavLink onClick={()=>setMenuVisible(false)} className='text-center border border-gray-300 py-2' to='/collection'>COLLECTION</NavLink>
                   <NavLink onClick={()=>setMenuVisible(false)} className='text-center border border-gray-300 py-2' to='/about'>ABOUT</NavLink>
                   <NavLink onClick={()=>setMenuVisible(false)} className='text-center border border-gray-300 py-2' to='/contact'>CONTACT</NavLink>
                   </div>
                </div>
                }
        </div>
    )
}

export default Navbar
