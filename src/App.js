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
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input id="id" class="form-control" type="text" />
        </div>

        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <input id="descricao" class="form-control" type="text" />
        </div>
        <hr />

        <div className="col-12">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            onClick={addAtividade}
          >
            + Atividade
          </button>
        </div>
      </form>
      <div className="mt-3">
        {atividades.map((atividade) => (
          <li className="list-group-item" key={atividade.id}>
            {atividade.id} - {atividade.descricao}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
