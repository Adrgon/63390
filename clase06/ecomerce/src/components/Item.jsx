
const Item = ({product}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <img src={product.img} alt={product.name} />
    </div>
  )
}

export default Item
