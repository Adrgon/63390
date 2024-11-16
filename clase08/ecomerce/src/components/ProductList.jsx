import useProductsFilter from "../hooks/useProductsFilter";

function ProductList({initialProducts}) {
    const {filter, setFilter, products} = useProductsFilter(initialProducts);
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
      {products.map((item)=> <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default ProductList
