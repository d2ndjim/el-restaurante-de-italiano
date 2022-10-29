import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuService from './menuService';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  homeMenu: [],
};

export const fetchHomeMenu = createAsyncThunk(
  'menu/fetchHomeMenu', async () => {
    const response = await menuService.fetchHomeMenu();
    return response;
  },
);

/* eslint-disable no-param-reassign */
export const menuSlice = createSlice({
  name: 'homeMenu',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHomeMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.homeMenu = action.payload;
      })
      .addCase(fetchHomeMenu.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = menuSlice.actions;
export const selectMenus = (state) => state.homeMenu;
export default menuSlice.reducer;
