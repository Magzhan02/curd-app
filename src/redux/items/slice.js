import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct, deleteItems } from './asyncAction';

const initialState = {
  items: [],
  currentPage: 1,
  isLoaded: false,
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
      state.isLoaded = false;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoaded = true;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.items = [];
      state.isLoaded = false;
    });

    builder.addCase(deleteItems.pending, (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.meta.arg);
    });
  },
});

export const { setItems, setCurrentPage } = itemsSlice.actions;
export default itemsSlice.reducer;
