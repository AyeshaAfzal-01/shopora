import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState(null)
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({})

    const currency = '$'
    const delivery_fee = 10
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('select Product size')
            return
        }
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
        // req to backend to make save changes in db
        if (token) {
            try {
                const res = await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const item in cartItems) { //iterate items
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalCount += cartItems[item][size]
                    }
                } catch (err) {
                    console.log(err)
                    toast.error(err.message)
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
        if (token) {
            try {
              const res =  await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
           if (res.data.success) {
            toast.success('cart updated')
           } else {
            toast.error(res.data.message)
           }
            } catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            const itemInfo = products.find(product => product._id === item)
            if (!itemInfo) continue // if product with this id does'nt exist
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[item][size]
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        }
        return totalAmount
    }

    const getCartDataFromDB = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            } else {
                console.log(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getProductsFromBackend = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

   useEffect(() => {
  const localToken = localStorage.getItem('token')

  getProductsFromBackend()

  if (localToken) {
    setToken(localToken)
    getCartDataFromDB(localToken)
  }
}, [])


    const value = {
        products,
        currency,
        navigate,
        showSearch,
        setShowSearch,
        searchText,
        setSearchText,
        token,
        setToken,
        backendUrl,
        addToCart,
        updateQuantity,
        getCartAmount,
        getCartCount,
        setCartItems,
        delivery_fee,
        cartItems
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider