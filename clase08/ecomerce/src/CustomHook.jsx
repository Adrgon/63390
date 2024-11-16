
import { getProducts } from "./asynmook"
import { useState, useEffect } from "react"
import ProductList from "./components/ProductList"

const CustomHook = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProducts().then((data)=> {
            setProductos(data)
        } )
    },[])
  return (
    <>
        <h1>Ejemplo de Custom Hook</h1>
        <ProductList initialProducts={productos} />
    </>
  )
}

export default CustomHook
