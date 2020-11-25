import React from 'react';
import { Link } from 'react-router-dom';

import Weather from '../Weather';

export default function Cidade(props) {
  const { weather } = props;
  
  if(!props.cidade) return <p>Fazer fetch em cidades!</p>

  const { id } = props.cidade;

  function renderWeatherInfos() {
    if(!weather) return "Erro na chamada da API";
    return weather.list.map((inf, idx) => (
      <Weather weather={inf} key={idx} />
    ));
  }

  return (
    <div className="cidade">
      {renderWeatherInfos()}
      <div className="extraInfos">
        <p>Informações adicionais sobre o tempo</p>
      </div>
      <Link id="cityNotesButton" to={`/notascidade/${id}`}>Notas</Link>
    </div>
  );
}
