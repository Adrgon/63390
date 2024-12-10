import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    };
    // funcionalidad de Agregar al carrito
    const addItem = (productoToAdd) => {
        if(!isInCart(productoToAdd.id)){
            setCart( prev => [...prev, productoToAdd])
        }else {
            console.error("El producto ya esta en el carrito")
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id)
        console.log(cartUpdated)
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach( prod => {
            accu += prod.quantity
        })
        return accu;
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach((item)=> {
            accu += item.quantity * item.price
            console.log(accu)
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()

    // Totalizador de elemento en el carrito

    const obj = { 
        cart, 
        isInCart, 
        addItem, 
        totalQuantity, 
        getTotal,
        removeItem,
        clearCart
    };
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
