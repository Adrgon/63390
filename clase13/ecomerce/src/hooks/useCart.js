import { useContext } from "react";
import { CartContext } from "../cotext/CartContext";

export const useCart = () => {
    return useContext(CartContext)
}
