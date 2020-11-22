import React from 'react';

export default function NotaPreview({ nota }) {
  return (
    <div id={`gotoNote${nota.id}`}>
      <p>nota imagem</p>
      <div className="preview">
        <h1>{nota.name}</h1>
        <p>{`Criada em:${nota.created}`}</p>
      </div>
    </div>
  );
}
