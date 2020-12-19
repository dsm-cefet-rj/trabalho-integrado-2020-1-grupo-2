import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';

import store from './store';
import './global.css';

/**
 * Gera a aplicação web
 * @function App
 */
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth='sm'>
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
