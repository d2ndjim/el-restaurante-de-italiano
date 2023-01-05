import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/menus/categorized?category=Drinks';

export const fetchDrinks = createAsyncThunk('menu/fetchDrinks', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const drinkSlice = createSlice({
  name: 'drink',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchDrinks.fulfilled]: (state, action) => action.payload,
  },
});

// export const { reset } = menuSlice.actions;
export const selectDrinks = (state) => state.drink;
export default drinkSlice.reducer;
