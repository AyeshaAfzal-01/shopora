import React from 'react'
import { assets } from '../assets/assets'

const Category = () => {
    const categories = [
        {
            name: "Personal Care",
            img_url: assets.cart_icon
        },
        {
            name: "Accessories",
            img_url: assets.cart_icon
        }
    ]
    return (
        <div>
            <h2>Shop by Category</h2>
            <div>
                {
                    categories.map((cateory, index) => (
                        <div key={index} className='flex'>
                            <img src={cateory.img_url} alt="" />
                            <p>{cateory.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
