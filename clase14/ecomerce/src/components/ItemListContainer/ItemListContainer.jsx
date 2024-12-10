import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{
      const collectionRef = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()}
            })
            setProducts(productos)
          })
          .catch((err)=>{
            console.log(err)
          })

    },[categoryId])

  return (
    <div>
      <h2>Bienvenidos a Tienda Coder</h2>
      <ItemList products={products} />
    </div>
  );
}
