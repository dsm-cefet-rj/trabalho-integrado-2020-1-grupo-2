import React from 'react';

export default function CidadePreview({ cidade }) {
  return (
    <div className="cidade-preview">
      <div className="header">
        <button id={cidade.index}>deletar cidade</button>
        <h2>{cidade.name}</h2>
      </div>
      <div className="weather">
        <div className="wind-speed">
          <p>{cidade.windSpeed || 'Sem informações do vento'}</p>
        </div>
        <div className="temperature"></div>
          <p>{cidade.temperature || 'Sem informações da temperatura'}</p>
        <div className="humidity">
          <p>{cidade.humidity || 'Sem informações da humidade'}</p>
        </div>
      </div>
    </div>
  );
}
