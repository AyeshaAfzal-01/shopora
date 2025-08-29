import { createContext } from "react";
import { products } from "../assets/assets";
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$'
    const navigate = useNavigate()
    const value = {
        products,
        currency,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider