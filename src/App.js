import { useEffect, useRef, useState } from "react";
import Success from "./components/Success/Success.js";
import Error from "./components/Error/Error.js";
import { maskPhone } from "./util/maskPhone.js";
import { emailCheck } from "./util/emailCheck.js";
import { phoneCheck } from "./util/phoneCheck.js";

import './App.css';

function App() {
  const ref = useRef();

  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const content = ref.current;
    
    if (!emailCheck(content.email.value)) {
      setError(!emailCheck(content.email.value));
      setTypeError("Email");      
    }

    if (!phoneCheck(content.telefone.value)) {
      setError(!phoneCheck(content.telefone.value));
      setTypeError("Telefone");      
    }

    setData({
      nome: content.nome.value,
      email: content.email.value,
      telefone: content.telefone.value,
    })
    
    setToggle(true);
  }

  useEffect(() => {
    setTelefone("");
  }, [toggle])

  return (
    <div className="App">
      { !toggle  && (
        <div>
          <label>
            Preencha os campos abaixo
          </label>
          <form ref={ref} className="Forms" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome..." />
            <input type="text" name="email" placeholder="Email..." />
            <input type="text" name="telefone" placeholder="Telefone..." 
              value={telefone} 
              onChange={(e) => setTelefone(maskPhone(e.target.value))}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
       )} { (toggle && !error)  && (
          <Success data={data} setToggle={setToggle} />
       )}

      { (toggle && error) && (
          <Error typeError={typeError} setToggle={setToggle} setError={setError} />
       )}
      
    </div>
  );
}

export default App;
