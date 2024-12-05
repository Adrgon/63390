

export default function AppPropDrilling() {
    const numero = 45;
  
    return (
    <div>
        <ComponentA num={numero} />
    </div>
  )
}

function ComponentA({num}){
    return (
        <ComponentB x={num}/>
    )
}

function ComponentB({x}){
    let x2 = x * 2
    return (
      <>
        <ComponentC y={x2} />
      </>
    );
}

function ComponentC({y}){
    return (
        <h1>Recibiendo el valor: {y}</h1>
    )
}
