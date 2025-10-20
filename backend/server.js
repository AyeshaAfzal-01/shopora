import express from 'express'
import userRouter from './routes/userRouter.js'
import connectDB from './config/mongodb.js'
import dotenv from "dotenv"
import cors from 'cors'

const app = express()
const port = process.env.PORT || 4000
dotenv.config()
connectDB()

app.use(express.json()) // middleware to parse JSON req bodies
app.use(cors())

app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})