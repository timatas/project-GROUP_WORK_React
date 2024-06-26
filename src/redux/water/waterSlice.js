import { createSlice } from '@reduxjs/toolkit';
import { fetchWaters, deleteWater, patchWater, addWater } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWaters.pending, handlePending)
      .addCase(fetchWaters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchWaters.rejected, handleRejected)
      //==========
      //   .addCase(addWater.pending, handlePending)
      //   .addCase(addWater.fulfilled, (state, action) => {
      //     state.loading = false;
      //     state.error = null;
      //     state.list.push(action.payload);
      //   })
      //     .addCase(addWater.rejected, handleRejected)
      //=============
      .addCase(addWater.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(addWater.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      //=======
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = state.list.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(patchWater.pending, handlePending)
      .addCase(patchWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = state.list.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(patchWater.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
