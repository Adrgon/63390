import { useEffect, useState } from "react"
import { getProducts } from "../asynmook"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
        .then((res)=> setProducts(res))
    })


  return (
    <ItemList products={products}/>
  );
}

export default ItemListContainer
