import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectCidadesById } from '../../components/Cidade/slice';

import Navbar from '../../components/Navbar';
import Cidade from "../../components/Cidade";

export default function ClimaCidade() {

  const { id }  = useParams();

  const cidadeFound = useSelector(state => selectCidadesById(state, id));
  const weather = null;

  return (
    <div className='clima-cidade'>
      <Navbar title={cidadeFound.name} />
      <Cidade cidade={cidadeFound} />
    </div>
  );
}
