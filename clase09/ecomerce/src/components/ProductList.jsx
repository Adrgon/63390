import { Link, useParams } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Laptop", category: "electronica" },
  { id: 2, name: "Camisa", category: "moda" },
  { id: 3, name: "Sofa", category: "hogar" },
  { id: 4, name: "Cama King Size", category: "hogar" },
  { id: 5, name: "Mesa", category: "hogar" },
  { id: 6, name: "Iphone", category: "electronica" },
];
const ProductList = () => {
    const {categoryId} = useParams()
    //console.log(categoryId)
    const filteredProducts = categoryId 
        ? mockProducts.filter(product => product.category === categoryId)
        : mockProducts; 


  return (
    <div>
    <h2>Todos los productos</h2>
    <ul>
        {filteredProducts.map(product => (
            <li key={product.id} >
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
        ))}

    </ul>
    </div>
  )
}

export default ProductList
