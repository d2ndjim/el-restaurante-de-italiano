import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/vegetarian';

export const fetchVegetarian = createAsyncThunk(
  'menu/fetchVegetarian',
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

export const vegetarianSlice = createSlice({
  name: 'vegetarian',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchVegetarian.fulfilled]: (state, action) => action.payload,

  },
});

// export const { reset } = menuSlice.actions;
export const selectVegetarian = (state) => state.vegetarian;
export default vegetarianSlice.reducer;
