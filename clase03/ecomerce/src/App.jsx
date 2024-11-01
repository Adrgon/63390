// en javascript todos las herramientas que necesitemos usar
// css
// librerias



function App() {
  // codigo javascript y react 
  //let productosEnCarrito = 3
  /* let styles = {
    margin: '10px',
    backgroundColor: 'red',
    fontSize: '20px',
  } */
  return (
    <>
      <nav>
        <div className="logo">Mi Tienda</div>
        <ul className="navbar-nav ml-auto" >
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{
                margin: "10px",
                backgroundColor: "red",
                fontSize: "20px",
              }}
            >
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Carrito
            </a>
            {/* <span>
              {" "}
              {productosEnCarrito > 5
                ? "Hay descuento"
                : productosEnCarrito}{" "}
            </span> */}
          </li>
        </ul>
      </nav>

      <section className="products">
        <h1>Productos Destacados</h1>
        <div className="product-grid">
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
              alt="Producto 1"
            />
            <h2>Producto 1</h2>
            <p>$10.00</p>
            <button>Añadir al carrito</button>
          </div>
          <div className="product">
            <img
              src="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
              alt="Producto 2"
            />
            <h2>Producto 2</h2>
            <p>$20.00</p>
            <button>Añadir al carrito</button>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
              alt="Producto 3"
            />
            <h2>Producto 3</h2>
            <p>$30.00</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Mi Tienda Online</p>
      </footer>
    </>
  );
}

export default App
