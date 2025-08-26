import { Router } from "express";
import { registerUser, loginUser, adminLogin } from "../controllers/userController.js";

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter