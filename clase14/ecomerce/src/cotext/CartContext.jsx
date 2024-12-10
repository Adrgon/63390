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
        console.log(cart)
    }
    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod)=> prod.id !== id)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        let accu = 0;
        cart.forEach((item)=>{
            accu += item.quantity * item.price
        })
        return accu
    }
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach((product) => {
            accu += product.quantity
        })
        return accu
    }
    const totalQuantity = getTotalQuantity()
    //const totalQuantity = getTotalQuantity


    const obj = {
        cart,
        isInCart,
        addItem,
        totalQuantity,
        getTotal,
        removeItem,
        clearCart,
    }
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
