import { Link } from "react-router-dom";

const Item = ({product}) => {
    //console.log(product)
    
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.img}
        style={{ width: 100, margin: "0 auto" }}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item
