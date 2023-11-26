import "./App.css";
import { useState } from "react";

let initialState = [
  {
    id: 1,
    prioridade: "1",
    titulo: "Título",
    descricao: "Estudar React",
  },
  {
    id: 2,
    prioridade: "1",
    titulo: "Título",
    descricao: "Estudar React Native",
  },
  {
    id: 3,
    prioridade: "3",
    titulo: "Título",
    descricao: "Estudar Node",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case "1":
        return icone ? "smile" : "success";
      case "2":
        return icone ? "meh" : "black";
      case "3":
        return icone ? "tired" : "danger";
      default:
        return "Não definido";
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            id="id"
            className="form-control"
            type="text"
            readOnly
            value={
              Math.max.apply(
                Math,
                atividades.map((item) => item.id)
              ) + 1
            }
            disabled
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue={0}>Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input id="titulo" className="form-control" type="text" />
        </div>

        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <input id="descricao" className="form-control" type="text" />
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
          <div
            key={atividade.id}
            className={
              "card mb-2 shadow-sm border-" +
              prioridadeStyle(atividade.prioridade)
            }
          >
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge round text-bg-secondary me-1">
                    {atividade.id}
                  </span>
                  - {atividade.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span
                    className={
                      "ms-1 text-" + prioridadeStyle(atividade.prioridade)
                    }
                  >
                    <i
                      className={
                        "me-1 far fa-" +
                        prioridadeStyle(atividade.prioridade, true)
                      }
                    ></i>
                    {prioridadeLabel(atividade.prioridade)}
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
