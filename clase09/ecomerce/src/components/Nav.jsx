import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <Link to="/"> Todos los Productos </Link>
      |<Link to="/category/electronica"> Electronica</Link>|
      <Link to="/category/moda"> Moda</Link>|
      <Link to="/category/hogar"> Hogar</Link>
    </nav>
  );   
}
export default Nav
