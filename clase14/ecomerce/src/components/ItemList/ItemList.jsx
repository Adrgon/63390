import {memo} from "react"
import Item from "../Item/Item"

function ItemList({products}) {
  return (
    <div className="container">
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default memo(ItemList)
