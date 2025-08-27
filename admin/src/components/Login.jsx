import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import {toast} from 'react-toastify'

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
             const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
        if (response.data.success) {
            setToken(response.data.token)
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <div className='text-gray-700 flex items-center justify-center min-h-screen bg-sky-100'>
            <div className='bg-slate-50 px-4 lg:px-12 py-8 rounded-lg shadow-lg lg:w-[40%] w-[70%]'>
                <h2 className='text-xl lg:text-3xl font-semibold text-center mb-12'>Admin Login</h2>
                <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1 items-start justify-center'>
                        <p className='text-xs font-medium'>Enter Email</p>
                        <input onChange={e=>setEmail(e.target.value)} value={email} className='w-full outline outline-gray-300 px-3 py-2 text-sm rounded-lg' type="email" placeholder='Email' required/>
                    </div>
                    <div className='flex flex-col gap-1 items-start justify-center'>
                        <p className='text-xs font-medium'>Enter Password</p>
                        <input onChange={e=>setPassword(e.target.value)} value={password} className='w-full outline outline-gray-300 px-3 py-2 text-sm rounded-lg' type="password" placeholder='Password' required/>
                    </div>
                    <button type='submit' className='mt-4 text-white hover:bg-gray-900 bg-black text-sm px-6 py-2 w-fit mx-auto rounded-lg'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
