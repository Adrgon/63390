//import logo from "../../assets/react.svg";
import cart from "../../assets/cart.svg";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import './CardWidget.css'
function CardWidget() {
  const { totalQuantity } = useCart();
  return (
    <Link className="CartWidget" to="/cart">
      <img src={cart} 
        className="CartImg"
        style={{width: 25}}
        alt='cart-widget'
      />
      {totalQuantity}
    </Link>
  );
}

export default CardWidget;
