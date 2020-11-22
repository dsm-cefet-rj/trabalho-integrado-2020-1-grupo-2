import { configureStore } from '@reduxjs/toolkit';
import cidadesReducer from './components/Cidade/slice';

const store = configureStore({
  reducer: {
    cidades: cidadesReducer,
  }
});

export default store;
