import Item from "./Item";


const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(item => <Item key={item.id} product={item} />)}
    </div>
  );
};

export default ItemList
