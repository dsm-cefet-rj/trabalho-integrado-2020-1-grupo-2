import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home            from './pages/home/home';
import Signup          from './pages/signup/signup';
import SignupSucess    from './pages/signupSucess/signupSucess';
import Login           from './pages/login/login';
import Conta           from './pages/conta/conta';
import Dashboard       from './pages/dashboard/dashboard';
import ClimaCidade     from './pages/climaCidade/climaCidade';
import NotaCidade      from './pages/notaCidade/notaCidade';
import NotasCidade     from './pages/notasCidade/notasCidade';
import AdicionarCidade from './pages/adicionarCidade/adicionarCidade';
import CriarNotaCidade from './pages/criarNotaCidade/criarNotaCidade';

/**
 * Verifica se o usuário está autenticado
 * @function isAuthenticated
 */
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

/**
 * Gera as rotas da aplicação
 * @function Routes
 */
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
        <Route path="/adicionarcidade" component={AdicionarCidade} />
        <Route path="/climacidade/:idCidade" component={ClimaCidade} />
        <PrivateRoute path="/notascidade/:idCidade" component={NotasCidade} />
        <PrivateRoute path="/notacidade/:idNota" exact component={NotaCidade} />
        <PrivateRoute path="/notacidade/criar/:idCidade" component={CriarNotaCidade} />
      </Switch>
    </BrowserRouter>
  );
}
