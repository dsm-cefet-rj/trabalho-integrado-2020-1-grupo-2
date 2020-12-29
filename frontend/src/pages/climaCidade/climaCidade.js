import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCidadesById } from '../../components/Cidade/CidadeSlice';
import { selectWeathersById } from '../../services/weather/weatherSlice';

import Navbar  from '../../components/Navbar/Navbar';
import Cidade  from '../../components/Cidade/Cidade';

/**
 * Função componente que renderiza a tela dos climas de uma cidade.
 * @function ClimaCidade
 */
export default function ClimaCidade() {
  const history = useHistory();
  const { idCidade }  = useParams();

  const cidadeFound = useSelector(state => selectCidadesById(state, idCidade));
  const weatherFound = useSelector(state => selectWeathersById(state, cidadeFound?.weatherID));

  if(!cidadeFound) {
    history.push('/');
    return <div>Redirecionando para home</div>
  };

  return (
    <div className='clima-cidade'>
      <Navbar title={cidadeFound.name} />
      <Cidade cidade={cidadeFound} weather={weatherFound} />
    </div>
  );
}
