import React, { useState, useEffect } from 'react';

import BottomBar from '../BottomBar/BottomBar'

/**
 * Função componente que renderiza uma nota
 * @function Nota
 */
export default function Nota(props) {
  const { nota } = props;
  const {handleExcluirNota, handleAtualizarNota} = props;

  const [data, setData] = useState('');
  const [visits, setVisits] = useState(0);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if(nota.data) setData(nota.data);
    if(nota.visits) setVisits(nota.visits);
  }, []);

  /**
 * Acionada quando o usuário digita no campo de dados da nota
 * @function handleDataChange
 * @param {Event} event - Evento acionado pelo usuário
 */
  function handleDataChange(event) {
    if(event.target.value.length > 2048) return window.alert('Limite de caracteres atingindo!');
    setData(event.target.value);
  }

  /**
 * Acionada quando o usuário digita no campo de visitas da nota
 * @function handleVisitsChange
 * @param {Event} event - Evento acionado pelo usuário
 */
  function handleVisitsChange(event) {
    setVisits(event.target.value);
  }

  /**
 * Acionada quando o usuário clica no botão de editar/salvar
 * @function handleClickEditButton
 */
  function handleClickEditButton() {
    setEditMode(!editMode);
  }

  /**
 * Acionada quando o usuário clica no botão de salvar
 * @function handleClickSaveButton
 */
  function handleClickSaveButton() {
    handleAtualizarNota({
      id: nota.id,
      created: nota.created,
      name: nota.name,
      data,
      visits,
      idCidade: nota.idCidade,
    });
    setEditMode(false);
  }

  return (
    <div className='nota'>
      <div className='nota-container'>
        {editMode ? (
          <textarea
            id='cityNote'
            type='text'
            placeholder='Digite sua nota'
            value={data}
            onChange={handleDataChange}
          ></textarea>
        ) : (
          <p>{data}</p>
        )}
      </div>
      <div className='visits'>
        <p>visitas</p>
        {editMode ? (
          <input
          id='noteVisits'
          type='number'
          value={visits}
          onChange={handleVisitsChange}
        ></input>
        ) : (
          <p>{visits}</p>
        )}
      </div>
      <BottomBar elements={[
        <button id='editCityNoteButton' onClick={handleClickEditButton}>
          {editMode ? 'Visualizar' : 'Editar'}
        </button>,
        <button
          id='saveCityNoteButton'
          onClick={handleClickSaveButton}
        >
          Salvar
        </button>,
        <button
        id='deleteCityNoteButton'
        onClick={() => handleExcluirNota(nota.id)}
      >
        Deletar anotação
      </button>,
      ]}/>
    </div>
  );
}
