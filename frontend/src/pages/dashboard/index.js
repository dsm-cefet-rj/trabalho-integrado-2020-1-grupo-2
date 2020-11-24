import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { deleteCidadeServer, fetchCidades, selectAllCidades } from '../../components/Cidade/slice';
import { selectAllWeathers, fetchWeathers } from '../../services/weather/slice';

import CidadePreview from '../../components/Cidade/preview';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
  const cidades = useSelector(selectAllCidades);
  const statusCidade = useSelector(state => state.cidades.status);
  const errorCidade = useSelector(state => state.cidades.error);

  const weathers = useSelector(selectAllWeathers);
  const statusWeathers = useSelector(state => state.weathers.status);
  const errorWeathers = useSelector(state => state.weathers.error);

  const dispatch = useDispatch();

  let serverResponse = '';

  function handleClickExcluirCidade(id) {
    dispatch(deleteCidadeServer(id));
  }

  useEffect(() => {
    switch(statusCidade) {
      case 'not_loaded':
        dispatch(fetchCidades());
        break;
      case 'failed':
        setTimeout(() => dispatch(fetchCidades()), 2000);
        break;
      case 'loaded':
        dispatch(fetchWeathers(cidades.map(cidade => cidade.id)));
        break;
    }
  }, [statusCidade, dispatch]);

  switch(statusCidade) {
    case 'loading':
      serverResponse = <div>Carregando cidades...</div>;
      break;
    case 'failed':
      serverResponse = <div>Error: {errorCidade}</div>;
      break;
    case 'loaded':
      serverResponse = cidades.map((cidade, index) => <CidadePreview
        cidade={cidade}
        weather={null}
        key={index}
        index={index}
        handleClickExcluirCidade={handleClickExcluirCidade}
      />);
      break;
  }

  return (
    <div className="dashboard">
      <Navbar title='dashboard' />
      {serverResponse[0] ? serverResponse : 'Sem cidades adicionadas'}
      <Link to='/adicionarcidade'>Adicionar Cidade</Link>
      <button type='button'>Deletar Todas as Cidades</button>
      <Link to='/conta'>Conta</Link>
    </div>
  );
}
