import React from 'react';

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
      <p>{weather.dt_txt}</p>
      <div className="info">
        <div className="wind-speed">
          <p>Velocidade do vento: {weather.wind?.speed || 'Sem informações'}</p>
        </div>
        <div className="temperature">
          <p>Temperatura: {weather.main ? (weather.main.temp-273.15).toPrecision(3) : 'Sem informações'}</p>
        </div>
        <div className="humidity">
          <p>Umidade: {weather.main?.humidity || 'Sem informações'}</p>
        </div>
      </div>
    </div>
  );
}
