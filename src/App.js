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
          <div key={atividade.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge round text-bg-secondary me-1">
                    {atividade.id}
                  </span>
                  - Título
                </h5>
                <h6>
                  Prioridade:
                  <span className="ms-1 text-black">
                    <i className="me-1 far fa-tired"></i>
                    Alta
                  </span>
                </h6>
              </div>
              <p className="card-text">{atividade.descricao}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2 btn-sm">
                  <i className="me-2 fas fa-pen"></i>
                  Editar
                </button>
                <button className="btn btn-outline-danger ms-2 btn-sm">
                  <i className="me-2 fas fa-trash"></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
