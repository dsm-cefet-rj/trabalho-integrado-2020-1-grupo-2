import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addCidadeServer } from '../../components/Cidade/CidadeSlice';

import { findCity } from '../../services/weather/weather';

import Navbar from '../../components/Navbar/Navbar';

import { Button } from '@material-ui/core';

import './adicionarCidadeStyle.css';

/**
 * Função componente que renderiza a tela de adicionar cidades.
 * @function AdicionarCidade
 */
export default function AdicionarCidade() {

  const history = useHistory();
  const dispacth = useDispatch();
  const [input, setInput] = useState('');
  const [cities, setCities] = useState([]);
  const [renderCities, setRenderCities] = useState([]);

  /**
 * Acionada quando usuário digita no input.
 * Utilizadar na criação e validação de cidades.
 * @function handleInputChange
 * @param {Event} event - Evento acionado pelo usuário.
 */
  function handleInputChange(event) {
    if(event.target.value.length > 86) return window.alert('Limite de caracteres atingindo!');
    setInput(event.target.value);
  }

 /**
 * Acionanda quando o usuário clica no butão da cidade.
 * Adiciona a cidade e leva o usuário para a tela de dashboard.
 * @function handleClickResult
 * @param {City} city - Cidade a cer adicionada.
 */
  function handleClickResult(city) {
    dispacth(addCidadeServer(city));
    window.location.href = 'http://localhost:3000/dashboard';
  }

  /**
 * Acionada quando o usuário clica em buscar cidade.
 * @function handleClickSearch
 * @param {string} input - Cidade a ser buscada
 */
  async function handleClickSearch(input) {
    let result = await findCity(input);
    if(!result?.list) return;

    setCities(result.list.map(city => ({
      'weatherID': city.id,
      'name':      city.name,
      'latitude':  city.coord.lat,
      'longitude': city.coord.lon,
      'pais':      city.sys.country,
    })));
  }

  useEffect(() => {
    setRenderCities(cities.map((city, index) => (
      <button
        id={`addCityButton${index}`}
        key={index}
        onClick={() => handleClickResult(city)}
      >
        {`${city.name}, ${city.pais}, la: ${city.latitude}, lo: ${city.longitude}`}
      </button>
    )));
  }, [cities]);

  function handlePressEnter(event) {
    if(event.charCode === 13) {
      console.log({input, charCode: event.charCode})
      handleClickSearch(input);
    }
  }

  return (
    <div className='adicionar-cidade'>
      <Navbar title='Adicionar Cidade'/>
      <div className='search-box'>
        <Button
          color='primary'
          variant='contained'
          id='searchCityButton'
          onClick={() => handleClickSearch(input)}
        >
          Pesquisar
        </Button>
        <input
          id='addCityInput'
          type='text'
          placeholder='pesquise uma cidade'
          onChange={handleInputChange}
          onKeyPress={handlePressEnter}
        ></input>
      </div>
      <div className="results">
        {renderCities[0] ? renderCities : 'sem resultados'}
      </div>
    </div>
  );
}
