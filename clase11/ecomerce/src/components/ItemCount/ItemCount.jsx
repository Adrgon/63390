import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export default function ItemCount({initialValue=1, stock}) {
    const [cantidad, setCantidad] = useState(initialValue)
    const {addItem} = useCart()
  
    const decrement = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad -1)
        }
    }
    const increment = () => {
        if(stock > cantidad){
            setCantidad((cantidad) => cantidad + 1);
        }
    }

    return (
      <>
        <h1>{cantidad}</h1>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={() => addItem(cantidad)} >Agregar al carrito</button>
        <button onClick={increment}>Incrementar</button>
      </>
    );
}
