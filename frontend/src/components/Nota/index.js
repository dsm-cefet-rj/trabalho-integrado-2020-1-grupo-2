import React, { useState, useEffect } from 'react';

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

  function handleDataChange(event) {
    if(event.target.value.length > 2048) return window.alert('Limite de caracteres atingindo!');
    setData(event.target.value);
  }

  function handleVisitsChange(event) {
    setVisits(event.target.value);
  }

  function handleClickEditButton() {
    setEditMode(!editMode);
  }

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
      <div className='nota-options'>
        <button id='editCityNoteButton' onClick={handleClickEditButton}>
          {editMode ? 'Visualizar' : 'Editar'}
        </button>
        <button
          id='saveCityNoteButton'
          onClick={handleClickSaveButton}
        >
          Salvar
        </button>
      </div>
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
      <button
        id='deleteCityNoteButton'
        onClick={() => handleExcluirNota(nota.id)}
      >
        Deletar nota
      </button>
    </div>
  );
}
