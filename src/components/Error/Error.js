import './Error.css';

function Error ({ typeError, setToggle, setError, setTelefone }) {

  function handleToggle() {
    setError(false);
    setToggle(false);
    setTelefone("");
  }

  return (
    <div className="Content">
      <button className="Exit" type="button" onClick={handleToggle}>X</button>
      <label>{typeError} Invalido</label>
      <p>Digite novamente</p>
    </div>
  );
}

export default Error;
