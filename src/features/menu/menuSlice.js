import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/home_menu';

export const fetchHomeMenu = createAsyncThunk(
  'menu/fetchHomeMenu', async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
);

export const menuSlice = createSlice({
  name: 'homeMenu',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchHomeMenu.fulfilled]: (state, action) => action.payload,
  },
});

export const { reset } = menuSlice.actions;
export const selectMenus = (state) => state.homeMenu;
export default menuSlice.reducer;
