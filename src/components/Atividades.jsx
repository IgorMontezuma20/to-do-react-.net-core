import React from "react";

export default function Atividades(props) {
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
    <div
      className={
        "card mb-2 shadow-sm border-" +
        prioridadeStyle(props.atividade.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge round text-bg-secondary me-1">
              {props.atividade.id}
            </span>
            - {props.atividade.titulo}
          </h5>
          <h6>
            Prioridade:
            <span
              className={
                "ms-1 text-" + prioridadeStyle(props.atividade.prioridade)
              }
            >
              <i
                className={
                  "me-1 far fa-" +
                  prioridadeStyle(props.atividade.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.atividade.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.atividade.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-outline-primary me-2 btn-sm">
            <i className="me-2 fas fa-pen"></i>
            Editar
          </button>
          <button
            className="btn btn-outline-danger ms-2 btn-sm"
            onClick={() => props.deletarAtividade(props.atividade.id)}
          >
            <i className="me-2 fas fa-trash"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
