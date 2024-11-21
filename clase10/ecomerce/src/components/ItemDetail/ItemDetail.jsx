import { Link } from "react-router-dom"
export default function ItemDetail({name, img, description, category, price, stock}) {
  
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
            <Link to="/cart" >Finalizar compra</Link>
        </div>
    </div>
  )
}
