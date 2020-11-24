import React from 'react';
import { Link } from 'react-router-dom';

export default function CidadePreview(props) {
  const { id, name } = props.cidade;
  const { weather, index, handleClickExcluirCidade } = props;
  
  return (
    <div id={`cityInfo${id}`}>
      <div className="header">
        <button
          id={`deleteCityButton${index}`}
          onClick={() => handleClickExcluirCidade(id)}
        >
          deletar cidade
        </button>
        <Link to={`climacidade/${id}`} >{name}</Link>
      </div>
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
    </div>
  );
}
