import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './asyncAction';

const initialState = {
  items: [],
  currentPage: 1,
};
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.items = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.items = [];
    });
  },
});

export const { setItems, setCurrentPage } = itemsSlice.actions;
export default itemsSlice.reducer;
