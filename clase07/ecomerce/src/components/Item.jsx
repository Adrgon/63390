
const Item = ({product}) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <img src={product.thumbnail} width="150" alt={product.title} />
    </div>
  );
}

export default Item
