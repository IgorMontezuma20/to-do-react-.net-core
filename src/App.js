import "./App.css";
import { useState } from "react";

let initialState = [
  {
    id: 1,
    descricao: "Estudar React",
  },
  {
    id: 2,
    descricao: "Estudar React Native",
  },
  {
    id: 3,
    descricao: "Estudar Node",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
    };

    console.log(atividades);
    setAtividades([...atividades, { ...atividade }]);
  }
  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id" />
        <input id="descricao" type="text" placeholder="descrição" />
        <button type="submit" onClick={addAtividade}>
          Salvar
        </button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {atividades.map((atividade) => (
            <li className="list-group-item" key={atividade.id}>
              {atividade.id} - {atividade.descricao}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
