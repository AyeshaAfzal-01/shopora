import validator from 'validator'
import userModel from '../models/userModel.js'

const registerUser = async (req, res) => {
    try {
          const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.json({success:false, message: "incomplete credentials"})
    }

    const exists = await userModel.findOne({email})
    if (exists) {
         return res.json({success:false, message: "Email already exists"})
    }
    if (!validator.isEmail(email)) {
         return res.json({success:false, message: "not a valid email"})
    }
    if (password.length < 8) {
         return res.json({success:false, message: "password should be 8 charachters long"})
    }

    const newUser = new userModel({
        name,
        email,
        password
    })
    await newUser.save()
    res.json({success:true, message:"user registered"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

const loginUser = async (req, res) => {

}

const adminLogin = async (req, res) => {

}

export {registerUser, loginUser, adminLogin}