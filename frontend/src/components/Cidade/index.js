import React from 'react';
import { Link } from 'react-router-dom';

import Weather from '../Weather';

export default function Cidade(props) {
  const { weather } = props;

  const { id } = props.cidade;

  function renderWeatherInfos() {
    if(!weather || !weather.list) return "Erro na chamada da API";
    return weather.list.map((inf, idx) => (
      <Weather weather={inf} key={idx} />
    ));
  }

  return (
    <div className="cidade">
      {renderWeatherInfos()}
      <Link id="cityNotesButton" to={`/notascidade/${id}`}>Notas</Link>
    </div>
  );
}
