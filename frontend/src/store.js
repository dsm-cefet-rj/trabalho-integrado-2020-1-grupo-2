import { configureStore } from '@reduxjs/toolkit';

import cidadesReducer     from './components/Cidade/CidadeSlice';
import weathersReducer    from './services/weather/weatherSlice';
import notasReducer       from './components/Nota/NotaSlice';

const store = configureStore({
  reducer: {
    cidades:  cidadesReducer,
    weathers: weathersReducer,
    notas:    notasReducer,
  }
});

export default store;
