import { configureStore } from '@reduxjs/toolkit';

import items from './items/slice';

export const store = configureStore({
  reducer: {
    items,
  },
});
