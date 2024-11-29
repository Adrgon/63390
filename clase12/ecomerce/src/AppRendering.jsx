
// Renderizado de Atributos y Textos
const Button = ({isPrimary}) => {
    return (
        <button className={isPrimary ? 'btn btn-primary' : 'btn btn-secondary'}>{isPrimary ? 'Primario' : 'Secundario'}</button>
    )
}

const Greeting = ({isLoggedIn}) => {
    if(isLoggedIn){
        return <h1>Bienvenido al sitio</h1>
    }
    return <h1>Por favor debes inicial session</h1>;
}

const Bienvenidos = ({isLoggedIn}) => (
  <h1>{isLoggedIn ? "Bienvenido, usuario" : "Por favor, inicia sesión"}</h1>      
);

const WarningMessage = ({showWarning}) => (
    <>{showWarning && <p>Advertencia algo salio mal</p>}</>
)

function AppRendering() {
  return (
    <div>
        <Button isPrimary={true} />
        <Button isPrimary={false} />

{/*         <Greeting isLoggedIn={false} /> */}
        <Bienvenidos isLoggedIn={true} />
        <WarningMessage showWarning={true} />
    </div>
  )
}

export default AppRendering
