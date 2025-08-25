import React from 'react'
import { assets } from '../assets/assets'

const Category = () => {
    const categories = [
        {
            name: "Skin Care",
            img_url: assets.skincare_icon
        },
        {
            name: "Accessories",
            img_url: assets.ascessory_icon
        },
        {
            name: "Top wears",
            img_url: assets.topwear_icon
        },
        {
            name: "Bottom wears",
            img_url: assets.bottomwear_icon
        },
        {
            name: "Sports wear",
            img_url: assets.sports_icon
        },
        {
            name: "Winter wears",
            img_url: assets.winter_icon
        },
        {
            name: "Perfumes",
            img_url: assets.perfume_icon
        },
        {
            name: "Shoes",
            img_url: assets.shoes_icon
        },
        {
            name: "Bags",
            img_url: assets.bag_icon
        },
    ]
    return (
        <div className='flex justify-between flex-col lg:flex-row sm:px-12 mt-12 text-gray-700'>
            <h2 className='text-lg sm:text-3xl font-bold mb-3 sm:mb-5'>Shop by Category</h2>
            <div className='flex gap-1 sm:gap-2 flex-wrap lg:max-w-xl xl:max-w-3xl'>
                {
                    categories.map((cateory, index) => (
                        <div key={index} className='flex border-2 gap-1 text-xs items-center lg:text-sm xl:text-lg border-sky-400 rounded-lg px-2 py-1 lg:py-2 xl:px-4 xl:py-3'>
                            <img className='w-5' src={cateory.img_url} alt="" />
                            <p>{cateory.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
