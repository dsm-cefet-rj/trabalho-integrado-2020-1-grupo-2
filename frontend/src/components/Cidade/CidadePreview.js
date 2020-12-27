import React from 'react';
import { Link } from 'react-router-dom';

import Weather from '../Weather/Weather';

/**
 * Renderiza o preview de uma cidade
 * @function CidadePreview
 */
export default function CidadePreview(props) {
  const { id, name } = props.cidade;
  const { weather, index, handleClickExcluirCidade } = props;
  const todayWeather = weather?.list?.length > 0 ? weather.list[0] : null;
  
  return (
    <div id={`cityInfo${index}`}>
      <div className="header">
        <button
          id={`deleteCityButton${index}`}
          onClick={() => handleClickExcluirCidade(id)}
        >
          deletar cidade
        </button>
        <Link to={`climacidade/${id}`} >{name}</Link>
      </div>
      <Weather weather={todayWeather} />
    </div>
  );
}
