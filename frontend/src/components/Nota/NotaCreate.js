import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';

import SchemaNotas from './NotaSchema';

/**
 * Renderiza a criação de nota
 * @function CriarNota
 */
export default function CriarNota(props) {
  const { handleCriarNota } = props;
  const { idCidade } = props;

  const history = useHistory();
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [visits, setVisits] = useState(0);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SchemaNotas),
  })

  /**
 * Acionada quando o usuário digita no campo de dados da nota
 * @function handleDataChange
 * @param {Event} event - Evento acionado pelo usuário
 */
  function handleDataChange(event) {
    setData(event.target.value);
  }

  /**
 * Acionada quando o usuário digita no campo de nome da nota
 * @function handleNameChange
 * @param {Event} event - Evento acionado pelo usuário
 */
  function handleNameChange(event) {
    setName(event.target.value);
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
 * Acionada quando o usuário clica em criar nota
 * @function onSubmit
 */
  function onSubmit() {
    handleCriarNota({
      name,
      data,
      visits,
      idCidade,
    });
    history.push(`/notascidade/${idCidade}`);
  }

  return (
    <div className='nota-criar'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input
            id='noteName'
            type='text'
            value={name}
            onChange={handleNameChange}
            ref={register}
            name='name'
          ></input>
          &nbsp;<span>{errors.name?.message}</span>
        </label>
        <label>
          Nota:
          <textarea
            id='cityNote'
            type='text'
            placeholder='Digite sua nota'
            value={data}
            onChange={handleDataChange}
            ref={register}
            name='data'
          ></textarea>
        </label>
        &nbsp;<span>{errors.data?.message}</span>
        <label>
          Visitas:
          <input
            id='noteVisits'
            type='number'
            value={visits}
            onChange={handleVisitsChange}
            ref={register}
            name='visits'
          ></input>
          &nbsp;<span>{errors.visits?.message}</span>
        </label>
        <button
          id='createCityNoteButton'
          type='submit'
        >
          Criar
        </button>
      </form>
    </div>
  );
}
