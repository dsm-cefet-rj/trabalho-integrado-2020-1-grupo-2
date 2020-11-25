import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllNotas, fetchNotas, deleteNotaServer } from '../../components/Nota/slice';

import NotaPreview from '../../components/Nota/preview';
import Navbar from '../../components/Navbar';

export default function NotasCidade() {
  const notas = useSelector(selectAllNotas);
  const statusNotas = useSelector(state => state.notas.status);
  const errorNotas = useSelector(state => state.notas.error);

  const { cityId } = useParams();
  const dispatch = useDispatch();

  function handleClickExcluirNota(notaId) {
    dispatch(deleteNotaServer(notaId));
  }

  function renderServerResponse() {
    switch(statusNotas) {
      case 'loading':
        return <p>Carregando notas...</p>;
      case 'failed':
        return <p>Error: {errorNotas}</p>;
      case 'loaded':
        let notasCidade = notas.filter(nota => nota.idCidade === cityId);
        if(notasCidade === 0) return <p>Sem notas adicionadas!</p>;
        console.log(notas);
        return (
          notas.map((nota, index) =>
            <NotaPreview
              nota={nota}
              key={index}
              index={index}
              handleClickExcluirNota={handleClickExcluirNota}
            />
          )
        );
    }
  }

  useEffect(() => {
    switch(statusNotas) {
      case 'not_loaded':
        dispatch(fetchNotas());
        break;
      case 'failed':
        setTimeout(() => dispatch(fetchNotas()), 2000);
        break;
    }
  }, [statusNotas, dispatch]);

  return (
    <div className="notas">
      <Navbar title='Notas' />
      {renderServerResponse()}
    </div>
  );
}
