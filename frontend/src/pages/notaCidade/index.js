import React from "react";
import { useParams, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { selectNotasById, deleteNotaServer, updateNotaServer } from "../../components/Nota/slice";

import Navbar from '../../components/Navbar';
import Nota from '../../components/Nota';

export default function NotaCidade() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { idNota } = useParams();
  const notaFound = useSelector(state => selectNotasById(state, idNota));

  if(!notaFound) {
    history.push('/');
    return <div>Redirecionando para home</div>
  };

  function handleExcluirNota(id) {
    dispatch(deleteNotaServer(id));
    history.goBack();
  }

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
