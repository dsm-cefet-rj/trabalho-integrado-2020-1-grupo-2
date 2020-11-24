import React from "react";

import Navbar from '../../components/Navbar';

export default function AdicionarCidade() {

  return (
    <div className='adicionar-cidade'>
      <Navbar title='Adicionar Cidade'/>
      <div className='search-box'>
        <button>Pesquisar</button>
        <input type='text' placeholder='pesquise uma cidade'></input>
      </div>
    </div>
  );
}
