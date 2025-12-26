import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState(null)
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')

    const currency = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {

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
     getProductsFromBackend()
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
        setToken
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider