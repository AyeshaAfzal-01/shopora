import React from 'react'
import { assets } from '../assets/assets'

const Collection = () => {
    return (
        <div className=' flex relative'>
            <div className='w-[15%] hidden md:block bg-slate-100 text-gray-700 text-sm border-r-2 border-gray-300 h-screen -mb-12 px-8 py-4'>
               
               <div className='flex flex-col items-start gap-2 mb-3'>
                <h3 className=' font-semibold'>Filter by category</h3>
                <label className='flex gap-2 items-center justify-center' htmlFor="women">
                    <input type="checkbox" name="women" id="women" />
                    <p>Women</p>
                </label>
                 <label className='flex gap-2 items-center justify-center' htmlFor="men">
                    <input type="checkbox" name="men" id="men" />
                    <p>Men</p>
                </label>
                 <label className='flex gap-2 items-center justify-center' htmlFor="kids">
                    <input type="checkbox" name="kids" id="kids" />
                    <p>Kids</p>
                </label>
               </div>
                <div className='flex flex-col items-start gap-2'>
                    <h3 className='font-semibold'>Shop for</h3>
                    <label className='flex gap-2 items-center justify-center' htmlFor="topwear">
                        <input type="checkbox" name="topwear" id="topwear" />
                        <p>Top wears</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="bottomwear">
                        <input type="checkbox" name="bottomwear" id="bottomwear" />
                        <p>Bottom wears</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="winterwear">
                        <input type="checkbox" name="winterwear" id="winterwear" />
                        <p>Winter wear</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="sportswear">
                        <input type="checkbox" name="sportswear" id="sportswear" />
                        <p>Sport wears</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center ' htmlFor="dresses">
                        <input type="checkbox" name="dresses" id="dresses" />
                        <p>Dresses</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center ' htmlFor="shoes">
                        <input type="checkbox" name="shoes" id="shoes" />
                        <p>Shoes</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center ' htmlFor="assecories">
                        <input type="checkbox" name="assecories" id="assecories" />
                        <p>Assecories</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="skincare">
                        <input type="checkbox" name="skincare" id="skincare" />
                        <p>Skin care</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="perfumes">
                        <input type="checkbox" name="perfumes" id="perfumes" />
                        <p>Perfumes</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="shoes">
                        <input type="checkbox" name="shoes" id="shoes" />
                        <p>Shoes</p>
                    </label>

                    <label className='flex gap-2 items-center justify-center' htmlFor="bags">
                        <input type="checkbox" name="bags" id="bags" />
                        <p>Bags</p>
                    </label>
                </div>
            
            </div>
                <div className='flex lg:hidden items-center gap-2 justify-center'>
                    <p>Filters</p>
                    <img className='w-2' src={assets.dropdown_icon} alt="" />
                    </div>
            <div className='absolute right-4 mt-3 text-sm font-normal '>
                <select className='border-2 border-gray-300 px-2 py-2'>
                    <option value="low to high">Low to High</option>
                    <option value="high to low">High to Low</option>
                    <option value="relative">Relative</option>
                </select>
            </div>

            {}
        </div>
    )
}

export default Collection
