import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCidadesById } from '../../components/Cidade/slice';
import { selectWeathersById } from '../../services/weather/slice';

import Navbar  from '../../components/Navbar';
import Cidade  from '../../components/Cidade';

export default function ClimaCidade() {

  const { idCidade }  = useParams();

  const cidadeFound = useSelector(state => selectCidadesById(state, idCidade));
  const weatherFound = useSelector(state => selectWeathersById(state, idCidade));

  return (
    <div className='clima-cidade'>
      <Navbar title={cidadeFound?.name} />
      <Cidade cidade={cidadeFound} weather={weatherFound} />
    </div>
  );
}
