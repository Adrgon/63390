//import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
export default function ItemDetail({id, name, img, description, category, price, stock}) {
  const handleAdd = (cantidad) => {
    const objectToAdd = {
      id, name, price, cantidad
    }
    console.log(objectToAdd)
  }
  return (
    <div className="container">
        <h2>{name}</h2>
        <div className="card">
            <img 
                src={img}
                style={{width: 300}}
                className="card-img-top"
                alt={name}
            />

            <div className="card-body">
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Pecio: $ {price}</p>
                <p>Disponible: {stock}</p>
            </div>
            <ItemCount stock={stock} onAdd={handleAdd}/>
            {/* <Link to="/cart" >Finalizar compra</Link> */}
        </div>
    </div>
  )
}
