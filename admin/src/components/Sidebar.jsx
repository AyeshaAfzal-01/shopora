import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-r-2 h-screen gap-1 border-gray-300 w-[15vw] pt-2 text-gray-700 text-sm font-medium items-end'>
            <Link to='/add' className='w-[70%] flex items-center gap-2 justify-start border-2 border-gray-300 px-4 cursor-pointer py-2 border-r-0'>
                <img className='w-5' src={assets.add_icon} alt="" />
                <p>Add Product</p>
            </Link>
              <Link to='/list' className='w-[70%] flex items-center gap-2 justify-start border-2 border-gray-300 px-4 cursor-pointer py-2 border-r-0'>
                <img className='w-4.5' src={assets.list_icon} alt="" />
                <p>List Products</p>
            </Link>
              <Link to='/orders' className='w-[70%] flex items-center gap-2 justify-start border-2 border-gray-300 px-4 cursor-pointer py-2 border-r-0'>
                <img className='w-5' src={assets.order_icon} alt="" />
                <p>Orders</p>
            </Link>
        </div>
    )
}

export default Sidebar
