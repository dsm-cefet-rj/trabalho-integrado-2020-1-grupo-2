import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addCidadeServer } from '../../components/Cidade/slice';

import { findCity } from '../../services/weather/weather';

import Navbar from '../../components/Navbar';

export default function AdicionarCidade(props) {

  const history = useHistory();
  const dispacth = useDispatch();
  const [input, setInput] = useState('');
  const [cities, setCities] = useState([]);
  const [renderCities, setRenderCities] = useState([]);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleClickResult(city) {
    dispacth(addCidadeServer(city));
    history.push('/dashboard');
  }

  async function handleClickSearch(input) {
    let result = await findCity(input);
    if(!result?.list) return;

    setCities(result.list.map(city => ({
      'id': city.id,
      'name': city.name,
      'latitude': city.coord.lat,
      'longitude': city.coord.lon,
    })));
  }

  useEffect(() => {
    setRenderCities(cities.map((city, index) => (
      <button
        id={`addCityButton${index}`}
        key={index}
        onClick={() => handleClickResult(city)}
      >
        {city.name}
      </button>
    )));
  }, [cities]);

  return (
    <div className='adicionar-cidade'>
      <Navbar title='Adicionar Cidade'/>
      <div className='search-box'>
        <button
          id='searchCityButton'
          onClick={() => handleClickSearch(input)}
        >
          Pesquisar
        </button>
        <input
          type='text'
          placeholder='pesquise uma cidade'
          onChange={handleInputChange}
        ></input>
        <div className="results">
          {renderCities[0] ? renderCities : 'sem resultados'}
        </div>
      </div>
    </div>
  );
}
