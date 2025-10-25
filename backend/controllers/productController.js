import {v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.json({success: false, message: "incomplete product credentials"})
        }
        price = Number(price)
        if (isNaN(price) || price <= 0) {
            return res.json({success:false, message: "Enter valid price"})
        }

        // uploading images to cloudinary
        const uploadToCloudinary = (file) => {
            return cloudinary.uploader.upload(file.path, {
                folder: "products",
                resource_type: "image"
            })
        }


        const files = [
            req.files?.image1?.[0],
            req.files?.image2?.[0],
            req.files?.image3?.[0],
            req.files?.image4?.[0]
        ].filter(Boolean)

        const result = await Promise.all(files.map(file => uploadToCloudinary(file)))
        const images = result.map(r => r.secure_url)
        if (images.length === 0) {
            return res.json({success: false, message: "no product image added"})
        }

        const newProduct = new productModel({
            name, 
            description,
            price,
            sizes: JSON.parse(sizes),
            bestseller: bestseller || false,
            category,
            subCategory,
            image: images,
            date: Date.now()
        })

        await newProduct.save()
        res.json({success: true, message: 'product saved to db'})
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: error.message})
    }
}

export {addProduct}