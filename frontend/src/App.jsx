import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='px-2'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
