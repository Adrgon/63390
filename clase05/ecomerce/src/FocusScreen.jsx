import { useRef, useState } from 'react';

import './App.css'





function FocusScreen() {
  const inputRef = useRef();
  console.log(inputRef)

  const [value, setValue] = useState(0)


   const miFuncion = () => {
    inputRef.current.select();
  }
 let cont = 0

  /* const miFuncion = () => {
      cont += 1; 
      setValue(value + 1)
      console.log(value)
      console.log(cont)
  }; */

  return (
    <>
      <input 
        ref={inputRef}
        type="text" 
        placeholder='Ingrese su nombre'
        className='form-control'
      />
      <p>{cont}</p>
      <p>{value}</p>
      <button className="btn btn-primary mt-2" onClick={miFuncion}>
        Focus
      </button>
    </>
  );
}

export default FocusScreen;
