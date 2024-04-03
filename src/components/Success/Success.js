import './Success.css';

function Success ({ data, setToggle }) {

  function handleToggle() {
    setToggle(false);
  }

  return (
    <div className="Content">
      <button className="Exit" type="button" onClick={handleToggle}>X</button>
      <label>Você digitou:</label>
      <p>{data.nome}</p>
      <p>{data.email}</p>
      <p>{data.telefone}</p>
    </div>
  );
}

export default Success;
