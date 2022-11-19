import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

// const API_URL = 'http://localhost:3000/orders';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const makeOrder = createAsyncThunk(
  'order/makeOrder',
  async (menuId, thunkAPI) => {
    try {
      return await orderService.order(menuId);
    } catch (error) {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

/* eslint-disable no-param-reassign */
export const orderSlice = createSlice({
  name: 'order',
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
      .addCase(makeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(makeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = orderSlice.actions;
export const selectOrders = (state) => state.order;
export default orderSlice.reducer;
