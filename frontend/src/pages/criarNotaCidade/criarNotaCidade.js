import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addNotaServer } from '../../components/Nota/NotaSlice';
import { selectCidadesIds } from '../../components/Cidade/CidadeSlice';

import Navbar from '../../components/Navbar/Navbar';
import CriarNota from '../../components/Nota/NotaCreate';

/**
 * Função componente que renderiza a tela de criação de notas.
 * @function CriarNotaCidade
 */
export default function CriarNotaCidade() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { idCidade } = useParams();
  const idsCidadesFound = useSelector(selectCidadesIds);

  if(!idsCidadesFound.includes(idCidade)) {
    history.push('/dashboard');
    return <div>Redirecionando para home</div>;
  }

  /**
 * Acionada quando o usuário clica no botão de criar
 * @function handleCriarNota
 * @param {Nota} nota - Nota a ser criada
 */
  function handleCriarNota(nota){
    dispatch(addNotaServer(nota));
  }

  return (
    <div className="create">
      <Navbar title='Criar Anotação' goBackPath={`/notascidade/${idCidade}`} />
      <CriarNota idCidade={idCidade} handleCriarNota={handleCriarNota}/>
    </div>
  );
}