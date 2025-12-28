import express from 'express'
import userRouter from './routes/userRouter.js'
import connectDB from './config/mongodb.js'
import dotenv from "dotenv"
import cors from 'cors'
import productRouter from './routes/productRoute.js'
import connectCloudinary from './config/cloudinary.js'
import cartRouter from './routes/cartRouter.js'

const app = express()
const port = process.env.PORT || 4000
dotenv.config()
connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json()) // middleware to parse JSON req bodies
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})