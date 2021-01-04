import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { deleteCidadeServer, fetchCidades, selectAllCidades } from '../../components/Cidade/CidadeSlice';
import { selectAllWeathers, fetchWeathers } from '../../services/weather/weatherSlice';

import CidadePreview from '../../components/Cidade/CidadePreview';
import Navbar from '../../components/Navbar/Navbar';
import BottomBar from "../../components/BottomBar/BottomBar";

import { Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import './dashboardStyle.css';

/**
 * Função componente que renderiza a tela de Dashboard
 * @function Dashboard
 */
export default function Dashboard() {
  const cidades = useSelector(selectAllCidades);
  const statusCidade = useSelector(state => state.cidades.status);
  const errorCidade = useSelector(state => state.cidades.error);

  const weathers = useSelector(selectAllWeathers);
  const statusWeathers = useSelector(state => state.weathers.status);

  const dispatch = useDispatch();

  /**
 * Acionada quando o usuário clica em excluir cidade.
 * @function handleClickExcluirCidade
 * @param {string} id - id da cidade a ser deletada
 */
  function handleClickExcluirCidade(id) {
    let response = window.confirm('Deseja deletar a cidade?');
    if(response) dispatch(deleteCidadeServer(id));
  }

  /**
 * Acionada quando o usuário clica em excluir todas as cidades.
 * @function handleClickExcluirTodasCidades
 */
  function handleClickExcluirTodasCidades() {
    let response = window.confirm('Excluir todas as cidades?');
    if(response) for(let cidade of cidades) dispatch(deleteCidadeServer(cidade.id));
  }

  /**
 * Função auxiliar que renderiza a resposta do servidor backend.
 * A renderização muda de acordo com o estado do redux.
 * @function renderResponse
 */
  function renderResponse() {
    switch(statusCidade) {
      case 'loading':
        return (<p>Carregando cidades...</p>);
      case 'failed':
        if(errorCidade === 'Unauthorized') return (
          <p>Usuario não logado, fazer o login.</p>
        );
        return (<p>error: {errorCidade}</p>);
      case 'loaded':
        if(cidades.length === 0) return (
          <p>Sem cidades adicionadas</p>
        );
        break;
      default:
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
          dispatch(fetchWeathers(cidades.map(cidade => cidade.weatherID)));
        }
        break;
      default:
    }
  }, [statusWeathers, statusCidade, dispatch]);

  return (
    <div className="dashboard">
      <Navbar title='Dashboard' isDashboard={true} />
      {renderResponse()}
      <BottomBar elements={[
        <Button startIcon={<AddIcon />} variant='contained' color='primary' ><Link id='goToaddCityButton' to='/adicionarcidade'>Adicionar Cidade</Link></Button>,
        <Button variant='contained' startIcon={<DeleteIcon htmlColor='white' />} id='deleteAllCitiesButton' type='button' onClick={handleClickExcluirTodasCidades}>Deletar Todas as Cidades</Button>
      ]} />
    </div>
  );
}
