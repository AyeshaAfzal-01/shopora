import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Product from './Product'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            let seller = products.filter((item) => item.bestseller)
            setBestSeller(seller.slice(0,6))
            console.log(seller)
        }
    }, [products])
    return (
        <div className='mt-12 px-4 lg:px-12'>
             <h2 className='text-lg sm:text-3xl font-bold mb-3 sm:mb-5'>Bestseller Products</h2>
             <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
                {
                    bestSeller.map((item, index) => (
                        <Product key={index} product={item}/>
                    ))
                }
             </div>
        </div>
    )
}

export default BestSeller
