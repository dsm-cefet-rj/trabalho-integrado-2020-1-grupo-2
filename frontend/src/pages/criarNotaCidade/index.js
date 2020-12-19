import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addNotaServer } from '../../components/Nota/slice';
import { selectCidadesIds } from '../../components/Cidade/slice';

import Navbar from '../../components/Navbar';
import CriarNota from '../../components/Nota/create';

export default function CriarNotaCidade() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { idCidade } = useParams();
  const idsCidadesFound = useSelector(selectCidadesIds);

  if(!idsCidadesFound.includes(idCidade)) {
    history.push('/');
    return <div>Redirecionando para home</div>;
  }

  function handleCriarNota(nota){
    dispatch(addNotaServer(nota));
  }

  return (
    <div className="create">
      <Navbar title='Criar Nota' />
      <CriarNota idCidade={idCidade} handleCriarNota={handleCriarNota}/>
    </div>
  );
}