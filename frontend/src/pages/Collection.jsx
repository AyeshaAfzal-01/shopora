import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {ShopContext} from '../context/ShopContext'
import Product from '../components/Product'

const Collection = () => {
    const [showFilter, setShowFilter] = useState(false)
    const {products} = useContext(ShopContext)
    return (
        <div className='text-gray-700 flex'>
            <div onClick={() => setShowFilter(!showFilter)} className={`flex items-center md:hidden gap-1 ${showFilter ? "hidden" : ""}`}>
                <h2>Filters</h2>
                <img className='w-1' src={assets.dropdown_icon} alt="" />
            </div>


            <div className={`${showFilter ? "" : "hidden"} md:block -mb-12 -ml-2 flex flex-col gap-2 min-w-[15vw] px-2 py-4 min-h-screen  border-r-2 border-gray-300`}>
                <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'>Filters</h2>
                    <div onClick={() => setShowFilter(false)} className='flex gap-2 md:hidden '>
                        <p>Back</p>
                        <img className='w-2' src={assets.dropdown_icon} alt="" />
                    </div>
                </div>

                <div className='flex flex-col text-sm gap-2 '>
                    <h3 className='text-lg font-medium'>Shop for</h3>
                    <label className='flex items-center gap-2' htmlFor="women">
                        <input type="checkbox" name="women" id="women" />
                        <p>Women</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="men">
                        <input type="checkbox" name="men" id="men" />
                        <p>Men</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="kids">
                        <input type="checkbox" name="kids" id="kids" />
                        <p>Kids</p>
                    </label>
                </div>

                <div className='flex flex-col gap-2 mt-3 text-sm'>
                    <h3 className='text-lg font-medium'>Shop by Category</h3>
                    <label className='flex items-center gap-2' htmlFor="topwear">
                        <input type="checkbox" name="topwear" id="topwear" />
                        <p>Top wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="bottomwear">
                        <input type="checkbox" name="bottomwear" id="bottomwear" />
                        <p>Bottom wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="winterwear">
                        <input type="checkbox" name="winterwear" id="winterwear" />
                        <p>Winter wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="sportwear">
                        <input type="checkbox" name="sportwear" id="sportwear" />
                        <p>Sport wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="dresses">
                        <input type="checkbox" name="dresses" id="dresses" />
                        <p>Dresses</p>
                    </label>
                </div>
            </div>

            {/* Products */}
            <div className='grid xl:grid-cols-5 gap-4 mt-12 px-8'>
                {
                    products.map((item, index)=> (
                        <Product product={item}/>
                    ))
                }
            </div>

            <div className='px-4'>
                <select className='border border-gray-300 px-2 py-2'>
                    <option value="high to low">High to Low</option>
                    <option value="low to high">Low to High</option>
                    <option value="relative">Relative</option>
                </select>
            </div>
        </div>
    )
}

export default Collection
