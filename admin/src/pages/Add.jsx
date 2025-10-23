import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Add = ({token}) => {
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)
    const [pname, setPname] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [sizes, setSizes] = useState([])
    const [bestseller, setBestseller] = useState(null)
    const [category, setCategory] = useState('Women')
    const [subCategory, setSubCategory] = useState('Topwear')
    const [allSizes, setAllSizes] = useState(['XXS', 'XS', 'S', 'M', 'L', 'XL'])

    const handleSizeClick = (size) => {
        if(sizes.includes(size)) {
            setSizes(sizes.filter(item => item != size))
        } else {
            setSizes([...sizes, size])
        }
    }

    return (
        <div className='mt-8 mx-12 text-gray-800'>
            <h2 className='text-3xl font-bold text-gray-800'>Add Product</h2>
            <form action="">
                <div className='flex flex-col gap-2'>
                <p className='my-2'>Upload Images</p>
                <div className='flex gap-2'>
                <label htmlFor="image1">
                    <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL({image1})} alt="img1Uploader" />
                    <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                </label>

                <label htmlFor="image2">
                    <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="img2Uploader" />
                    <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                </label>

                <label htmlFor="image3">
                    <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="img2Uploader" />
                    <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                </label>

                <label htmlFor="image4">
                    <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="img2Uploader" />
                    <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
                </label>
                </div>

                <div className='w-full'>
                    <p className='mb-2'>Product Name</p>
                    <input value={pname} onChange={(e)=>setPname(e.target.value)} type="text" className='w-full max-w-[500px] px-3 py-2' placeholder='Type here' required />
                </div>

                <div className='w-full'>
                    <p className='mb-2'>Product Description</p>
                   <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full max-w-[500px] px-3 py-2' placeholder='write product description here...' required/>
               </div>

<div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Project Price</p>
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className='w-full sm:w-[120px] px-3 py-2' placeholder='25' required />
                </div>

                <div>
                    <p className='mb-2'>Project Category</p>
                   <select value={category} onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                   </select>
                </div>

                     <div>
                    <p className='mb-2'>Project SubCategory</p>
                   <select value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                   <option value="Skincare">Skincare</option>
                   <option value="Accessories">Accessories</option>
                   <option value="Topwear">Topwear</option>
                   <option value="Bottomwear">Bottomwear</option>
                   <option value="Sportswear">Sportswear</option>
                   <option value="Winterwear">Winterwear</option>
                   <option value="Perfumes">Perfumes</option>
                   <option value="Shoes">Shoes</option>
                   <option value="Bags">Bags</option>
                   </select>
                </div>
                </div>

                <div>
                    <p className='mb-2'>Select Size</p>
                    <div className='flex gap-3'>
                    {
                        allSizes.map((size) => (
                            <div onClick={()=>handleSizeClick(size)} className={`px-3 py-1 cursor-pointer rounded ${sizes.includes(size) ? "bg-[#C586A5]" : "bg-slate-200"}`}>{size}</div>
                        ))
                    }
                    </div>
                </div>

                <div className='flex gap-2 mt-12'>
                    <input onChange={() => setBestseller(prev => !prev)} type="checkbox" checked={bestseller} id="checkbox" />
                    <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
                </div>

                <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
                </div>
            </form> 
        </div>
    )
}

export default Add
