import { configureStore } from '@reduxjs/toolkit';

import cidadesReducer     from './components/Cidade/slice';
import weathersReducer     from './services/weather/slice';
import notasReducer       from './components/Nota/slice';

const store = configureStore({
  reducer: {
    cidades:  cidadesReducer,
    weathers: weathersReducer,
    notas:    notasReducer,
  }
});

export default store;
