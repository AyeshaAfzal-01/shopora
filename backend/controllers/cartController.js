import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
    try {
        const {userId, itemId, size} = req.body // userId is coming from auth.js(authUser) middleware whereas itemId and size are coming from frontend
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData // I DON'T PUT AWAIT HERE????
        if (cartData[itemId]) {
            if (cartData[itemId][size]) { // if product of this id and size is already in cart
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: 'product added to cart'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const updateCart = async (req, res) => {
    try {
        const {userId, itemId, size, quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        cartData[itemId][size] = quantity
        await userModel.findByIdAndUpdate(userId, {cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData
        res.json({success:true, message: 'cart data fetched', cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addToCart, updateCart, getUserCart}