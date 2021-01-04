import React from 'react';
import { Link } from 'react-router-dom';

import WeatherFull   from '../Weather/WeatherFull';
import BottomBar     from '../BottomBar/BottomBar';

import { Button } from '@material-ui/core';

import './CidadeStyle.css';

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
      <WeatherFull weather={inf} key={idx} />
    ));
  }

  return (
    <div className="cidade">
      {renderWeatherInfos()}
      <BottomBar elements={
        <Button variant='contained' color='primary' ><Link id="cityNotesButton" to={`/notascidade/${id}`}>Visualizar anotações</Link></Button>
      }/>
    </div>
  );
}
