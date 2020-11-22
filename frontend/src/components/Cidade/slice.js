import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {httpDelete, httpGet, httpPut, httpPost} from '../../utils';
import {baseUrl} from '../../baseUrl';

const cidadesAdapter = createEntityAdapter();

const initialState = cidadesAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchCidades = createAsyncThunk('cidades/fetchCidades', async () => {
    return await httpGet(`${baseUrl}/cidades`);
});

export const deleteCidadeServer = createAsyncThunk('cidades/deleteCidadeServer', async (idcidade) => {
    await httpDelete(`${baseUrl}/cidades/${idcidade}`);
    return idcidade;
});

export const addCidadeServer = createAsyncThunk('cidades/addCidadeServer', async (cidade) => {
    return await httpPost(`${baseUrl}/cidades`, cidade);
});

export const updateCidadeServer = createAsyncThunk('cidades/updateCidadeServer', async (cidade) => {
    return await httpPut(`${baseUrl}/cidades/${cidade.id}`, cidade);
});

export const cidadesSlice = createSlice({
    name: 'cidades',
    initialState: initialState,
    extraReducers: {
       [fetchCidades.pending]:          (state, action) => {state.status = 'loading'},
       [fetchCidades.fulfilled]:        (state, action) => {state.status = 'loaded'; cidadesAdapter.setAll(state, action.payload);},
       [fetchCidades.rejected]:         (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteCidadeServer.pending]:    (state, action) => {state.status = 'loading'},
       [deleteCidadeServer.fulfilled]:  (state, action) => {state.status = 'deleted'; cidadesAdapter.removeOne(state, action.payload);},
       [addCidadeServer.pending]:       (state, action) => {state.status = 'loading'},
       [addCidadeServer.fulfilled]:     (state, action) => {state.status = 'saved'; cidadesAdapter.addOne(state, action.payload);},
       [updateCidadeServer.pending]:    (state, action) => {state.status = 'loading'},
       [updateCidadeServer.fulfilled]:  (state, action) => {state.status = 'saved'; cidadesAdapter.upsertOne(state, action.payload);},
    },
});

export default cidadesSlice.reducer;

export const {
    selectAll:  selectAllcidades,
    selectById: selectcidadesById,
    selectIds:  selectcidadesIds,
} = cidadesAdapter.getSelectors(state => state.cidades);
