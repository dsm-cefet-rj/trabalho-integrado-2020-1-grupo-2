import React from 'react';
import { Link } from 'react-router-dom';

import Weather from '../Weather/Weather';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import './CidadeStyle.css';

/**
 * Renderiza o preview de uma cidade
 * @function CidadePreview
 */
export default function CidadePreview(props) {
  const { id, name } = props.cidade;
  const { weather, index, handleClickExcluirCidade } = props;
  const todayWeather = weather?.list?.length > 0 ? weather.list[0] : null;
  
  return (
    <div id={`cityInfo${index}`} className="city-card">
      <div className="header">
        <Button className='deleteCity' variant='contained' startIcon={<DeleteIcon htmlColor='white' />} id={`deleteCityButton${index}`} type='button' onClick={() => handleClickExcluirCidade(id)} > Deletar</Button>
        <Link to={`climacidade/${id}`} className='nome-cidade' >{name}</Link>
      </div>
      <Weather weather={todayWeather} />
    </div>
  );
}
