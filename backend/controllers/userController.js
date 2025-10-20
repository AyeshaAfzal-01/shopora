import validator from 'validator'
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET) // jwt.sign(payload, secret)
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.json({ success: false, message: "incomplete credentials" })
        }

        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "Email already exists" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "not a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please use a strong password" })
        }

        const salt = await bcrypt.genSalt(10) // hashing the password
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        const token = createToken(newUser._id)
        res.json({ success: true, message: "user registered", token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.json({ success: false, message: "incomplete credentials" })
        const user = await userModel.findOne({ email })
        if (!user) return res.json({ success: false, message: "user does'nt exist - please sign up" })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.json({ success: false, message: "invalid credentials" })
        const token = createToken(user._id)
        res.json({ success: true, message: "login successfully", token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.json({ success: false, message: "Incomplete credentials" })
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const token = jwt.sign(email + password, process.env.JWT_SECRET)
        res.json({ success: true, message: "Login successful", token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { registerUser, loginUser, adminLogin }