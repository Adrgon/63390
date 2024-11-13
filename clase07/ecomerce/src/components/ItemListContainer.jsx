import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=motorola")
        .then((res)=> res.json())
        .then((items)=> setProducts(items.results))
        .catch((err)=>{console.log(err)})
    }, [])


  return (
    <ItemList products={products}/>
  );
}

export default ItemListContainer
