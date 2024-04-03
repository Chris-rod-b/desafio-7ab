import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label>
          Preencha os campos abaixo
        </label>
        <div className="Container">
          <input type="text" placeholder="Nome..."/>
          <input type="text" placeholder="Email..."/>
          <input type="text" placeholder="Telefone..."/>
          <button type="button">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
