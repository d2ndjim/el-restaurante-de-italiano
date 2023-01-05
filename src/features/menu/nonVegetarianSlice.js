import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/menus/categorized?category=Non-Vegetarian';

export const fetchNonVegetarian = createAsyncThunk(
  'menu/fetchNonVegetarian',
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

export const nonVegetarianSlice = createSlice({
  name: 'nonVegetarian',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchNonVegetarian.fulfilled]: (state, action) => action.payload,
  },
});

// export const { reset } = menuSlice.actions;
export const selectNonVegetarian = (state) => state.nonVegetarian;
export default nonVegetarianSlice.reducer;
