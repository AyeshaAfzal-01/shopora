import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Product from '../components/Product'
import { ShopContext } from '../context/ShopContext'
const Collection = () => {
    const [showFilter, setShowFilter] = useState(false)
    const {products} = useContext(ShopContext)
    const [collection, setCollection] = useState([]) // products on page
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) { // uncheck box
            setCategory(categories => categories.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) =>{
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item!==e.target.value))
        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let filterProducts = products.slice()
        if (category.length > 0) { // some category is selectedfilter(product => category.includes(product.category))
            filterProducts = filterProducts.filter(product => category.includes(product.category))
            console.log(filterProducts)
        }
        if (subCategory.length > 0) {
            filterProducts = filterProducts.filter(product => subCategory.includes(product.subCategory))
        }
        setCollection(filterProducts)
    }

    useEffect(()=>{
        applyFilter()
    }, [category, subCategory])
    return (
    <div className='text-gray-700 text-sm relative px-4'>
        <div className='flex justify-between'>
            <div onClick={()=>setShowFilter(true)} className='flex gap-2 items-center justify-center cursor-pointer'>
                <h2 className='font-medium text-lg'>Filters</h2>
               <img className='w-3 h-3 object-contain' src={assets.dropdown_icon} alt="" />
            </div>

                <div className='md:px-4'>
                <select className='border border-gray-300 px-2 py-2'>
                    <option value="high to low">High to Low</option>
                    <option value="low to high">Low to High</option>
                    <option value="relative">Relative</option>
                </select>
            </div>
        </div>

        <div className={`w-[60vw] md:w-[40vw] lg:w-[20vw] px-4 py-4 bg-white h-full fixed top-0 left-0 z-50 shadow-lg  transition-transform duration-300 ${showFilter ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex justify-between mb-2'>
                <h2 className='font-medium text-lg'>Filters</h2>
                <div onClick={()=>setShowFilter(false)} className='flex gap-2 cursor-pointer items-center justify-center'><p>Back</p> <img className='w-3 h-3 object-contain' src={assets.dropdown_icon} alt="" /></div>
            </div>
           
                <div className='flex flex-col text-sm gap-2 '>
                    <h3 className='text-lg font-medium'>Shop for</h3>
                    <label className='flex items-center gap-2' htmlFor="women">
                        <input onChange={toggleCategory} value={"Women"}  type="checkbox" name="women" id="women" />
                        <p>Women</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="men">
                        <input onChange={toggleCategory} value={"Men"}  type="checkbox" name="men" id="men" />
                        <p>Men</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="kids">
                        <input  onChange={toggleCategory} value={"Kids"}  type="checkbox" name="kids" id="kids" />
                        <p>Kids</p>
                    </label>
                </div>

                <div className='flex flex-col gap-2 mt-3 text-sm'>
                    <h3 className='text-lg font-medium'>Shop by Category</h3>
                    <label className='flex items-center gap-2' htmlFor="topwear">
                        <input onChange={(toggleSubCategory)} value={"Topwear"} type="checkbox" name="topwear" id="topwear" />
                        <p>Top wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="bottomwear">
                        <input onChange={(toggleSubCategory)} value={"Bottomwear"} type="checkbox" name="bottomwear" id="bottomwear" />
                        <p>Bottom wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="winterwear">
                        <input onChange={(toggleSubCategory)} value={"Winterwear"} type="checkbox" name="winterwear" id="winterwear" />
                        <p>Winter wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="sportwear">
                        <input onChange={(toggleSubCategory)} value={""} type="checkbox" name="sportwear" id="sportwear" />
                        <p>Sport wears</p>
                    </label>
                    <label className='flex items-center gap-2' htmlFor="dresses">
                        <input onChange={(toggleSubCategory)} value={""} type="checkbox" name="dresses" id="dresses" />
                        <p>Dresses</p>
                    </label>
                </div>
        </div>

              {/* Products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-4 mt-12 md:px-8'>
                {
                collection.map((item, index)=> (
                        <Product key={index} product={item}/>
                    ))
                }
            </div>
    </div>
    )
}

export default Collection
