import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Login from './components/Login'
import {ToastContainer} from 'react-toastify'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : null)

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])
  
  return (
    <>
     <ToastContainer />
      {!token ? <Login setToken={setToken} /> :
        <div className='bg-gray-50 min-h-screen'>
          <Navbar setToken={setToken}/>
          <hr className=' h-[1.5px] border-none bg-gray-300' />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/list' element={<List />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      }
    </>

  )
}

export default App
