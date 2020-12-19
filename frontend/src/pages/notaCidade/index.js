import React from "react";
import { useParams, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { selectNotasById, deleteNotaServer, updateNotaServer } from "../../components/Nota/slice";

import Navbar from '../../components/Navbar';
import Nota from '../../components/Nota';

/**
 * Função componente que renderiza uma nota de uma cidade.
 * @function NotaCidade
 */
export default function NotaCidade() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { idNota } = useParams();
  const notaFound = useSelector(state => selectNotasById(state, idNota));

  if(!notaFound) {
    history.push('/');
    return <div>Redirecionando para home</div>
  };

  /**
 * Acionada quando o usuário clica em excluir nota.
 * @function handleExcluirNota
 * @param {string} id - ID da nota a ser excluída
 */
  function handleExcluirNota(id) {
    let response = window.confirm('Deletar nota?');
    
    if(!response) return;

    dispatch(deleteNotaServer(id));
    history.goBack();
  }

  /**
 * Acionada quando o usuário clica em salvar.
 * @function handleAtualizarNota
 * @param {Nota} nota - nota a ser atualizada
 */
  function handleAtualizarNota(nota) {
    dispatch(updateNotaServer(nota));
  }

  return (
    <div className="notacidade">
      <Navbar title={notaFound.name} />
      <Nota
        nota={notaFound}
        handleExcluirNota={handleExcluirNota}
        handleAtualizarNota={handleAtualizarNota}
      />
    </div>
  );
}
