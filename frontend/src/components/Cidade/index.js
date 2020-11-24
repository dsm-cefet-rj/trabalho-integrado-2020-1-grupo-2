import React from 'react';

export default function Cidade(props) {
  const { weather } = props;

  return (
    <div className="cidade">
      <div className="weather">
        <div className="wind-speed">
          <p>{weather?.wind.speed || 'Sem informações do vento'}</p>
        </div>
        <div className="temperature"></div>
          <p>{weather?.main.temp || 'Sem informações da temperatura'}</p>
        <div className="humidity">
          <p>{weather?.main.humidity || 'Sem informações da humidade'}</p>
        </div>
      </div>
      <div className="extraInfos">
        <p>Informações adicionais sobre o tempo</p>
      </div>
      <p>Informações adicionais</p>
      <button id="cityNotesButton">Notas</button>
    </div>
  );
}
