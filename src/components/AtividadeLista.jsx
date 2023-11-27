import React from "react";
import Atividade from "./Atividades";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((atividade) => (
        <Atividade
          key={atividade.id}
          atividade={atividade}
          deletarAtividade={props.deletarAtividade}
        />
      ))}
    </div>
  );
}
