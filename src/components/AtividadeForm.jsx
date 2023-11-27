import React from "react";

export default function AtividadeForm(props) {
  return (
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
              props.atividades.map((item) => item.id)
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
          onClick={props.addAtividade}
        >
          + Atividade
        </button>
      </div>
    </form>
  );
}
