import { useParams } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "electronica",
    description: "Laptop alta calidad",
  },
  {
    id: 2,
    name: "Camisa",
    category: "moda",
    description: "Laptop alta calidad",
  },
  {
    id: 3,
    name: "Sofa",
    category: "hogar",
    description: "Laptop alta calidad",
  },
  {
    id: 4,
    name: "Cama King Size",
    category: "hogar",
    description: "Laptop alta calidad",
  },
  {
    id: 5,
    name: "Mesa",
    category: "hogar",
    description: "Laptop alta calidad",
  },
  {
    id: 6,
    name: "Iphone",
    category: "electronica",
    description: "Laptop alta calidad",
  },
];
const ProductDetail = () => {
    const { productId } = useParams();
    const product = mockProducts.find( item => item.id === parseInt(productId))

    if(!product){
        return <p>Producto no encontrado</p>
    }


  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ProductDetail
