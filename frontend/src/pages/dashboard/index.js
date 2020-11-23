import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { deleteCidadeServer, fetchCidades, selectAllCidades } from '../../components/Cidade/slice';

import CidadePreview from '../../components/Cidade/preview';
import Navbar from '../../components/Navbar';

import getWeather from '../../services/weather';

export default function Dashboard() {
  const tempoCidades = [];

  const cidades = useSelector(selectAllCidades);
  const status = useSelector(state => state.cidades.status);
  const error = useSelector(state => state.cidades.error);

  const dispatch = useDispatch();

  let response = '';

  function handleClickExcluirCidade(id) {
    dispatch(deleteCidadeServer(id));
  }

  useEffect(() => {
    switch(status) {
      case 'not_loaded':
        dispatch(fetchCidades());
        break;
      case 'failed':
        setTimeout(() => dispatch(fetchCidades()), 2000);
        break;
      case 'loaded':
        cidades.map(async (cidade) => tempoCidades.push(await getWeather(cidade.id)));
        break;
    }
  }, [status, dispatch]);

  switch(status) {
    case 'loadeding':
      response = <div>Carregando cidades...</div>;
      break;
    case 'failed':
      response = <div>Error: {error}</div>;
      break;
    default:
      response = cidades.map((cidade, index) => <CidadePreview
        cidade={cidade}
        tempo={tempoCidades[index]}
        key={index}
        index={index}
        handleClickExcluirCidade={handleClickExcluirCidade}
      />);
  }

  return (
    <div className="dashboard">
      <Navbar title='dashboard' />
      {response}
    </div>
  );
}
