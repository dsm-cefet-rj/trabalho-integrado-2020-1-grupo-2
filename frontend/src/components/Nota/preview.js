import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Função componente que renderiza o preview de uma nota
 * @function NotaPreview
 */
export default function NotaPreview({ nota, index }) {

  /**
 * Formata as datas em dd/mm/aa
 * @function dataAtualFormatada
 * @param {string} date - Evento acionado pelo usuário
 */
  function dataAtualFormatada(date){
    var data = new Date(date),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
  }
  
  return (
    <div id={`gotoNote${nota.id}`}>
      <div className="preview">
        <Link id={`goToNote${index}`} to={`/notacidade/${nota.id}`}>{nota.name}</Link >
        <p>{`Criada em: ${dataAtualFormatada(nota.created)}`}</p>
      </div>
    </div>
  );
}
