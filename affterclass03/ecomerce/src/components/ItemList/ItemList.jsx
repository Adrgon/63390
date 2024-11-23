import Item from "../Item/Item"

export default function ItemList({products}) {
  return (
    <div className="container">
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}
