import React from 'react';

import CidadePreview from './preview';

export default function Cidade(props) {
  return (
    <div className="cidade">
      <CidadePreview cidade={props.cidade} />
      <div className="extraInfos">
        <p>Informações adicionais sobre o tempo</p>
      </div>
      <button id="cityNotesButton">Notas</button>
    </div>
  );
}
