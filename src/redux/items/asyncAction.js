import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProduct = createAsyncThunk('items/fetchProduct', async (params) => {
  const { currentPage } = params;
  const { data } = await axios.get('/items', {
    params: {
      page: currentPage,
      limit: 5,
    },
  });
  return data;
});

export const deleteItems = createAsyncThunk('posts/deleteItems', (id) => {
  axios.delete(`https://6320a58ae3bdd81d8eff1015.mockapi.io/items/${id}`);
});
