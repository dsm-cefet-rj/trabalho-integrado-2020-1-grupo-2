import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllNotas, fetchNotas, deleteNotaServer } from '../../components/Nota/NotaSlice';

import NotaPreview from '../../components/Nota/NotaPreview';
import Navbar from '../../components/Navbar/Navbar';

/**
 * Função componente que renderiza todas as notas de uma cidade.
 * @function NotasCidade
 */
export default function NotasCidade() {
  let   notas = useSelector(selectAllNotas);
  const statusNotas = useSelector(state => state.notas.status);
  const errorNotas = useSelector(state => state.notas.error);

  const { idCidade } = useParams();
  const dispatch = useDispatch();

  /**
 * Acionada quando o usuário clica em excluir nota.
 * @function handleClickExcluirNota
 * @param {string} notaId - Cidade a ser buscada
 */
  function handleClickExcluirNota(notaId) {
    dispatch(deleteNotaServer(notaId));
  }

  /**
 * Função que renderiza a resposta do servidor backend.
 * @function renderServerResponse
 */
  function renderServerResponse() {
    switch(statusNotas) {
      case 'loading':
        return <p>Carregando notas...</p>;
      case 'failed':
        return <p>Error: {errorNotas}</p>;
      default:
        let notasCidade = notas.filter(nota => nota.idCidade === idCidade);
        if(notasCidade.length === 0) return <p>Sem notas adicionadas!</p>;
        return (
          notasCidade.filter(nota => nota.id).map((nota, index) =>
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
      default:
    }
  }, [notas, statusNotas, dispatch]);

  return (
    <div className="notas">
      <Navbar title='Notas' />
      <Link
        id='createCityNoteButton'
        to={`/notacidade/criar/${idCidade}`}
      >
        Criar nota
      </Link>
      {renderServerResponse()}
    </div>
  );
}
