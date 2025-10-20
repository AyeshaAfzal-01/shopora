import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Product = ({product}) => {
    const {currency, navigate} = useContext(ShopContext)
    return (
        <div   onClick={() => navigate(`/product/${product._id}`)} className='bg-gray-50 rounded-lg border border-gray-200 pb-2'>
        <img className='mb-2 w-40 sm:w-full' src={product.image[0]} alt="" />
        <div className='flex flex-col gap-2 px-2'>
        <p className='font-medium text-xs md:text-sm'>{product.name}</p>
        <div>
        <p className='text-sky-500 text-sm md:text-md font-bold'>{currency}{product.price}</p>
        </div>
        </div>
        </div>
    )
}

export default Product
