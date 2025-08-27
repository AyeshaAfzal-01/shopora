import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setToken}) => {
    
    return (
        <div className='flex justify-between px-8 py-2'>
            <Link to='/' className='text-2xl cursor-pointer text-sky-500 font-semibold'>Shopora</Link>
            <button onClick={()=>setToken(null)} className='bg-sky-400 hover:bg-sky-500 px-3 py-1 text-slate-50 drop-shadow-2xl font-medium rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar
