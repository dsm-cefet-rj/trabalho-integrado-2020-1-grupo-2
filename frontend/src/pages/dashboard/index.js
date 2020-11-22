import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { deleteCidadeServer, fetchCidades, selectAllcidades } from '../../components/Cidade/slice';

import CidadePreview from '../../components/Cidade/preview';
import Navbar from '../../components/Navbar';

export default function Dashboard() {

  const cidades = useSelector(selectAllcidades);
  const status = useSelector(state => state.cidades.status);
  const error = useSelector(state => state.cidades.error);

  const dispatch = useDispatch();

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
    }
  }, [status, dispatch]);

  let response = '';

  switch(status) {
    case 'loadeding':
      response = <div>Carregando cidades...</div>;
      break;
    case 'failed':
      response = <div>Error: {error}</div>;
      break;
    default:
      response = cidades.map(cidade => <CidadePreview cidade={cidade} key={cidade.id} />);
  }

  return (
    <div className="dashboard">
      <Navbar title='dashboard' />
      {response}
    </div>
  );
}
