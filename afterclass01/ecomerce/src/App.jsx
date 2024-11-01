import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


function App() {

  return (
    <>
      <NavBar />
      <hr />
      <ItemListContainer color="red" greeting="Bienvenido a tienda CoderHouse"/>
    </>
  );
}

export default App
