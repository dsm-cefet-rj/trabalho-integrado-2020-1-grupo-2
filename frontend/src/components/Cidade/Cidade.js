import React from 'react';
import { Link } from 'react-router-dom';

import Weather   from '../Weather/Weather';
import BottomBar from '../BottomBar/BottomBar';

/**
 * Renderiza uma cidade
 * @function Cidade
 */
export default function Cidade(props) {
  const { weather } = props;

  const { id } = props.cidade;

  /**
 * Renderiza informações temporais de uma cidade
 * @function renderWeatherInfos
 */
  function renderWeatherInfos() {
    if(!weather || !weather.list) return "Erro na chamada da API";
    return weather.list.map((inf, idx) => (
      <Weather weather={inf} key={idx} />
    ));
  }

  return (
    <div className="cidade">
      {renderWeatherInfos()}
      <BottomBar elements={
        <Link id="cityNotesButton" to={`/notascidade/${id}`}>Visualizar anotações</Link>
      }/>
    </div>
  );
}
