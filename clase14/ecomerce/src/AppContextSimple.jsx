import { createContext, useContext } from "react"


const NumberContext = createContext()

export default function AppContextSimple() {
    const edad = 48;
    const nombre = "Adrian";
    const saludar = () => {
        return `Hola mi nombre es ${nombre} y tengo ${edad} años`
    }

    const persona = {
        name: nombre,
        age: edad,
        saludar
    }
  return (
    <NumberContext.Provider value={persona} >
      <ComponentA />
    </NumberContext.Provider>
  )
}

function ComponentA() {
    let {name} = useContext(NumberContext)
  return (
    <>
      <h1>Componente A</h1>
      <h2>{name}</h2>
      <ComponentB />
    </>
  );
}

function ComponentB() {
    const {name, age} = useContext(NumberContext)
  return (
    <>
        <h1>Componente B</h1>
      <h2>nombre: {name} ead: {age}</h2>
      <ComponentC />
    </>
  );
}

function ComponentC() {
    const {saludar} = useContext(NumberContext)
  return (
    <>
      <h1>Componente c</h1>
      <h2>{saludar()}</h2>
    </>
  );
}
