import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/desserts';

export const fetchDessert = createAsyncThunk('menu/fetchDessert', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const dessertSlice = createSlice({
  name: 'dessert',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchDessert.fulfilled]: (state, action) => action.payload,

  },
});

// export const { reset } = menuSlice.actions;
export const selectDesserts = (state) => state.dessert;
export default dessertSlice.reducer;
