import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState(null)

    const currency = '$'
    const navigate = useNavigate()
    const value = {
        products,
        currency,
        navigate,
        showSearch,
        setShowSearch,
        searchText,
        setSearchText
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider