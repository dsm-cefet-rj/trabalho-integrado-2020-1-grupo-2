import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import getWeathers from './getWeather';

const weathersAdapter = createEntityAdapter();

const initialState = weathersAdapter.getInitialState({
  status: 'not_loaded',
  error: null,
});

export const fetchWeathers = createAsyncThunk('weather/fetchWeathers', async (ids) => {
  const response = await getWeathers(ids);
  const data = await response.json();
  console.log(data);
  return data;
});

export const weathersSlice = createSlice({
  name: 'weathers',
  initialState: initialState,
  extraReducers: {
    [fetchWeathers.pending]:    (state, action) => {state.status = 'loading'},
    [fetchWeathers.fulfilled]:  (state, action) => {state.status = 'loaded'; weathersAdapter.setAll(state, action.payload);},
    [fetchWeathers.rejected]:   (state, action) => {state.status = 'failed'; state.error = action.error.message},
  },
});

export default weathersSlice.reducer;

export const {
  selectAll:  selectAllWeathers,
  selectById: selectWeathersById,
  selectIds:  selectWeathersIds,
} = weathersAdapter.getSelectors(state => state.weathers);
