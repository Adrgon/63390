import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  // tomar de la url el id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  //console.log(productId)
  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        //console.log(res);
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Cargando...
        </h3>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer
