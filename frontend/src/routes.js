import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/signup';
import SignupSucess from './pages/signupSucess';
import Login from './pages/login';
import Conta from './pages/conta';
import Dashboard from './pages/dashboard';
import ClimaCidade from './pages/climaCidade';
import NotaCidade from './pages/notaCidade';
import NotasCidade from './pages/notasCidade';
import AdicionarCidade from './pages/adicionarCidade';

// Faz nada por enquanto

function isAuthenticated() {
  const access_token = sessionStorage.getItem("access_token");
  if (access_token != null) {
    return true;
  } else {
    // return false
    return true;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = { props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signupsucess" component={SignupSucess} />
        <Route path="/login" component={Login} />
        <Route path="/conta" component={Conta} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/climacidade/:id" component={ClimaCidade} />
        <Route path="/adicionarcidade" component={AdicionarCidade} />
        <PrivateRoute path="/notascidade/:id" component={NotasCidade} />
        <PrivateRoute path="/notacidade/:id" component={NotaCidade} />
      </Switch>
    </BrowserRouter>
  );
}
