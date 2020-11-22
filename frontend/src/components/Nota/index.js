import React from "react";

export default function Nota({ nota }) {
  return (
    <div className="nota">
      <div className="nota-options">
        <button id="editCityNoteButton">Editar</button>
        <button id="saveCityNoteButton">Salvar</button>
      </div>
      <div className="nota-container">
        <p id="cityNote">{nota.data}</p>
      </div>
      <div className="visits">
        <p>visitas</p>
        <div><p>{nota.visits}</p></div>
      </div>
      <button id="deleteCityNoteButton">Deletar nota</button>
    </div>
  );
}
