import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './NavbarStyle.css';

/**
 * Renderiza a Navbar da aplicação
 * @function Navbar
 * @param {props} props - Informações para renderização como title
 */
export default function Navbar(props) {
  const { goBack } = useHistory();
  console.log("Navbar: " + JSON.stringify(props));
  return (
    <AppBar position='static'>
      <Toolbar className='navbar'>
        <IconButton id='goBackButton' type='button' onClick={goBack} edge='start' color='inherit'>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant='h6'>{props.title}</Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
}
