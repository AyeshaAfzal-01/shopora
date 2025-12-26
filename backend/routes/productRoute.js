import express from 'express'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
import { addProduct, listProducts, removeProduct } from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.post('/add', adminAuth, upload.fields([{name:'image1', maxCount:1 }, {name:'image2', maxCount:2 }, {name:'image3', maxCount:3 }, {name:'image4', maxCount:4 }]), addProduct)
productRouter.get('/list', listProducts)
productRouter.post('/remove', adminAuth, removeProduct)

export default productRouter