import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Product from './Product'

const RelatedProducts = ({category, subCategory}) => {
    const { products } = useContext(ShopContext)
    const [relatedProducts, setRelatedProducts] = useState([])
    
    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item )=> subCategory === item.subCategory)
           console.log(productsCopy.slice(0, 5)) // will display only five products
           setRelatedProducts(productsCopy.slice(0, 5))
        }
    }, [products])

    return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
             <h2 className='text-lg sm:text-3xl font-bold mb-3 sm:mb-5'>Related Products</h2>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          relatedProducts.map((item, index)=>(
            <Product key={index} product={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts