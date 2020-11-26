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

  const dispatch = useDispatch();

  function handleClickExcluirCidade(id) {
    dispatch(deleteCidadeServer(id));
  }

  function handleClickExcluirTodasCidades() {
    let response = window.confirm('Excluir todas as cidades?');
    if(response) for(let cidade of cidades) handleClickExcluirCidade(cidade.id);
  }

  function renderResponse() {
    switch(statusCidade) {
      case 'loading':
        return (<p>Carregando cidades...</p>);
      case 'failed':
        return (<p>Error: {errorCidade}</p>);
      case 'loaded':
        if(cidades.length === 0) return (
          <p>Sem cidades adicionadas</p>
        );
        break;
    }
    return (
      cidades.map((cidade, index) => <CidadePreview
          cidade={cidade}
          weather={weathers[index]}
          key={index}
          index={index}
          handleClickExcluirCidade={handleClickExcluirCidade}
        />
      )
    );
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
        if(statusWeathers === 'not_loaded') {
          dispatch(fetchWeathers(cidades.map(cidade => cidade.id)));
        }
        break;
    }
  }, [statusWeathers, statusCidade, dispatch]);

  return (
    <div className="dashboard">
      <Navbar title='dashboard' />
      {renderResponse()}
      <Link id='goToaddCityButton' to='/adicionarcidade'>Adicionar Cidade</Link>
      <button id='deleteAllCitiesButton' type='button' onClick={handleClickExcluirTodasCidades}>Deletar Todas as Cidades</button>
      <Link id='goToAccPageButton' to='/conta'>Conta</Link>
    </div>
  );
}
