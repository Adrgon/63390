import { useEffect, useState } from "react";

function App() {
    const [username, setUser] = useState("");
    const [email, setEmail] = useState('')
    
    /* useEffect(() => {
        console.log("Me ejecuto siempre")
    });
 */

     useEffect(() => {
        console.log("Solo se ejecuta cuando el componente se monta")
     }, []); // 

    useEffect(()=>{
        console.log("Cambio username")
        return () => {
            console.log("Se desmonta el componente")
        }
    }, [username]) 

    useEffect(() => {
      console.log("cuando cambia cualquiera de los dos");
    }, [username, email]); 

    const changeUser = (user) => {
        setUser(user.target.value)
    }

    const changeEmail = (email) => {
        setEmail(email.target.value);
    };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={changeUser}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={changeEmail}
      />
    </div>
  );
}

export default App
