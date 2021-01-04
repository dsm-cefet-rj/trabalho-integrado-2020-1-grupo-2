import React        from 'react';
import {formatData} from '../../utils';

import './WeatherStyle.css';

/**
 * Função componente que renderiza informação temporal
 * @function Wheater
 * @param {props} props - Informações temporais
 */
export default function Weather(props) {
  const { weather } = props;
  //console.log("Weather:  \n"+ JSON.stringify(props));
  if(!weather) return "Erro na chamada da API";
  if(weather.cod === 429) return "Limite de chamadas atingido!";
  
  return(
    <div className="weather">
      <p>{formatData(weather.dt_txt)}</p>
      <img alt='weather icon' src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} />
      <div className="info">
        <div className="temperature">
          <p>{weather.main ? (weather.main.temp-273.15).toPrecision(3)+' Cº' : 'Sem informações'}</p>
        </div>
        <div className="wind-speed">
          <p>Velocidade do vento: {weather.wind?.speed+'m/s' || 'Sem informações'}</p>
        </div>
        <div className="humidity">
          <p>Umidade: {weather.main?.humidity+'%' || 'Sem informações'}</p>
        </div>
      </div>
    </div>
  );
}
