import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/menus/categorized?category=Wines';

export const fetchWines = createAsyncThunk('menu/fetchWines', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const wineSlice = createSlice({
  name: 'wine',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchWines.fulfilled]: (state, action) => action.payload,
  },
});

// export const { reset } = menuSlice.actions;
export const selectWines = (state) => state.wine;
export default wineSlice.reducer;
