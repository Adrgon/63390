import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }
    const addItem = (productoToAdd) => {
        if(!isInCart(productoToAdd.id)){
            setCart((prev)=> [...prev, productoToAdd])
        }else {
            console.log("El producto ya esta en el carrito")
        }
    }
    const removeItem = () => {}
    const clearCart = () => {}
    const getTotal = () => {}
    //const getTotalQuantity = () => {}
    //const totalQuantity = getTotalQuantity()
    const totalQuantity = 5


    const obj = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity
    }
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
