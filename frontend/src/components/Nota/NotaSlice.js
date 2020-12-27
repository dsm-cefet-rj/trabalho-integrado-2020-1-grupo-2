import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils';
import {baseUrl} from '../../baseUrl';

const notasAdapter = createEntityAdapter();

const initialState = notasAdapter.getInitialState({
  status: 'not_loaded',
  error: null,
});

export const fetchNotas = createAsyncThunk('notas/fetchNotas', async () => {
  return await httpGet(`${baseUrl}/notas`);
});

export const deleteNotaServer = createAsyncThunk('notas/deleteNotaServer', async (idnota) => {
  await httpDelete(`${baseUrl}/notas/${idnota}`);
  return idnota;
});

export const addNotaServer = createAsyncThunk('notas/addNotaServer', async (nota) => {
  return await httpPost(`${baseUrl}/notas`, nota);
});

export const updateNotaServer = createAsyncThunk('notas/updateNotaServer', async (nota) => {
  return await httpPut(`${baseUrl}/notas/${nota.id}`, nota);
});

export const notasSlice = createSlice({
  name: 'notas',
  initialState: initialState,
  extraReducers: {
    [fetchNotas.pending]:          (state, action) => {state.status = 'loading'},
    [fetchNotas.fulfilled]:        (state, action) => {state.status = 'loaded'; notasAdapter.setAll(state, action.payload);},
    [fetchNotas.rejected]:         (state, action) => {state.status = 'failed'; state.error = action.error.message},
    [deleteNotaServer.pending]:    (state, action) => {state.status = 'loading'},
    [deleteNotaServer.fulfilled]:  (state, action) => {state.status = 'deleted'; notasAdapter.removeOne(state, action.payload);},
    [addNotaServer.pending]:       (state, action) => {state.status = 'loading'},
    [addNotaServer.fulfilled]:     (state, action) => {state.status = 'saved'; notasAdapter.addOne(state, action.payload);},
    [updateNotaServer.pending]:    (state, action) => {state.status = 'loading'},
    [updateNotaServer.fulfilled]:  (state, action) => {state.status = 'saved'; notasAdapter.upsertOne(state, action.payload);},
  },
});

export default notasSlice.reducer;

export const {
    selectAll:  selectAllNotas,
    selectById: selectNotasById,
    selectIds:  selectNotasIds,
} = notasAdapter.getSelectors(state => state.notas);
