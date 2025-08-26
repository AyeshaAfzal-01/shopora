import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Product from './Product'

const NewArrivals = () => {
    const { products } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(()=> {
        if (products.length > 0) {
            const latest = products.slice(0,5)
            setNewArrivals(latest)
            console.log(latest)
        }
    }, [products])
    return (
        <div className='my-12 px-2 md:px-6 lg:px-12 text-gray-700'>
            <h2 className='text-lg sm:text-3xl font-bold mb-3'>New Arrivals</h2>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3'>
                {
                   newArrivals.map((item, index) => (
                <Product key={index} product={item} />
                   ))
                }
            </div>
        </div>
    )
}

export default NewArrivals
