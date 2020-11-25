import React from 'react';
import { Link } from 'react-router-dom';

import Weather from '../Weather';

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
      <Weather weather={weather?.list[0]} />
    </div>
  );
}
