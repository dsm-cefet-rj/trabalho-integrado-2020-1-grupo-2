import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon      from '@material-ui/icons/Home';
import { httpGet }   from '../../utils';

import './NavbarStyle.css';

/**
 * Renderiza a Navbar da aplicação
 * @function Navbar
 * @param {props} props - Informações para renderização como title
 */
export default function Navbar(props) {
  const history = useHistory();
  const [user, setUser] = useState({});
  const statusCidade = useSelector(state => state.cidades.status);

  function handleClickLogin() {
    if(statusCidade === 'loaded') {
      window.location.href = 'http://localhost:3333/logout';
    } else {
      window.location.href = 'http://localhost:3333/OAuth/google/login';
    }
  }

  function generateGoBackButton(goBackPath) {
    if(!goBackPath) return;
    return (
      <IconButton id='goBackButton' type='button' onClick={() => history.push(goBackPath)} edge='start' color='inherit'>
        <ArrowBackIcon />
      </IconButton>
    );
  }

  function generateDashboardButton(isDashboard = false) {
    if(isDashboard) return;
    return (
      <IconButton id='goToDashboardButton' type='button' onClick={() => history.push('/dashboard')} edge='start' color='inherit'>
        <HomeIcon />
      </IconButton>
    );
  }

  async function getUser() {
    const user = await httpGet('http://localhost:3333/user');
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, [statusCidade]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppBar position='fixed'>
      <Toolbar className='navbar'>
        <div className='navButtons'>
          {generateGoBackButton(props.goBackPath)}
          {generateDashboardButton(props.isDashboard)}
        </div>
        <Typography variant='h4'>{props.title}</Typography>
        <Typography variant='h6'>{
          user.email === undefined ? '' : `Olá ${user.email}`
        }</Typography>
        <Button color='inherit' onClick={handleClickLogin}>{
          statusCidade === 'loaded' ? 'Logout' : 'Login'
        }</Button>
      </Toolbar>
    </AppBar>
  );
}
