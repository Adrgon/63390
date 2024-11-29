import { Link } from "react-router-dom";


function Cart() {
  return (
    <div>
      <ul>
        <li>producto 1</li>
        <li>producto 1</li>
        <li>producto 1</li>
        <li>producto 1</li>
      </ul>
      <Link to='/checkout'>Comprar</Link>
    </div>
  );
}

export default Cart
