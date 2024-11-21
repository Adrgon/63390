import { useState } from "react";

function Lista(){
  return (
    <>
    <h2>Productos</h2>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </>
  )
}

function Detalle(){
  return (
    <>
      <h2>Nombre Producto: Zapatos</h2>
      <p>Precio: $1000</p>
      <p>Descripcion: Zapatos de cuero</p>
      <button>Agregar al carrito</button>
    </>
  )
}

function Carrito(){
  return (
    <>
      <h2>Carrito</h2>
      <ul>
        <li>1 zapatos cant: 2</li>

      </ul>
      <p>Productos en el carrito: 0</p>
    </>
  )
}


function Estructura() {
  const [view, setView] = useState("lista")
  return (
    <>
      <button onClick={() => setView("lista")}>Lista</button>
      <button onClick={() => setView("detalle")}>Detalle</button>
      <button onClick={() => setView("carrito")}>Carrito</button>

      <div>
        {view === "lista" && <Lista />}
        {view === "detalle" && <Detalle />}
        {view === "carrito" && <Carrito />}
      </div>
    </>
  );
}

export default Estructura
