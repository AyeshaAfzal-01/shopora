import express from 'express'
import userRouter from './routes/userRouter.js'

const app = express()
const port = process.env.PORT ? process.env.PORT : 4000

app.use(express.json()) // middleware to parse JSON req bodies

app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})