import React from 'react';

import './BottomBarStyle.css';

/**
 * Renderiza a BottomBar da aplicação
 * @function BottomBar
 * @param {props} props - Informações para renderização como title
 */
export default function BottomBar(props) {

  return (
    <div className='BottomBar' style={props.style}>
      {props.elements}
    </div>
  );
}
