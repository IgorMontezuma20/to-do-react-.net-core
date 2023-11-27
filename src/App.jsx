import "./App.css";
import { useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import Atividades from "./components/Atividades";

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

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  }

  return (
    <>
      <AtividadeForm addAtividade={addAtividade} atividades={atividades} />
      <div className="mt-3">
        {atividades.map((atividade) => (
          <Atividades
            key={atividade.id}
            atividade={atividade}
            deletarAtividade={deletarAtividade}
          />
        ))}
      </div>
    </>
  );
}

export default App;
