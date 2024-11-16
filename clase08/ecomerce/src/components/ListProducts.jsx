import withLoading from "./WithLoading";
const ListProducts = ({products}) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

const ProductWithLoading = withLoading(ListProducts);

export default ProductWithLoading
