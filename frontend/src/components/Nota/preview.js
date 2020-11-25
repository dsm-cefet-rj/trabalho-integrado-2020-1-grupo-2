import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NotaPreview({ nota }) {
  const data = new Date(nota.created);
  
  return (
    <div id={`gotoNote${nota.id}`}>
      <div className="preview">
        <Link to={`/notacidade/${nota.idCidade}/${nota.id}`}>{nota.name}</Link >
        <p>{`Criada em:${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`}</p>
      </div>
    </div>
  );
}
